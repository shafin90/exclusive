'use client'

// This component is actually "Details Button" of card component.

import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch } from 'react-redux';

const DetailsBtnForCard = ({pathName}) => {
    
    const router = useRouter() // Declaring router to navigate
    const dispatch = useDispatch() // Declaring useDispatch to use reducers

    return (
        <button
            style={{ border: "1px solid black" }}
            className='transition-all bg-black px-5 py-2 text-white ms-3 mt-3 hover:text-black hover:bg-gray-100'
            onClick={() => {
                router.push(pathName)
                dispatch(zero())
            }}>
            Details
        </button>
    );
};

export default DetailsBtnForCard;