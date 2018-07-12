import React, {Component} from 'react';
import {searchArticles} from '../../api/remote';
import ArticlesList from './ArticlesList';
import {Link} from 'react-router-dom';
import LastArticle from "./LastArticle";
import * as qs from 'query-string';

export default class SearchArticles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            success: false,
            articles: [],
            searchStr:''
        }
    }

    componentDidMount() {
        console.log('initial');
        const parsed = qs.parse(this.props.location.search);
        this.setState({searchStr:parsed.searchStr})
        this.getData(parsed.searchStr);
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps=',nextProps)
        // const parsedOld = qs.parse(this.props.searchStr);
         const parsedNew = qs.parse(nextProps.location.search);
        console.log('parsedNew=',parsedNew);
        this.setState({searchStr:parsedNew.searchStr})
        this.getData(parsedNew.searchStr);
        // if (parsedOld.searchStr !== parsedNew.searchStr) {
        //     console.log('here');
        //     this.getData(parsedNew.searchStr);
        // }else{
        //     console.log('equal');
        // }

    }

    async getData(searchStr) {
        // const parsed = qs.parse(this.props.location.search);
        // console.log('Parsed=',parsed.searchStr)
        console.log('Search=',searchStr)
        const data = await searchArticles(searchStr);
        console.log(data)
        this.setState(data);
    }


    render() {

        return (
            <div>
                <ArticlesList articles={this.state.articles} title='Articles Found' className="spacer"/>
            </div>
        );
    }
}