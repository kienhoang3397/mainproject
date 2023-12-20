import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

const initialState = {
  wishlists: {
    items: [],
    status: null,
  },
};

export const removeFromwishlist = createAsyncThunk(
  "wishlists/removeFromwishlist",
  async ({ productId, token }) => {
    try {
      const accessToken = token;
      const response = await axios.post(
        "https://apimainproject-kienhoangs-projects.vercel.app/v1/user/removeFromWishList",
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
export const addTowishlist = createAsyncThunk(
  "wishlists/addTowishlist",
  async ({ productId, token }) => {
    try {
      const accessToken = token;

      const response = await axios.post(
        "https://apimainproject-kienhoangs-projects.vercel.app/v1/user/add-to-wishlist",
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

const wishlistApiSlice = createSlice({
  name: "wishlists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTowishlist.pending, (state) => {
        state.wishlists.status = "pending";
      })
      .addCase(addTowishlist.fulfilled, (state, action) => {
        state.wishlists.status = "fulfilled";
        state.wishlists.items = action.payload.user.wishlist;
      })
      .addCase(addTowishlist.rejected, (state) => {
        state.wishlists.status = "rejected";
      });
  
  },
});

export default wishlistApiSlice.reducer;
