import React from 'react';
import { FaCircleArrowRight } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className=' bg-black  w-full relative top-64 py-24'>
            <div className=' flex flex-col lg:flex-row justify-between items-start mx-auto w-5/6'>
                {/* First Column */}
                <div className=' w-full lg:w-3/12 mb-12 lg:mb-0'>
                    <h1 className=' font-semibold text-xl text-white mb-4'>
                        Exclusive
                    </h1>

                    <h1 className=' text-lg text-white mb-4'>
                        Subscribe
                    </h1>

                    <p className=' text-slate-200 text-sm mb-4'>
                        Get 10% off your first order
                    </p>

                    <div style={{ border: "1px solid white" }} className=' w-5/6 rounded py-4 flex justify-between items-center'>
                        <input
                            type="text"
                            placeholder='Enter Your Email'
                            className=' bg-black ps-3 outline-none text-sm text-slate-300 w-5/6'
                        />
                        <FaCircleArrowRight
                            className=' text-white w-1/6 cursor-pointer text-xl hover:text-slate-500' />
                    </div>
                </div>



                {/* Second Column */}
                <div className=' w-full lg:w-2/12 mb-12 lg:mb-0'>
                    <h1 className=' font-medium text-lg text-white mb-6'>
                        Support
                    </h1>

                    <p className=' text-white mb-5 text-sm'>
                        111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
                    </p>

                    <p className=' text-white mb-5 text-sm'>
                        exclusive@gmail.com
                    </p>

                    <p className=' text-white mb-5 text-sm'>
                        +88015-88888-9999
                    </p>
                </div>


                {/* Third Column */}
                <div className=' w-full lg:w-2/12 mb-12 lg:mb-0'>
                    <h1 className=' font-medium text-lg text-white mb-6'>
                        Account
                    </h1>


                    <p className=' text-white mb-5 text-sm'>
                        My Account
                    </p>

                    <p className=' text-white mb-5 text-sm'>
                        Login / Register
                    </p>

                    <p className=' text-white mb-5 text-sm'>
                        Cart
                    </p>

                    <p className=' text-white mb-5 text-sm'>
                        Wishlist
                    </p>

                    <p className=' text-white mb-5 text-sm'>
                        Shop
                    </p>
                </div>


                {/* Fourth Column */}
                <div className=' w-full lg:w-2/12 mb-12 lg:mb-0'>
                    <h1 className=' font-medium text-lg text-white mb-6'>
                        Quick Link
                    </h1>

                    <p className=' text-white mb-5 text-sm'>
                        Privacy Policy
                    </p>

                    <p className=' text-white mb-5 text-sm'>
                        Terms Of Use
                    </p>

                    <p className=' text-white mb-5 text-sm'>
                        FAQ
                    </p>

                    <p className=' text-white mb-5 text-sm'>
                        Contact
                    </p>
                </div>

                {/* Fifth Column */}
                <div className=' w-full lg:w-3/12 mb-12 lg:mb-0'>
                    <h1 className=' font-medium text-lg text-white mb-6'>
                        Download App
                    </h1>

                    <p className=' text-sm text-slate-400 mb-6'>
                        Save $3 with App New User Only
                    </p>

                    <div className=' flex justify-between items-center'>

                        <div className=' w-3/6 h-20  pe-6'>
                            <img src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg" className=' object-cover' alt="" />
                        </div>

                        <div className=' w-3/6'>
                            <div className=' p-3' >
                                <img src="https://clearbridgemobile.com/wp-content/uploads/2015/07/google-play-button.png"
                                    alt=""
                                    className=' cursor-pointer'
                                />

                            </div>

                            <div  className=' p-3'>
                                <img src="https://uploads-ssl.webflow.com/5e1d030dc30fd310a1970e08/5f508229bc9cf36fffcae7d4_AppStore.png"
                                    alt=""
                                    className=' cursor-pointer'
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;