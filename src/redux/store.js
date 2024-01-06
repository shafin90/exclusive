import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice/counterSlice'
import productListSlice from './productListSlice/productListSlice'
import wishListSlice from './wishListSlice/wishListSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    productList: productListSlice, 
    wishList:wishListSlice
  },
  
})