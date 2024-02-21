"use client"
import React from 'react';
import CartList from '@/app/component/CartList/CartList';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux'

const CheckOut = () => {
    const router = useRouter();

    const user = useSelector((state) => state.user.value)

    if (!user) {
        router.push("/")
    }

    // taking total price amount from totalPriceSlice --------------------
    const totalPrice = useSelector((state) => state.totalPrice.value)
    
    return (
        <div>
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
                            {totalPrice}
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
                            {totalPrice}
                        </p>
                    </div>


                    {/* order button */}
                    <button
                        onClick={() => router.push('/payment')}
                        style={{ border: "1px solid black" }}
                        className=' px-5 py-2 bg-black hover:bg-white text-white hover:text-black cursor-pointer transition-all'>
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;