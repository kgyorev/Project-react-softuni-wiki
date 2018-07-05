import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import RegisterPage from "./components/Auth/RegisterPage";
import LoginPage from "./components/Auth/LoginPage";
import Header from "./components/common/Header";

class App extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        localStorage.clear();
        this.props.history.push('/');
    }

    render() {
    return (
      <div className="App container-fluid">
          <aside>
              <div className="center">
                  <img className="logo" src="/img/logo.png" alt="logo"/>
              </div>
              <nav>
                  <a href="/">Main Page</a>
                  <a href="article.html">Latest Article</a>
                  <a href="/article/all">All Articles</a>
                  <form>
                      <input type="text"/>
                      <input type="submit" value="Search"/>
                  </form>
                  <a href="/article/create">Create New Article</a>
              </nav>
          </aside>
          <div id="container">
          <Header loggedIn={localStorage.getItem('authToken') != null} onLogout={this.onLogout} />
          <h1>Welcome to SoftUni Wiki!</h1>
          <Switch>
              <Route path="/user/register" component={RegisterPage} />
              <Route path="/user/login" component={LoginPage} />
          </Switch>
          <footer>
              SoftUni Wiki &copy; 2018
          </footer>
          </div>
      </div>
    );
  }
}

export default withRouter(App);
