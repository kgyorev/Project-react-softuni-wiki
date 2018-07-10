import React, {Component} from 'react';
import {login} from "../api/remote";

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
    state = { isAuth: false }
    constructor() {
        super()
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }
    async login(email,password,e) {
        // setting timeout to mimic an async login
        console.log(password)
        e.preventDefault();
        const res = await login(email, password);
        if (!res.success) {
            this.setState({error: res});
            return;
        }
        localStorage.setItem('authToken', res.token);
        // console.log(res)
        // localStorage.setItem('user', res.user);
        // localStorage.setItem('isUserAuthorized', res.isUserAuthorized);
        this.setState({ isAuth: true });
    }
    logout(e) {
        e.preventDefault()
        localStorage.clear();
        this.setState({ isAuth: false })
    }
    render() {
        return (
            <AuthContext.Provider
                value={{
                    isAuth: this.state.isAuth,
                    login: this.login,
                    logout: this.logout
                }}
            >
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

const AuthConsumer = AuthContext.Consumer
export  {AuthProvider, AuthConsumer}