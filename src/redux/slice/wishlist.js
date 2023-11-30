import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  wishlists: []
}
const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,

  reducers: {


    addtoWishlist: (state, action) => {
      const itemIndex = state.wishlists.findIndex((item) => item._id === action.payload._id);
      // console.log(itemIndex)
      if (itemIndex >= 0) {

        state.wishlists[itemIndex].qnty += 1;
      } else {

        const temp = { ...action.payload, qnty: 1 };
        state.wishlists = [...state.wishlists, temp];
      }
    },
    removeItemformWishlist: (state, action) => {
      state.wishlists = state.wishlists.filter(item => item._id !== action.payload._id);
    },
    removeSingleIteamWishList: (state, action) => {
      const iteamIndex_dec = state.wishlists.findIndex((item) => item._id === action.payload._id);

      if (state.wishlists[iteamIndex_dec].qnty >= 1) {
        state.wishlists[iteamIndex_dec].qnty -= 1
      }

    },



  }
})
export default wishlistSlice.reducer
export const { addtoWishlist, removeItemformWishlist, removeSingleIteamWishList } = wishlistSlice.actions