import React from 'react';
import {Link} from 'react-router-dom';

export default function ArticleLock({lockStatus,lock,unLock}) {
    return (
        <div className="controls">
            {lockStatus && <a href="javascript:void(0)" onClick={unLock}>[Unlock article]</a>}
            {!lockStatus && <a href="javascript:void(0)" onClick={lock}>[Lock article]</a>}
        </div>
    );
}