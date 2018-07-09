import React, {Component} from 'react';
import ArticleHistoryCard from "./ArticleHistoryCard";

export default class ArticlesHistoryList extends Component {
    render() {
        return (
            <section id={this.props.id} >
                <h2>{this.props.article.title}</h2>
                <div className={this.props.className}>
                    <h3>{this.props.title}</h3>
                    <ul>
                        {this.props.editLs.map(h => (
                            <ArticleHistoryCard
                                key={h._id}
                                id={h._id}
                                title={h.title}
                                creationDate={h.creationDate}
                                author={h.author.email}
                                description={h.description}/>
                        ))}
                    </ul>
                </div>
            </section>
        );
    }
}