import React from 'react';
import {Link} from 'react-router-dom';

export default function ArticleLock({lockStatus, lock, unLock, deleteArticle}) {
    return (
        <div className="controls">
            {<a href="javascript:void(0)" onClick={(e) => {
                if (window.confirm('Are you sure you wish to delete this article?')) deleteArticle(e)
            }}>[Delete article]</a>}
            {lockStatus && <a href="javascript:void(0)" onClick={(e) => {
                if (window.confirm('Are you sure you wish to unlock this article?'))  unLock(e)}}>[Unlock article]</a>}
            {!lockStatus && <a href="javascript:void(0)" onClick={(e) => {
                if (window.confirm('Are you sure you wish to lock this article?'))lock(e)}}>[Lock article]</a>}
        </div>
    );
}