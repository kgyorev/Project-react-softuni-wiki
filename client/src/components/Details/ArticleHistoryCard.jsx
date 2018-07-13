import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticleCard({ creationDate, id ,author,count}) {
    return (
        <li>
             <Link to={'/edit/' + id}><span>{count+1+". " + (count===0?"Created On":"Updated On")}</span> {creationDate}</Link> by  <span className="author">{author}</span>
        </li>
    );
}