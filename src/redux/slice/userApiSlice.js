import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("user/fetchUser", async (accessToken) => {
  try {
    const response = await axios.get("http://localhost:3000/v1/user/info", {
      headers: { token: `Bearer ${accessToken}` },
    });

    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
});

const userApiSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default userApiSlice.reducer;
