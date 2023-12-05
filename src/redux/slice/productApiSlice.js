import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: {
    items: [],
    status: null,
  },
};
export const updateProductApi = createAsyncThunk(
  "update/product",
  async ({ id, updatedData }) => {
    console.log(updatedData);
    try {
      const res = await axios.put(
        `http://localhost:3000/product/${id}`,
        updatedData // Ensure that updatedData has the correct structure
      );
      console.log("API Response:", res.data);
      return res?.data;
    } catch (error) {
      throw error;
    }
  }
);

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
        state.product.status = "pending";
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.product.status = "fulfilled";
        state.product.items = action.payload;
      })
      .addCase(productsFetch.rejected, (state) => {
        state.product.status = "reject";
      })
      .addCase(updateProductApi.pending, (state) => {
        state.product.status = "pending";
      })
      .addCase(updateProductApi.fulfilled, (state, action) => {
        state.product.status = "fulfilled";
        // Assuming action.payload is the updated product data
        // Update the corresponding item in the items array
        state.product.items = state.product.items.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
      })
      .addCase(updateProductApi.rejected, (state) => {
        state.product.status = "reject";
      });
  },
});

export default productApiSlice.reducer;
