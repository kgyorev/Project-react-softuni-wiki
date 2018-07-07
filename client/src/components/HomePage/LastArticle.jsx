import React from 'react';
import { Link } from 'react-router-dom';

export default function LastArticle({ article ,displayContent}) {
    return (
        <section id="featured">
            <h2>Latest article</h2>
            <article>
                <h3>{article===null ?'': article.title}</h3>
                <p>
                    {displayContent}
                </p>
                {article!==null && <div className="controls">
                    <Link to={'/article/details/' + article._id}>Read more</Link>
                </div>}
            </article>
        </section>
    );
}