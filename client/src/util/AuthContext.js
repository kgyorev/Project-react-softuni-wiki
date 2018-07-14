import React, {Component} from 'react';
import {getUserDetails} from "../api/remote";

const AuthContext = React.createContext();

class AuthProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuth: false,
            user:'',
            isAdmin:false,
            doRequest:true

        };

        this.loginAuth = this.loginAuth.bind(this);
        this.logoutAuth = this.logoutAuth.bind(this)
        this.getUserData = this.getUserData.bind(this)
    }
    componentDidMount() {
        this.getUserData();
    }
    componentWillMount() {
        this.getUserData();
    }
    componentWillReceiveProps() {
        this.getUserData();
    }
    async loginAuth(user,isAuth,isAdmin) {
        this.setState({
            isAuth: isAuth,
            user:user,
            isAdmin:isAdmin
          });
    }

    async getUserData(){
        if(!localStorage.getItem('authToken')){
            this.setState({
                isAuth: false,
                user:'',
                isAdmin:false
            });
        } else
        {
            const res = await getUserDetails();
            this.setState({
                isAuth: res.isAuth,
                user: res.user,
                isAdmin: res.isUserAuthorized
            })
        }
    }

    logoutAuth(e) {
        e.preventDefault();
        localStorage.clear();
        this.setState({
            isAuth: false,
            user:'',
            isAdmin:false
        })
    }
    render() {
        // if(localStorage.getItem('authToken')&&!this.state.isAuth&&this.state.doRequest){
        //     this.getUserData();
        //     this.setState({doRequest:false})
        // }
        return (
            <AuthContext.Provider
                value={{
                    isAuth: this.state.isAuth,
                    user: this.state.user,
                    isAdmin: this.state.isAdmin,
                    loginAuth: this.loginAuth,
                    logoutAuth: this.logoutAuth
                }}
            >
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

const AuthConsumer = AuthContext.Consumer
export  {AuthProvider, AuthConsumer}