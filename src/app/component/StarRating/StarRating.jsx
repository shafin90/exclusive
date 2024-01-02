'use client'
import React from 'react';
import StarRatings from 'react-star-ratings';

const StarRating = ({ratings}) => {
    return (
        <StarRatings
            rating={ratings}
            starDimension="18px"
            starSpacing="3px"
            starRatedColor='black'
            starEmptyColor='gray'
            starHoverColor='gray'
        />
    );
};

export default StarRating;