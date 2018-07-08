import React, { Component } from 'react';
import { getDetails } from '../../api/remote';
import DetailsMenu from "./DetailsMenu";

export default class DetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            article: false,
            isUserAuthorized:false
        };
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const data = await getDetails(this.props.match.params.id);
        console.log(data)
        this.setState({article:data.article,isUserAuthorized:data.isUserAuthorized});
    }

    render() {
        let main = <p>Loading &hellip;</p>;
        if (this.state.article) {
            const article = this.state.article;
            main = (
                <div className="spacer">
                    <DetailsMenu id={article._id} title={article.title} loggedInDetails={localStorage.getItem('authToken') != null} />
                    <article>
                        {article.lastEdit.content}
                    </article>
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