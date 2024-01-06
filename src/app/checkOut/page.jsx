import React from 'react';
import CartList from '../component/CartList/CartList';

const page = () => {

    return (
        <div className=' mx-auto w-5/6 my-20'>

            {/* heading */}
            <h1 className=' text-black font-medium text-4xl mb-4'>
                Billing Details
            </h1>

            <div className=' grid grid-rows-1 grid-cols-2 gap-10 '>

                {/* personal address =================================================================*/}
                <div>

                    {/* First Name */}
                    <p className=' text-gray-900 text-sm mb-2'>First Name</p>
                    <input type="text" className='border w-full px-3 py-2  outline-none mb-6' />

                    {/* Company Name */}
                    <p className=' text-gray-900 text-sm mb-2'>Company Name</p>
                    <input type="text" className='border w-full px-3 py-2  outline-none mb-6 ' />

                    {/* Street Address* */}
                    <p className=' text-gray-900 text-sm mb-2'>Street Address*</p>
                    <input type="text" className='border w-full px-3 py-2  outline-none mb-6 ' />

                    {/* Apartment, floor, etc. (optional)* */}
                    <p className=' text-gray-900 text-sm mb-2'>Apartment, floor, etc. (optional)</p>
                    <input type="text" className='border w-full px-3 py-2  outline-none mb-6 ' />

                    {/* Town/City* */}
                    <p className=' text-gray-900 text-sm mb-2'>Town/City*</p>
                    <input type="text" className='border w-full px-3 py-2  outline-none mb-6' />

                    {/* Phone Number* */}
                    <p className=' text-gray-900 text-sm mb-2'>Phone Number*</p>
                    <input type="text" className='border w-full px-3 py-2  outline-none mb-6' />

                    {/* Email Address**/}
                    <p className=' text-gray-900 text-sm mb-2'>Email Address*</p>
                    <input type="text" className='border w-full px-3 py-2  outline-none mb-6' />
                </div>

                {/* checkout section =====================================================================*/}
                <div>

                    {/* product list containing component*/}
                    <CartList></CartList>


                    {/* calculation================================= */}
                    {/* subtotal */}
                    <div className=' mb-4 border-b pb-3 mt-10 flex justify-between items-center'>
                        <p>
                            SubTotal
                        </p>

                        <p>
                            {/* amount */}
                        </p>
                    </div>

                    {/* shipping */}
                    <div className=' mb-4 border-b pb-3 flex justify-between items-center'>
                        <p>
                            Shipping
                        </p>

                        <p>
                            Free
                        </p>
                    </div>

                    {/* Total */}
                    <div className=' mb-5 pb-3 flex justify-between items-center'>
                        <p>
                            Total
                        </p>

                        <p>
                            {/* amount */}
                        </p>
                    </div>


                    {/* order button */}
                    <button
                        style={{ border: "1px solid black" }}
                        className=' px-5 py-2 bg-black hover:bg-white text-white hover:text-black cursor-pointer transition-all'>
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default page;