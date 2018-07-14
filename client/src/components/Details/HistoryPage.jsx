import React, { Component } from 'react';
import { getAllArticleHistory} from '../../api/remote';

import { Link } from 'react-router-dom';
import ArticlesList from "../HomePage/ArticlesList";
import ArticlesHistoryList from "./ArticlesHistoryList";


export default class HistoryPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            success: false,
            editLs: false,
            article:false
        };
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const data = await getAllArticleHistory(this.props.match.params.id);
        this.setState(data);
    }


    render() {

        let main = <h1 className="infoMessage">Loading &hellip;</h1>;
        if (this.state.article&&this.state.editLs) {
            main = (
                <div>
                    <ArticlesHistoryList editLs={this.state.editLs} article ={this.state.article} title = 'Edit hostory' className="spacer"/>
                </div>
            );
        }
        return (
            <div className="container">
                {main}
            </div>
        );

    }
}