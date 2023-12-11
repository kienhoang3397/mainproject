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
        updatedData
      );
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

export const addProduct = createAsyncThunk(
  "add/product",
  async (productData) => {
    console.log(productData); // Move this line inside the async function
    try {
      const res = await axios.post(
        "http://localhost:3000/product/add",
        productData
      );
      return res?.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteProduct = createAsyncThunk("delete/product", async (id) => {
  try {
    const res = await axios.delete(`http://localhost:3000/product/${id}`);
    return res?.data;
  } catch (error) {
    throw error;
  }
});

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
        state.product.items = state.product.items.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
      })
      .addCase(updateProductApi.rejected, (state) => {
        state.product.status = "reject";
      })
      .addCase(addProduct.pending, (state) => {
        state.product.status = "pending";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.product.status = "fulfilled";
        state.product.items = [...state.product.items, action.payload];
      })

      .addCase(addProduct.rejected, (state) => {
        state.product.status = "reject";
      })
      .addCase(deleteProduct.pending, (state) => {
        state.product.status = "pending";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.product.status = "fulfilled";
        
        state.product.items = state.product.items.filter(
          (item) => item._id !== action.payload._id
        );
      })
      .addCase(deleteProduct.rejected, (state) => {
        state.product.status = "reject";
      });
  },
});

export default productApiSlice.reducer;
