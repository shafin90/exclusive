'use client'
import React, { useEffect, useState } from 'react';
import Card from '@/app/component/Card/Card';
import { TfiYoutube } from 'react-icons/tfi';
import { FaHeadphones } from 'react-icons/fa';


const CategorisedProducts = ({ products }) => {
    // State declaration for this component
    const [categorizedProducts, setCategorizedProducts] = useState([]); // set the product list to be showed
    const [lowerPrice, setLowerPrice] = useState(''); // set the lower price limit
    const [higherPrice, setHigherPrice] = useState(''); // set the higher price limit
    const [sortingOrder, setSortingOrder] = useState('ascending'); // set the default sorting order

    // set the value of categoriesedProduct as the given argument
    useEffect(() => {
        setCategorizedProducts(products);
    }, [products]);

    const makeAscendingOrder = () => {
        const sortedProducts = [...categorizedProducts].sort((a, b) => a.price - b.price);
        setCategorizedProducts(sortedProducts);
        setSortingOrder('ascending');
    };

    const makeDescendingOrder = () => {
        const sortedProducts = [...categorizedProducts].sort((a, b) => b.price - a.price);
        setCategorizedProducts(sortedProducts);
        setSortingOrder('descending');
    };

    const findProductsUnderPriceRange = (lower, higher) => {
        const filteredProducts = products.filter(
            (product) => product.price >= lower && product.price <= higher
        );

        setCategorizedProducts(filteredProducts);

    };


    useEffect(() => {
        const lower = parseFloat(lowerPrice);
        const higher = parseFloat(higherPrice);
        if (!isNaN(lower) && !isNaN(higher)) {
            findProductsUnderPriceRange(lower, higher);
        }
        else if (lowerPrice === "" && higherPrice === "") {
            setCategorizedProducts(products)
        }
    }, [lowerPrice, higherPrice])

console.log("categorised products", categorizedProducts)
    return (
        <div>
            {/* Category Logo, Filtering, Sorting */}
            <div className='flex justify-between items-center mb-10 border-b pb-9'>
                {/* Category Logo =========*/}
                <div className='flex justify-start items-center'>
                    <div className='w-20 bg-black h-12'>,</div>
                    {/* <TfiYoutube className='text-5xl ms-1' /> */}
                </div>

                {/* Filtering =========*/}
                <div className='flex justify-between items-center'>
                    {/* Minimum price */}
                    <div className='me-5 flex justify-between items-center'>
                        <label className='me-2'>min: </label>
                        <input
                            type='text'
                            className='border outline-none px-3 py-2 w-32 me-2'
                            value={lowerPrice}
                            onChange={(e) => setLowerPrice(e.target.value)}
                        />
                        <span>$</span>
                    </div>

                    {/* Maximum price */}
                    <div className='flex justify-between items-center'>
                        <label className='me-2'>max:</label>
                        <input

                            type='text'
                            className='border outline-none px-3 py-2 w-32 me-2'
                            value={higherPrice}
                            onChange={(e) => setHigherPrice(e.target.value)}
                        />
                        <span>$</span>
                    </div>

                    <button
                        onClick={() => {
                            setHigherPrice("")
                            setLowerPrice("")
                        }}
                        className={lowerPrice !== "" && higherPrice !== "" ? 'text-sm px-3 py-1 bg-slate-950 text-white' : "hidden"} > Clear Filtering</button>
                </div>

                {/* Sorting */}
                <div className='flex justify-end items-center'>
                    <select
                        className='outline-none border px-4 py-3'
                        value={sortingOrder}
                        onChange={(e) => {
                            if (e.target.value === 'ascending') {
                                makeAscendingOrder();
                            } else if (e.target.value === 'descending') {
                                makeDescendingOrder();
                            }
                        }}
                    >
                        <option value='ascending' className='hover:bg-black cursor-pointer'>
                            Ascending
                        </option>
                        <option value='descending'>Descending</option>
                    </select>
                </div>
            </div>

            {/* Youtube studio related product collections */}
            <div className='gap-5 w-full grid md:grid-rows-5 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3'>
                {categorizedProducts.map((item) => (
                    <Card
                        key={item._id} // Assuming each product has a unique id
                        img={item.img}
                        cardHeading={item.name}
                        price={item.price}
                        rating={item.rating}
                        category={item.category}
                        available={item.available}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategorisedProducts;
