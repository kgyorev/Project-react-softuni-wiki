import React, { Component } from 'react';
import Input from '../common/Input';
import { editArticle } from '../../api/remote';
import { getDetails } from '../../api/remote';
import { withRouter } from 'react-router-dom';
import TextArea from "../common/TextArea";

class EditPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            id:'',
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
        console.log(data)
        this.setState({title:data.article.title,content:data.article.lastEdit.content,id:data.article._id});
    }


    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async onSubmitHandler(e) {
        e.preventDefault();
        this.setState({submitting: true});
        const article = {
            title: this.state.title,
            content: this.state.content,
        };
        const error = { message: '', errors: {}};
        if (article.title.length < 1) {
            error.message = 'Check the form for errors';
            error.errors.description = 'Invalid Title.';
        }
        if (article.content.length < 1) {
            error.message = 'Check the form for errors';
            error.errors.description = 'Invalid Content.';
        }
        if (error.message) {
            this.setState({error, submitting: false});
            return;
        }
        this.setState({ error: false });
        const res = await editArticle(this.state.id,article);

        if (!res.success) {
            this.setState({ error: res, submitting: false });
            return;
        }
        this.setState({ submitting: false });        
        this.props.history.push('/article/details/'+this.state.id);
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
            <section>
                <h2>Edit article</h2>
                {errors}
                <form onSubmit={this.onSubmitHandler}>
                    <Input
                        name="title"
                        value={this.state.title}
                        onChange={this.onChangeHandler}
                        label="Article title"
                    />
                    <TextArea
                        name="content"
                        value={this.state.content}
                        onChange={this.onChangeHandler}
                        label="Content"
                    />
                    <input type="submit" value="Submit" disabled={this.state.submitting}/>
                </form>
            </section>
        );
    }
}

export default withRouter(EditPage);