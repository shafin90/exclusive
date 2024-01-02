import React from 'react';
import Tag from '../Tag/Tag';
import TagHeading from '../TagHeading/TagHeading';
import Card from '../Card/Card';

const FlashSales = () => {
    return (
        <div className=' mx-auto'>
            <Tag tagName="Today's"></Tag> 
            <TagHeading></TagHeading>
            <div className=' mb-28'>
                <Card></Card>
            </div>
        </div>
    );
};

export default FlashSales;