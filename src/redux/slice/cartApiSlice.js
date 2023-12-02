import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

const initialState = {
  carts: {
    items: [],
    status: null,
  },
};
export const decreaseQuantity = createAsyncThunk(
  "carts/decreaseQuantity",
  async ({ productId, token }) => {
    try {
      const accessToken = token;
      const response = await axios.post(
        "http://localhost:3000/v1/user/decrease",
        { productId },
        {
          headers: {
            token: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "carts/removeFromCart",
  async ({ productId, token }) => {
    try {
      const accessToken = token;
      const response = await axios.post(
        "http://localhost:3000/v1/user/removeFromCart",
        { productId },
        {
          headers: {
            token: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const addToCart = createAsyncThunk(
  "carts/addToCart",
  async ({ productId, quantity, token }) => {
    // console.log(productId)
    try {
      const accessToken = token;

      const response = await axios.post(
        "http://localhost:3000/v1/user/add-to-cart",
        { productId, quantity },
        {
          headers: {
            token: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const cartApiSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.carts.status = "pending";
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.carts.status = "fulfilled";
        state.carts.items = action.payload.user.cart;
      })
      .addCase(addToCart.rejected, (state) => {
        state.carts.status = "rejected";
      })
      .addCase(removeFromCart.pending, (state) => {
        state.carts.status = "pending";
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.carts.status = "fulfilled";
        state.carts.items = action.payload.user.cart;
      })
      .addCase(removeFromCart.rejected, (state) => {
        state.carts.status = "rejected";
      })
      .addCase(decreaseQuantity.pending, (state) => {
        state.carts.status = "pending";
      })
      .addCase(decreaseQuantity.fulfilled, (state, action) => {
        state.carts.status = "fulfilled";
        state.carts.items = action.payload.user.cart;
      })
      .addCase(decreaseQuantity.rejected, (state) => {
        state.carts.status = "rejected";
      });
  },
});

export default cartApiSlice.reducer;
