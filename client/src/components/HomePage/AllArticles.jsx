import React, {Component} from 'react';
import {getAllArticlePage} from '../../api/remote';
import ArticlesList from './ArticlesList';
import {Link} from 'react-router-dom';

export default class AllArticles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            success: false,
            totalCount:0,
            page:1,
            infoMessage:'Loading ...',
            articles: [],
        };
    }

    componentDidMount() {
        this.getData();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.page !== this.props.match.params.page) {
            this.getData(Number(nextProps.match.params.page));
        }
    }

    async getData(page = Number(this.props.match.params.page) || 1) {
        const data = await getAllArticlePage(page);
        if(!data.articles||data.articles.length===0){
            data.infoMessage='No Articles Found'
        }
        data.page=page;
        this.setState(data);
    }


    render() {
        const page = Number(this.state.page) || 1;
        let totalCount = this.state.totalCount;
        let next =false;
        let totalPages = Math.ceil(totalCount/10.0);
        console.log('TotalCount=',totalCount)
        if(totalPages>page){
            next=true
        }
        return (
            <div>
                <ArticlesList page={page} articles={this.state.articles} infoMessage={this.state.infoMessage} title='All articles' className="spacer-list"/>
                <div className="pagination">
                    {totalPages>1&&<p>{'Page '+(this.state.page||1)+' / '+totalPages}</p>}
                    {page > 1 && <Link to={'/article/all/' + (page - 1)}>&lt;</Link>}
                    {next&&<Link to={'/article/all/' + (page + 1)}>&gt;</Link>}
                </div>
            </div>
        );

    }
}