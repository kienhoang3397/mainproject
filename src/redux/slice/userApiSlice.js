import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (accessToken) => {
    try {
      const response = await axios.get("http://localhost:3000/v1/user/info", {
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
  "user/fetchAllUser", // Corrected identifier
  async () => {
    try {
      const response = await axios.get("http://localhost:3000/v1/user");
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
        "http://localhost:3000/v1/auth/register",
        userData
      );
      return response.data;
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  }
);

// Async function to log in a user
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (credentials) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/v1/user/login",
        credentials
      );
      return response.data;
    } catch (error) {
      console.error("Error logging in user:", error);
      throw error;
    }
  }
);

// Async function to delete a user
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/v1/user/${userId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  }
);


const userApiSlice = createSlice({
  name: "user",
  initialState: {
    allUser: {},
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
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(deleteUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        // You might want to update the state accordingly after user deletion
      })
      .addCase(deleteUser.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default userApiSlice.reducer;
