import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticleCard({ creationDate, id ,author}) {
    return (
        <li>
            <Link to={'/edit/' + id}>{creationDate}</Link> by  <span className="author">{author}</span>

        </li>
    );
}