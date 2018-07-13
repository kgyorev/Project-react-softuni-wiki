import React, {Component} from 'react';
import {Link, Route, Switch, withRouter} from 'react-router-dom';
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
import HistoryDetailsPage from "./components/Details/HistoryDetailsPage";
import NavigationPage from "./components/HomePage/NavigationPage";
import SearchArticles from "./components/HomePage/SearchArticles";
import {AuthConsumer} from "./util/AuthContext";

class App extends Component {
    constructor(props) {
        super(props);

        //  this.onLogout = this.onLogout.bind(this);
    }

    // onLogout() {
    //     localStorage.clear();
    //     this.props.history.push('/');
    // }

    render() {
        return (
            <div className="App container-fluid">
                <NavigationPage/>
                <div id="container">
                    <Header/>
                    <h1>Welcome to SoftUni Wiki!</h1>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/user/register" component={RegisterPage}/>
                        <Route path="/user/login" component={LoginPage}/>
                        <Route path="/article/all" component={AllArticles}/>
                        <Route path="/article/search" component={SearchArticles}/>
                        <Route path="/article/details/:id" component={DetailsPage}/>
                        <PrivateRoute path="/article/create" component={CreatePage}/>
                        <PrivateRoute path="/article/edit/:id" component={EditPage}/>
                        <PrivateRoute path="/article/history/:id" component={HistoryPage}/>
                        <PrivateRoute path="/edit/:id" component={HistoryDetailsPage}/>
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
