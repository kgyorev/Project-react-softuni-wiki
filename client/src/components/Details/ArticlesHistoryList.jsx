import React, {Component} from 'react';
import ArticleHistoryCard from "./ArticleHistoryCard";
import dateConverter from '../../util/dateConverter'

export default class ArticlesHistoryList extends Component {
    render() {
        return (
            <section id={this.props.id} >
                <h2>{this.props.article.title}</h2>
                <div className={this.props.className}>
                    <h3>{this.props.title}</h3>
                    <ul>
                        {this.props.editLs.map((h,index) => (
                            <ArticleHistoryCard
                                key={h._id}
                                id={h._id}
                                count ={index}
                                title={h.title}
                                creationDate={dateConverter(h.creationDate)}
                                author={h.author.email}
                                description={h.description}/>
                        ))}
                    </ul>
                </div>
            </section>
        );
    }
}