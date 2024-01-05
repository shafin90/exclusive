import React from 'react';
import Tag from '../Tag/Tag';
import TagHeading from '../TagHeading/TagHeading';
import Category from '../Category/Category';

const BrowseByCategory = () => {
    return (
        <div style={{ borderBottom: "0.5px solid #b3b3b3" }} className=' pb-16 mb-20' >
            <Tag tagName="Categories" ></Tag>

            {/* tag heading with card controller button */}
            <div className=' flex justify-between items-center'>
                <TagHeading tagHeading="Browse By Category"></TagHeading>
            </div>

            {/*brows by Categories */}
            <div className=' grid md:grid-rows-2 md:grid-cols-3 lg:grid-rows-1 lg:grid-cols-6 gap-x-3'>
                <Category category="phone"></Category>
                <Category category="computer"></Category>
                <Category category="smartWatch"></Category>
                <Category category="camera"></Category>
                <Category category="headPhone"></Category>
                <Category category="gaming"></Category>
            </div>
        </div>
    );
};

export default BrowseByCategory;