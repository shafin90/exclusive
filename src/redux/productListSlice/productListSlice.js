//  Product list in Cart==================================

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        add: (state, action) => {
            // Check if the item already exists in the array
            const existingItem = state.value.find(item => item.id === action.payload.id);

            if (!existingItem) {
                // If the item doesn't exist, push it to the array
                state.value.push(action.payload);
            } else {
                // If the item already exists, you can handle it in some way (e.g., update quantity)
                console.log(`Item with ID ${action.payload.id} already exists.`);
            }
        },
        remove: (state, action) => {
            state.value = state.value.filter(item => item.id !== action.payload)
            console.log(action)
        }, 
        clearList: (state)=>{
            state.value = []
        }
    },
})

// Action creators are generated for each case reducer function
export const { add, remove, clearList } = productListSlice.actions

export default productListSlice.reducer