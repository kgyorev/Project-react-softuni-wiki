import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import RegisterPage from "./components/Auth/RegisterPage";

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
          <aside>
              <div className="center">
                  <img className="logo" src="/img/logo.png" alt="logo" />
              </div>

              <nav>
                  <a href="/">Main Page</a>
                  <a href="article.html">Latest Article</a>
                  <a href="/article/all">All Articles</a>
                  <form>
                      <input type="text" />
                          <input type="submit" value="Search" />
                  </form>
                  <a href="/article/create">Create New Article</a>
              </nav>
          </aside>
          <div id="container">

              <header>
                  <a href="/user/login">Login</a>
                  <a href="/user/register">Register</a>
                  {/*<span>Welcome({{user.email}})!</span>*/}
                  <a href="/user/logout">[Logout]</a>
              </header>
              <h1>Welcome to SoftUni Wiki!</h1>
              <Route path="/user/register" component={RegisterPage} />
              {/*{{{body}}}*/}
              <footer>
                  SoftUni Wiki &copy; 2018
              </footer>
          </div>
      </div>
    );
  }
}

export default App;
