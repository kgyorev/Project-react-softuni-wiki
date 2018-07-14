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
            totalCount:0,
            page:1,
            infoMessage:'Loading ...',
            searchStr:''
        }
    }

    componentDidMount() {
        console.log('initial');
        const parsed = qs.parse(this.props.location.search);
        this.setState({searchStr:parsed.searchStr,page:parsed.page});
        this.getData(parsed.searchStr,parsed.page);
    }

    componentWillReceiveProps(nextProps) {
        const parsedNew = qs.parse(nextProps.location.search);
        this.setState({searchStr:parsedNew.searchStr,page:parsedNew.page})
        this.getData(parsedNew.searchStr,parsedNew.page);
    }

    async getData(searchStr,page) {
        console.log('Search=',searchStr)
        const data = await searchArticles(searchStr,page);
        console.log(data)
        if(data.articles.length===0){
            data.infoMessage='No Articles Found'
        }
        this.setState(data);
    }


    render() {
        const page = Number(this.state.page) || 1;
        let totalCount = this.state.totalCount;
        let next =false;
        let totalPages = Math.ceil(totalCount/10.0);
        if(totalPages>page){
            next=true
        }
        return (
            <div>
                <ArticlesList page={page} articles={this.state.articles} title='Articles Found' infoMessage={this.state.infoMessage}  className="spacer"/>
                <div className="pagination">
                    {totalPages>1&&<p>{'Page '+(this.state.page||1)+' / '+totalPages}</p>}
                    {page > 1 && <Link to={'/article/search?searchStr=' + this.state.searchStr +'&page='+ (page - 1)}>&lt;</Link>}
                    {next&&<Link to={'/article/search?searchStr=' + this.state.searchStr+'&page=' + (page + 1)}>&gt;</Link>}
                </div>
            </div>
        );
    }
}