import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import {Link} from "react-router-dom";

export default class ArticlesList extends Component {
    render() {
        return (
            <section id={this.props.id} className={this.props.className}>
                <h2>{this.props.title}</h2>
                {(this.props.articles.length===0&&!this.props.homePage)&&<h1 className="infoMessage">{this.props.infoMessage}</h1>}
                {this.props.articles.map((h,index) => (
                    <ArticleCard
                        key={h._id}
                        id={h._id}
                        count = {(this.props.page||1)*10+index-10}
                        title={h.title}
                        description={h.description}/>
                ))}
            </section>
        );

    }
}