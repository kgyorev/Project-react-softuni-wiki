import React, {Component} from 'react';
import {editArticle, getDetails, lockArticle, unLockArticle,deleteArticle} from '../../api/remote';
import {withRouter} from 'react-router-dom';
import TextArea from "../common/TextArea";
import ArticleLockDelete from "./ArticleLockDelete";
import {AuthConsumer} from "../../util/AuthContext";

class EditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            id: '',
            lock: false,
            error: false,
            submitting: false
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const data = await getDetails(this.props.match.params.id);
        this.setState({
            title: data.article.title,
            content: data.article.lastEdit.content,
            id: data.article._id,
            lock: data.article.lockedStatus
        });
    }




    async deleteArticle(id) {
        try {
            const res = await deleteArticle(id);
            this.props.history.push('/');
        } catch (e) {
        }

    }

    async lockArticle(id) {
        try {
            const res = await lockArticle(id);
        } catch (e) {
        }
        this.setState({lock: true});
    }
    async unLockArticle(id) {
        try {
            const res = await unLockArticle(id);
        } catch (e) {
        }
        this.setState({lock: false});
    }

    onChangeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    async onSubmitHandler(e) {
        e.preventDefault();
        this.setState({submitting: true});
        const article = {
            title: this.state.title,
            content: this.state.content,
        };
        const error = {message: '', errors: {}};
        if (article.title.length < 1) {
            error.message = 'Check the form for errors';
            error.errors.title = 'Invalid Title.';
        }
        if (article.content.length < 1) {
            error.message = 'Check the form for errors';
            error.errors.content = 'Invalid Content.';
        }
        if (error.message) {
            this.setState({error, submitting: false});
            return;
        }
        this.setState({error: false});
        const res = await editArticle(this.state.id, article);

        if (!res.success) {
            this.setState({error: res, submitting: false});
            return;
        }
        this.setState({submitting: false});
        this.props.history.push('/article/details/' + this.state.id);
    }

    render() {
        let errors = null;
        if (this.state.error) {
            errors = (
                <div>
                    <h2 className="errorMessage">{this.state.error.message}</h2>
                    {Object.keys(this.state.error.errors).map(k => {
                        return <p key={k}>{this.state.error.errors[k]}</p>;
                    })}
                </div>
            );
        }
        return (
            <AuthConsumer>
                {({isAdmin}) => (
            <section>
                {errors}
                        <h2>Edit article
                            {isAdmin && <ArticleLockDelete
                                lockStatus={this.state.lock}
                                deleteArticle={() => this.deleteArticle(this.state.id)}
                                lock={() => this.lockArticle(this.state.id)}
                                unLock={() => this.unLockArticle(this.state.id)}
                            />}
                        </h2>

                <form onSubmit={this.onSubmitHandler}>
                    <label>Article title</label>
                    <h3>{this.state.title}</h3>
                    <TextArea
                        name="content"
                        lockStatus={this.state.lock&&!isAdmin}
                        value={this.state.content}
                        onChange={this.onChangeHandler}
                        label="Content"
                    />
                    {(!this.state.lock||isAdmin) && <input type="submit" value="Submit" disabled={this.state.submitting}/>}
                </form>
            </section>
                )
                }
            </AuthConsumer>
        );
    }
}

export default withRouter(EditPage);