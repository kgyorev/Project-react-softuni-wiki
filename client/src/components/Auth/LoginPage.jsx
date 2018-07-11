import React, {Component} from 'react';
import Input from '../common/Input';
import {login} from '../../api/remote';
import {withRouter} from 'react-router-dom';
import {AuthConsumer} from "../../util/AuthContext";

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error:false
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    async onSubmitHandler(e,loginAuth) {
        e.preventDefault();
        const res = await login(this.state.email, this.state.password);
        if (!res.success) {
            this.setState({error: res.message});
            return;
        }
        loginAuth(this.state.email,res.isAuth,res.isUserAuthorized);
        localStorage.setItem('authToken', res.token);
      //  console.log(res)
      //  localStorage.setItem('user', res.user);
       // localStorage.setItem('isUserAuthorized', res.isUserAuthorized);
        this.props.history.push('/');
    }

// <section>
// <h2>Login</h2>
// <div class="spacer">
// <form method="post" action="/user/login">
// <label>Email:</label>
// <input type="text" class="form-control" id="inputEmail" placeholder="Email" name="email">
// <label>Password:</label>
// <input type="password" class="form-control" id="inputPassword" placeholder="Password" name="password">
// <input type="submit" value="Login">
// </form>
// </div>
// </section>


    render() {
        return (
            <AuthConsumer>
                {({loginAuth, logoutAuth}) => (
                    <section>
                        {this.state.error}
                        <h2>Login</h2>
                        <form onSubmit={e => {
                            this.onSubmitHandler(e,loginAuth);
                        }}>
                            <Input
                                name="email"
                                classNameInput="form-control"
                                value={this.state.email}
                                onChange={this.onChangeHandler}
                                label="E-mail"
                            />
                            <Input
                                name="password"
                                classNameInput="form-control"
                                type="password"
                                value={this.state.password}
                                onChange={this.onChangeHandler}
                                label="Password"
                            />
                            <input type="submit" value="Login"/>
                        </form>
                    </section>
                )
                }
            </AuthConsumer>
        );
    }
}

export default withRouter(LoginPage);