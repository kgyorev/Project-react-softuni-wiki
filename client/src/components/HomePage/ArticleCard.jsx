import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticleCard({ title, id }) {
    return (
        <ul>
            <Link to={'/article/details/' + id}>{title}</Link>
        </ul>
    );
}