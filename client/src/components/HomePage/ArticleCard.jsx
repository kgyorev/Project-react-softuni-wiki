import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticleCard({ title, id,count }) {
    return (
        <ul>
            <Link to={'/article/details/' + id}>{count+1 +'. '+title}</Link>
        </ul>
    );
}