import React, { Component } from 'react';
import { getEditDetails } from '../../api/remote';
import DetailsMenu from "./DetailsMenu";

export default class HistoryDetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            article: false,
            edit:false,
            isUserAuthorized:false
        };
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const data = await getEditDetails(this.props.match.params.id);
        console.log(data)
        this.setState({article:data.article,edit:data.edit,isUserAuthorized:data.isUserAuthorized});
    }

    render() {
        let main = <h1 className="infoMessage">Loading &hellip;</h1>;
        if (this.state.article) {
            const article = this.state.article;
            const edit = this.state.edit;
            main = (
                <div className="spacer">
                    <DetailsMenu id={article._id} title={article.title} loggedInDetails={false} />
                    <article>
                        {edit.content}
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