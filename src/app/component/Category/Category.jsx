'use client'

import React, { useState } from 'react';
import { CiMobile4 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { IoWatchOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { FaHeadphones } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";



const Category = ({category}) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={isHover ? ' cursor-pointer bg-black w-48 h-40 border flex justify-center items-center me-4 transition-all' : 'cursor-pointer transition-all bg-white w-48 h-40 border flex justify-center items-center me-4'} >

                {
                category=="phone"? 
                <CiMobile4 className={isHover ? "text-white text-6xl transition-all" : ' text-black text-6xl transition-all'} /> 
                : 
                category=="computer"?
                <RiComputerLine  className={isHover ? "text-white text-6xl transition-all" : ' text-black text-6xl transition-all'} />
                :
                category=="smartWatch"?
                <IoWatchOutline  className={isHover ? "text-white text-6xl transition-all" : ' text-black text-6xl transition-all'} />
                :
                category=="camera"?
                <CiCamera   className={isHover ? "text-white text-6xl transition-all" : ' text-black text-6xl transition-all'} />
                :
                category=="headPhone"?
                <FaHeadphones  className={isHover ? "text-white text-6xl transition-all" : ' text-black text-6xl transition-all'} />
                :
                <IoGameControllerOutline  className={isHover ? "text-white text-6xl transition-all" : ' text-black text-6xl transition-all'} />
                
                }
            
           
        </div>
    );
};

export default Category;