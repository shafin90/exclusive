import React from 'react';

const Tag = ({tagName}) => {
    return (
        <div className=' flex justify-start items-center'>
            <div className=' bg-slate-950 w-16'>2</div>
            <h1 className=' ms-3 font-bold'>{tagName}</h1>
        </div>
    );
};

export default Tag;