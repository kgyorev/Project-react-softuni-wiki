import React, { Component } from 'react';
import ArticleCard from './ArticleCard';

export default class ArticlesList extends Component {
    render() {
        return (
            <section id="recent">
                <h2>Recently added articles</h2>
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