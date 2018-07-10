import React, { Component } from 'react';
import {Link, Route, Switch, withRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import RegisterPage from "./components/Auth/RegisterPage";
import LoginPage from "./components/Auth/LoginPage";
import Header from "./components/common/Header";
import HomePage from "./components/HomePage/HomePage";
import CreatePage from "./components/Create/CreatePage";
import PrivateRoute from "./components/common/PrivateRoute";
import DetailsPage from "./components/Details/DetailsPage";
import EditPage from "./components/Edit/EditPage";
import AllArticles from "./components/HomePage/AllArticles";
import HistoryPage from "./components/Details/HistoryPage";

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
                  <Link to={'/article/all'}>All Articles</Link>
                  <form>
                      <input type="text"/>
                      <input type="submit" value="Search"/>
                  </form>
                  <Link to={'/article/create'}>Create New Article</Link>
              </nav>
          </aside>
          <div id="container">
          <Header loggedIn={localStorage.getItem('authToken') != null} onLogout={this.onLogout} />
          <h1>Welcome to SoftUni Wiki!</h1>
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/user/register" component={RegisterPage} />
              <Route path="/user/login" component={LoginPage} />
              <PrivateRoute path="/article/all" component={AllArticles} />
              <PrivateRoute path="/article/create" component={CreatePage} />
              <PrivateRoute path="/article/edit/:id" component={EditPage} />
              <PrivateRoute path="/article/history/:id" component={HistoryPage} />
              <Route loggedIn={localStorage.getItem('authToken') != null}  path="/article/details/:id" component={DetailsPage} />
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
