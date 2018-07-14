import React, {Component} from 'react';
import {getHomePage, deleteHotel} from '../../api/remote';
import ArticlesList from './ArticlesList';
import {Link, withRouter} from 'react-router-dom';
import LastArticle from "./LastArticle";
import * as qs from 'query-string';

class NavigationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            success: false,
            articles: [],
            article: {},
            displayContent: '',
            searchStr: ''
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    componentWillReceiveProps() {
        this.getData();
    }

    async getData() {
        const data = await getHomePage();
        const parsed = qs.parse(this.props.location.search);
        data.searchStr = parsed.searchStr||'';
        this.setState(data);
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    async onSubmitHandler(e) {
        e.preventDefault();
        this.props.history.push('/article/search?searchStr=' + this.state.searchStr);
    }

    render() {
        return (
            <aside>
                <div className="center">
                    <img className="logo" src="/img/logo.png" alt="logo"/>
                </div>
                <nav>
                    <Link to={'/'}>Main Page</Link>
                    {this.state.article&&<Link to={'/article/details/' + this.state.article._id}>Latest Article</Link>}
                    <Link to={'/article/all'}>All Articles</Link>
                    <form onSubmit={this.onSubmitHandler}>
                        <input onChange={this.onChangeHandler} name="searchStr" id="searchStr" type="text" value={this.state.searchStr}/>
                        <input type="submit" value="Search"/>
                    </form>
                    <Link to={'/article/create'}>Create New Article</Link>
                </nav>
            </aside>
        );
    }
}


export default withRouter(NavigationPage)