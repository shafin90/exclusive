import Image from 'next/image';
import React from 'react';


const CommitmentBox = ({ img, heading, article }) => {
    return (
        <div className=' flex flex-col justify-start items-center w-3/12'>
            <Image
                src={img}
                width={60}
                height={1080}
                quality={80}
                className=' mb-3'
            ></Image>

            <h1 className=' font-bold mb-2'>
                {heading}
            </h1>

            <p className=' text-sm'>
                {article}
            </p>
        </div>
    );
};

export default CommitmentBox;