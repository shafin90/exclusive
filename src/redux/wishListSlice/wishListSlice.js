import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addToWishList: (state, action) => {
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
        removeFromWishList: (state, action) => {
           state.value = state.value.filter(item => item.id !== action.payload)
           console.log(action)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToWishList , removeFromWishList} = wishListSlice.actions

export default wishListSlice.reducer