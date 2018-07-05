import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
    render() {
        const {loggedIn, onLogout} = this.props;
        const user = localStorage.getItem('user');
        // const loggedInSection =   <div id="profile"><span id="username">Hello, {user}!</span></div>
        // console.dir(user)
        //  <NavLink exact to="/" activeClassName="active">Home</NavLink>
        return (
            <header>

                {
                    loggedIn && <span>Welcome({user})!</span>
                }
                {
                    loggedIn && <a href="javascript:void(0)" onClick={onLogout}> [Logout]</a>
                }
                {
                    !loggedIn && <NavLink to="/user/login" activeClassName="active">Login</NavLink>
                }
                {
                    !loggedIn && <NavLink to="/user/register" activeClassName="active">Register</NavLink>
                }
            </header>
        );
    }
}