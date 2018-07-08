import React, { Component } from 'react';
import { getAllArticlePage} from '../../api/remote';
import ArticlesList from './ArticlesList';
import { Link } from 'react-router-dom';
import LastArticle from "./LastArticle";

export default class AllArticles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            success: false,
            articles: [],
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
        const data = await getAllArticlePage();
        console.log(data)
        this.setState(data);
    }


    render() {

        return (
            <div>
                <ArticlesList articles={this.state.articles} title = 'All articles' className="spacer"/>
            </div>
        );
    }
}