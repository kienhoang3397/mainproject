import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUser: null,
  isFetching: false,
  error: false,
  msg: "",
  updateUser: {
    isFetching: false,
    success: false,
    error: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsersStart: (state) => {
      state.isFetching = true;
    },
    getUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.allUser = action.payload;
    },
    getUserFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    deleteUsersStart: (state) => {
      state.isFetching = true;
    },
    deleteUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.msg = action.payload;
    },
    deleteUserFailed: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.msg = action.payload;
    },
    updateUserStart: (state) => {
      state.updateUser.isFetching = true;
    },
    updateUserSuccess: (state) => {
      state.updateUser.isFetching = false;
      state.updateUser.success = true;
      state.updateUser.error = false;
    },
    updateUserFailed: (state) => {
      state.updateUser.isFetching = false;
      state.updateUser.error = true;
      state.updateUser.success = false;
    },
  },
});

export const {
  getUserFailed,
  getUsersStart,
  getUsersSuccess,
  deleteUserFailed,
  deleteUsersStart,
  deleteUsersSuccess,
  updateUserFailed,
  updateUserStart,
  updateUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
  