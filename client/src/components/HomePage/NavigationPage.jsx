import React, { Component } from 'react';
import { getHomePage, deleteHotel } from '../../api/remote';
import ArticlesList from './ArticlesList';
import {Link, withRouter} from 'react-router-dom';
import LastArticle from "./LastArticle";

class NavigationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            success: false,
            articles: [],
            article:{},
            displayContent: '',
            searchStr:''
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.match.params.page !== this.props.match.params.page) {
    //         console.log('here');
    //         this.getData(Number(nextProps.match.params.page));
    //     }
    // }

    async getData() {
        const data = await getHomePage();
        console.log(data)
        data.searchStr='';
        this.setState(data);
    }
    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    async onSubmitHandler(e) {
        e.preventDefault();
        // this.setState({submitting: true});
        // const article = {
        //     title: this.state.title,
        //     content: this.state.content,
        // };
        // const error = {message: '', errors: {}};
        // if (article.title.length < 1) {
        //     error.message = 'Check the form for errors';
        //     error.errors.title = 'Invalid Title.';
        // }
        // if (article.content.length < 1) {
        //     error.message = 'Check the form for errors';
        //     error.errors.content = 'Invalid Content.';
        // }
        // if (error.message) {
        //     this.setState({error, submitting: false});
        //     return;
        // }
        // this.setState({error: false});
        // const res = await editArticle(this.state.id, article);
        //
        // if (!res.success) {
        //     this.setState({error: res, submitting: false});
        //     return;
        // }
        // this.setState({submitting: false});
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
                    <Link to={'/article/details/' + this.state.article._id}>Latest Article</Link>
                    <Link to={'/article/all'}>All Articles</Link>
                    <form onSubmit={this.onSubmitHandler}>
                        <input onChange={this.onChangeHandler} name="searchStr" id="searchStr" type="text"/>
                        <Link to={'/article/search?searchStr=' + this.state.searchStr}>Search Articles</Link>
                        <input type="submit" value="Search"/>
                    </form>
                    <Link to={'/article/create'}>Create New Article</Link>
                </nav>
            </aside>
        );
    }
}


export default  withRouter(NavigationPage)