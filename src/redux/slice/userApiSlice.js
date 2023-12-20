import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
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

export const fetchAllUserApi = createAsyncThunk(
  "user/fetchAllUser",
  async () => {
    try {
      const response = await axios.get("https://apimainproject-kienhoangs-projects.vercel.app/v1/user");
      return response.data;
    } catch (error) {
      console.error("Error fetching all user data:", error);
      throw error;
    }
  }
);
export const registerUserApi = createAsyncThunk(
  "user/registerUser",
  async (userData) => {
    try {
      const response = await axios.post(
        "https://apimainproject-kienhoangs-projects.vercel.app/v1/auth/register",
        userData
      );
      
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  }
);


export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://apimainproject-kienhoangs-projects.vercel.app/v1/auth/login",
        userData
      );
      return response.data;
    } catch (error) {
      if (error.response?.data?.message) {
     
        return rejectWithValue({ message: error.response.data.message });
      } else {
        return rejectWithValue({
          message: "Error logging in. Please try again.",
        });
      }
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userId) => {
    try {
      const response = await axios.delete(
        `https://apimainproject-kienhoangs-projects.vercel.app/v1/user/${userId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  }
);
export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async ({ id, accessToken}) => {
    try {
      const res = await axios.post("https://apimainproject-kienhoangs-projects.vercel.app/v1/auth/logout", id, {
        headers: { token: `Bearer ${accessToken}` },
      });
     
      return res.data;
    } catch (error) {
      console.error("Error logging out user:", error);
      throw error;
    }
  }
);

const userApiSlice = createSlice({
  name: "user",
  initialState: {
    allUser: {},
    user: null,
    status: null,
    message: null,
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
      })
      .addCase(fetchAllUserApi.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchAllUserApi.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.allUser = action.payload;
      })
      .addCase(fetchAllUserApi.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(registerUserApi.pending, (state) => {
        state.status = "pending";
      })
      .addCase(registerUserApi.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload;
      })
      .addCase(registerUserApi.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "pending";
        state.message = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload;
        state.message = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "rejected";
        state.message = action.payload.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
      })
      .addCase(deleteUser.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(logoutUser.pending, (state) => {
        state.status = "pending";
        state.message = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = null;
        state.message = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = "rejected";
        state.message = action.error.message;
      });
  },
});

export default userApiSlice.reducer;
