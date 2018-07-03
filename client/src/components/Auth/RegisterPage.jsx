import React, {Component} from 'react';
import Input from '../common/Input';
import {register} from '../../api/remote';
import {withRouter} from 'react-router-dom';

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // name: '',
            email: '',
            password: '',
            repeat: '',
            error: false
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    async onSubmitHandler(e) {
        e.preventDefault();
        if (this.state.password !== this.state.repeat) {
            this.setState({
                error: {
                    message: 'Check the form for errors',
                    errors: {
                        repeat: "Passwords don't match"
                    }
                }
            });
            return;
        }
        const res = await register(this.state.email, this.state.password);
        if (!res.success) {
            this.setState({error: res});
            return;
        }
        this.props.history.push('/login');
    }

    render() {
        let errors = null;
        if (this.state.error) {
            errors = (
                <div>
                    <h2 className="errorMessage">{this.state.error.message}</h2>
                    {Object.keys(this.state.error.errors).map(k => {
                        return <p key={k}>{this.state.error.errors[k]}</p>;
                    })}
                </div>
            );
        }

        return (
            <section>
                <h2>Register</h2>
                {errors}
                <div className="spacer">
                    <form onSubmit={this.onSubmitHandler}>
                        <label>Email:</label>
                        <input type="text" onChange={this.onChangeHandler} className="form-control" id="inputEmail"
                               placeholder="Email" name="email" required value={this.state.email}/>
                        <label>Password:</label>
                        <input onChange={this.onChangeHandler} type="password" className="form-control" id="inputPassword"
                               placeholder="Password" required name="password" value={this.state.password}/>
                        <label>Repeat password:</label>
                        <input onChange={this.onChangeHandler} type="password" className="form-control"
                               id="repeat" placeholder="Confirm Password" required name="repeat" value={this.state.repeat}/>
                        <input type="submit" value="Register"/>
                    </form>
                </div>
            </section>
        )
    }

}

export default withRouter(RegisterPage);