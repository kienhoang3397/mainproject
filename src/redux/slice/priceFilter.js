import { createSlice } from '@reduxjs/toolkit';

const selectedPriceSlice = createSlice({
  name: 'selectedPrice',
  initialState: [],
  reducers: {
    addPriceRange: (state, action) => {
      state.push(action.payload);
    },
    removePriceRange: (state, action) => {
      return state.filter((priceRange) => priceRange !== action.payload);
    },
  },
});

export const { addPriceRange, removePriceRange } = selectedPriceSlice.actions;
export default selectedPriceSlice.reducer;
