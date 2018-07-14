import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';

class NoMatch extends Component {
    render() {
        return (
            <div>
                <h1 className="errorMessage">Page Not Found</h1>
            </div>

        )
    }
}

export default NoMatch;