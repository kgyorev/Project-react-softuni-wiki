import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {AuthConsumer} from "../../util/AuthContext";

class Header extends Component {
    render(){
        return(<header>
            <AuthConsumer>
                {({isAuth, login, logout}) => (
                    <div>
                        {isAuth && <span>Welcome({'aaa'})!</span>}
                        {isAuth && <a href="javascript:void(0)" onClick={e => {
                            logout(e);
                            this.props.history.push('/')
                        }}> [Logout]</a>}
                        {!isAuth && <NavLink to="/user/login" activeClassName="active">Login</NavLink>}
                        {!isAuth && <NavLink to="/user/register" activeClassName="active">Register</NavLink>}
                    </div>
                )}
            </AuthConsumer>
        </header>
        )
    }
}
export default withRouter(Header);