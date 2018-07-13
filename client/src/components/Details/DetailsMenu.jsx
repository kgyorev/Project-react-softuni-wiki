import React from 'react';
import { Link } from 'react-router-dom';

export default function DetailsMenu({ title, id,loggedInDetails }) {
    return (
        <h2>{title}
            <div className="controls">
                {loggedInDetails&&<Link to={'/article/edit/' + id}>[edit]</Link>}
                {loggedInDetails&&<Link to={'/article/history/' + id}>[history]</Link>}
            </div>
        </h2>
    );
}