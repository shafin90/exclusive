import React from 'react';
import Tag from '../Tag/Tag';
import TagHeading from '../TagHeading/TagHeading';

const Featured = () => {
    return (
        <div className=' mb-12'>


            <div className=' w-full h-auto lg:h-96 flex flex-col lg:flex-row justify-between items-start lg:items-center relative top-28'>

                {/* Left side image */}
                <div className=' w-full lg:w-3/6  me-2 mb-5 lg:mb-0 '>

                    <div className=' flex flex-col justify-between items-start h-2/6'>
                        <Tag tagName="Featured" ></Tag>
                        <TagHeading tagHeading="New Arrival"></TagHeading>
                    </div>


                    <div className=' w-full h-3/6  overflow-hidden'>
                        <img
                            src="http://www.imaging-resource.com/PRODS/fuji-x-pro2/ZPR-FUJI-X-PRO2-PORTS.JPG"
                            alt=""
                            className=' cursor-pointer hover:scale-125 transition-all'
                        />
                    </div>

                    <button
                        style={{ border: "1px solid black" }}
                        className=' font-semibold text-2xl hover:bg-white hover:text-black w-full bg-black text-slate-50 mt-5  py-3 transition-all'>
                        Explore New Arrival
                    </button>
                </div>

                {/* Right side image container */}
                <div className=' flex flex-col justify-between items-center w-full lg:w-3/6 ms-0 lg:ms-2'>
                    {/* Top image */}
                    <div className=' h-3/6 mb-2 overflow-hidden'>
                        <img
                            src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428343cv18d.jpg"
                            alt=""
                            style={{ width: "100%", height: "100%" }}
                            className=' cursor-pointer hover:scale-125 transition-all'
                        />
                    </div>

                    {/* Bottom side image */}
                    <div className=' h-3/6 flex justify-between items-center mt-2'>
                        {/* Left side image */}
                        <div className=' w-3/6 me-2 overflow-hidden'>
                            <img
                                src="https://e0.pxfuel.com/wallpapers/161/293/desktop-wallpaper-ashkar-on-mobile-for-mobile-audiophile.jpg"
                                alt=""
                                style={{ width: "100%", height: "100%" }}
                                className=' cursor-pointer hover:scale-125 transition-all'
                            />
                        </div>

                        {/* Right side image */}
                        <div className=' w-3/6 ms-2  overflow-hidden'>
                            <img
                                src="https://onlinecourseigniter.com/wp-content/uploads/2020/09/Microphone-with-Black-Background.jpg"
                                alt=""
                                style={{ width: "100%", height: "100%" }}
                                className=' cursor-pointer hover:scale-125 transition-all'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;