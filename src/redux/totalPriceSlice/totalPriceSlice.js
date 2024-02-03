import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const totalPriceSlice = createSlice({
  name: 'totalPrice',
  initialState,
  reducers: {
    addPrice: (state,action) => {
      state.value += action.payload 
      console.log(action.payload)
    },
    reducePrice: (state, action) => {
      state.value -= action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addPrice, reducePrice } = totalPriceSlice.actions

export default totalPriceSlice.reducer