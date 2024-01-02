import React from 'react';
import Menu from './Menu/Menu';
import Carousal from './Carousal/Carousal';

const HeroSection = () => {
    return (
        <div className=' w-full flex justify-between items-center bg-black mb-32'>
            <Menu></Menu>
            <Carousal></Carousal>
        </div>
    );
};

export default HeroSection;