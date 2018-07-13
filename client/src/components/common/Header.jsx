import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {AuthConsumer} from "../../util/AuthContext";

class Header extends Component {
    render() {
        return (
            <AuthConsumer>
                {({isAuth, user, logoutAuth}) => (
                    <header>
                        <div>
                            {isAuth && <span>Welcome({user})!</span>}
                            {isAuth && <a href="javascript:void(0)" onClick={e => {
                                logoutAuth(e);
                                this.props.history.push('/')
                            }}> [Logout]</a>}
                            {!isAuth && <NavLink to="/user/login" activeClassName="active">Login</NavLink>}
                            {!isAuth && <NavLink to="/user/register" activeClassName="active">Register</NavLink>}
                        </div>
                    </header>
                )}
            </AuthConsumer>
        )
    }
}

export default withRouter(Header);