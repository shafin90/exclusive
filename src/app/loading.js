import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const loading = () => {
    return (
        <div className=' grid grid-rows-4 grid-cols-4 w-5/6 mx-auto gap-4 mt-20'>

            <Skeleton
                width="100%"
                height="40vh"
                // containerClassName=' me-3 mb-3'
            />
            <Skeleton
                width="100%"
                height="40vh"
            />
            <Skeleton
                width="100%"
                height="40vh"
            />
            <Skeleton
                width="100%"
                height="40vh"
            />

            <Skeleton
                width="100%"
                height="40vh"
            />
            <Skeleton
                width="100%"
                height="40vh"
            />
            <Skeleton
                width="100%"
                height="40vh"
            />
            <Skeleton
                width="100%"
                height="40vh"
            />

           
           

        </div>
    );
};

export default loading;