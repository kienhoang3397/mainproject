import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  carts: []
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {


    addtoCart: (state, action) => {
      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
      console.log(itemIndex)
      if (itemIndex >= 0) {

        state.carts[itemIndex].qnty += 1;
      } else {

        const temp = { ...action.payload, qnty: 1 };
        state.carts = [...state.carts, temp];
      }
    },
    removeItemformCart: (state, action) => {
      state.carts = state.carts.filter(item => item.id !== action.payload.id);
    },
    removeSingleIteams: (state, action) => {
      const IteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

      if (state.carts[IteamIndex_dec].qnty >= 1) {
        state.carts[IteamIndex_dec].qnty -= 1
      }

    },


    // removeItemformCart: (state,action) => {
    //     return state.filter(item => item.id !== action.payload.id);
    // }
  }
})
export default cartSlice.reducer
export const { addtoCart, removeItemformCart, removeSingleIteams } = cartSlice.actions