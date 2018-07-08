import React, { Component } from 'react';
import ArticleCard from './ArticleCard';

export default class ArticlesList extends Component {
    render() {
        return (
            <section id={this.props.id} className={this.props.className}>
                <h2>{this.props.title}</h2>
                {this.props.articles.map(h => (
                    <ArticleCard
                        key={h._id}
                        id={h._id}
                        title={h.title}
                        description={h.description}/>
                ))}
            </section>
        );
    }
}