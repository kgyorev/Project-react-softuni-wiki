import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import {AuthProvider} from "./util/AuthContext";

ReactDOM.render((
    <Router>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </Router>
), document.getElementById('root'));
registerServiceWorker();
