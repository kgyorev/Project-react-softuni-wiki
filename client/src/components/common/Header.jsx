import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
    render() {
        const {loggedIn, onLogout} = this.props;
        const user = localStorage.getItem('user');
        // const loggedInSection =   <div id="profile"><span id="username">Hello, {user}!</span></div>
        // console.dir(user)
        //  <NavLink exact to="/" activeClassName="active">Home</NavLink>

        //avascript:void(0) polzva se za href za da se kaji da ne pravi nishto
        // Navlink ima property activeClassName , znae kade sme i dava stil na elementa
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