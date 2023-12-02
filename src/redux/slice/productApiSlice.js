import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: {
    items: [],
    status: null,
  },
};

export const productsFetch = createAsyncThunk(
  "getall/productsFetch",
  async () => {
    const res = await axios.get("http://localhost:3000/product/getall");
    return res?.data;
  }
);

const productApiSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state) => {
        state.product.status = 'pending';
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.product.status = 'fulfilled';
        state.product.items = action.payload;
      })
      .addCase(productsFetch.rejected, (state) => {
        state.product.status = 'reject';
      });
  },
});

export default productApiSlice.reducer;
