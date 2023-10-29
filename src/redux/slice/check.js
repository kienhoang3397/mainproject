// selectedCategoriesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const selectedCategoriesSlice = createSlice({
  name: 'selectedCategories',
  initialState: [],
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
    },
    removeCategory: (state, action) => {
      return state.filter((category) => category !== action.payload);
    },
  },
});

export const { addCategory, removeCategory } = selectedCategoriesSlice.actions;
export default selectedCategoriesSlice.reducer;
