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
            editLs: [],
            article:{}
        };
    }

    componentDidMount() {
        this.getData();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.page !== this.props.match.params.page) {
            console.log('here');
            this.getData(Number(nextProps.match.params.page));
        }
    }

    async getData() {
        const data = await getAllArticleHistory(this.props.match.params.id);
        console.log(data)
        this.setState(data);
    }


    render() {

        return (
            <div>
                <ArticlesHistoryList editLs={this.state.editLs} article ={this.state.article} title = 'Edit hostory' className="spacer"/>
            </div>
        );
    }
}