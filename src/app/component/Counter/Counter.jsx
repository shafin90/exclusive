'use client'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '@/redux/counterSlice/counterSlice'; // Adjust the import path if needed

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='flex justify-between items-center'>
      {/* minus icon */}
      <button
        onClick={() => {
          if (count < 1) {
            return; // Prevent decrementing below zero
          } else {
            dispatch(decrement());
          }
        }}
        style={{ border: '1px solid black' }}
        className='hover:bg-white hover:text-black transition-all cursor-pointer bg-black text-white px-5 py-2 text-2xl'
      >
        -
      </button>

      {/* Number */}
      <p className='text-3xl w-20 text-center overflow-hidden'>{count}</p>

      {/* Plus icon */}
      <button
        onClick={() => dispatch(increment())}
        style={{ border: '1px solid black' }}
        className='hover:bg-white hover:text-black transition-all cursor-pointer bg-black text-white px-5 py-2 text-2xl'
      >
        +
      </button>
    </div>
  );
};

export default Counter;
