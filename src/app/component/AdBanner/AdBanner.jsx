import React from 'react';

const AdBanner = () => {
    return (
        <div className=' bg-black px-14 flex justify-between items-center mb-20'>
            {/* left side text */}
            <div className=' w-7/12'>
                <p className=" text-sky-600 font-bold text-xl mb-6">Categories</p>
                <h1 className=' text-sky-50 text-6xl font-semibold mb-7'>
                    Enhance Your Music Experience
                </h1>

                <button
                    style={{ border: "1px solid #0369a1" }}
                    className='px-9 py-3 bg-sky-700 text-slate-100 font-semibold hover:bg-black hover:text-sky-700 transition-all'
                >
                    Buy Now!
                </button>
            </div>

            {/* right side image */}
            <div className=' w-5/12'>
                <img 
                src="https://www.destructoid.com/ul/236867-review-pdp-afterglow-universal-wireless-headset/Headphones_Back-wireless_full-lit-flat-620x.jpg" 
                alt="" 
                className=' object-cover'
                />
            </div>
        
        </div>
    );
};

export default AdBanner;