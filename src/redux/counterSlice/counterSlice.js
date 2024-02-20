// Slice Description =========================================================== 
// This slice is used to count product number. 
// when user click on plus button then increament reducer will be activated
// when user click on minus button then decrement reducer will be activated
// when user click on details button from card then zero reducer will be activated. Because Every time when user click on a product from card, then product count should be zero

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    zero: (state) => {
      state.value = 0;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, zero } = counterSlice.actions

export default counterSlice.reducer