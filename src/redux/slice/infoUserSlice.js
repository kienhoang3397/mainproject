import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserInfo = createAsyncThunk(
  "infoUser/fetchUserInfo",
  async (accessToken) => {
    try {
      const response = await axios.get("https://apimainproject-kienhoangs-projects.vercel.app/v1/user/info", {
        headers: { token: `Bearer ${accessToken}` },
      });

      return response.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }
);

const infoUserSlice = createSlice({
  name: "infoUser",
  initialState: {
    user: null,
    status: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default infoUserSlice.reducer;
