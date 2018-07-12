import React, {Component} from 'react';
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
import {AuthProvider} from "./util/AuthContext";
import HistoryDetailsPage from "./components/Details/HistoryDetailsPage";
import NavigationPage from "./components/HomePage/NavigationPage";
import SearchArticles from "./components/HomePage/SearchArticles";

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
            <AuthProvider>
                <div className="App container-fluid">
                    <NavigationPage/>
                    <div id="container">
                        <Header loggedIn={localStorage.getItem('authToken') != null} onLogout={this.onLogout}/>
                        <h1>Welcome to SoftUni Wiki!</h1>
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/user/register" component={RegisterPage}/>
                            <Route path="/user/login" component={LoginPage}/>
                            <PrivateRoute path="/article/all" component={AllArticles}/>
                            <PrivateRoute path="/article/search" component={SearchArticles}/>
                            <PrivateRoute path="/article/create" component={CreatePage}/>
                            <PrivateRoute path="/article/edit/:id" component={EditPage}/>
                            <PrivateRoute path="/article/history/:id" component={HistoryPage}/>
                            <PrivateRoute path="/edit/:id" component={HistoryDetailsPage}/>
                            <Route loggedIn={localStorage.getItem('authToken') != null} path="/article/details/:id"
                                   component={DetailsPage}/>
                        </Switch>
                        <footer>
                            SoftUni Wiki &copy; 2018
                        </footer>
                    </div>
                </div>
            </AuthProvider>
        );
    }
}

export default withRouter(App);
