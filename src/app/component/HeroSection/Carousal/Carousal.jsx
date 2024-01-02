'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import img1 from "../../../../../public/images/photo-1572666341285-c8cb9790ca50.jpeg"
import img2 from "../../../../../public/images/shutterstock_778335283.png"
import img3 from "../../../../../public/images/camera-60d-canon-black-background.jpg"
import img4 from "../../../../../public/images/noise-buds-play-500x500.webp"
import img5 from "../../../../../public/images/35434dad3f.jpg"
import img6 from "../../../../../public/images/fujifilm-gfx100-ir-infrared-camera-exibart-street-photography-00.jpg"

const Carousal = () => {
  const img = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
  ];

  const [num, setNum] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNum((prevNum) => (prevNum < 5 ? prevNum + 1 : 0));
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once after the initial render

  console.log(num);

  return (
    <div className='w-9/12 h-96 flex justify-end items-end ps-10 transition-all bg-black'>

      <Image
        src={img[num]}
        width={500}
        height={1000}
        quality={80}
      />
    </div>
  );
};

export default Carousal;
