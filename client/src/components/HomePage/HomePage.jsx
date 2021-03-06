import React, { Component } from 'react';
import { getHomePage, deleteHotel } from '../../api/remote';
import ArticlesList from './ArticlesList';
import LastArticle from "./LastArticle";

export default class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            success: false,
            articles: [],
            article:false,
            displayContent: ''
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
        const data = await getHomePage();
        console.log(data)
        this.setState(data);
    }


    render() {

        return (
            <div>
                <LastArticle article={this.state.article} displayContent ={this.state.displayContent} />
                <ArticlesList articles={this.state.articles} homePage={true} title = 'Recently added articles' id = 'recent'/>
            </div>
        );
    }
}