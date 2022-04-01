import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house, ornaments}) => {
    return (
        <div>
            <h4>My Self</h4>
            <p><small>House:{house}</small></p>
            <Special ornaments={ornaments}></Special>
        </div>
    );
};

export default MySelf;