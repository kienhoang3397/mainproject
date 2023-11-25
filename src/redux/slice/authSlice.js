import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: {
    currentUser: null,
    isFetching: false,
    error: false,
    msg: "",
  },
  register: {
    succsess: false,
    isFetching: false,
    error: false,
    msg: "",
  },
  logout:{
    
    isFetching: false,
    error: false,
    msg: "",
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFailed: (state, action) => {
      state.login.isFetching = false;
      state.login.error = true;
      state.login.msg = action.payload; // Store the error message in the msg field
    },
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.register.isFetching = false;
      state.register.succsess = true;
      state.register.error = false;
    },
    registerFailed: (state, action) => {
      state.logout.isFetching = false;
      state.logout.error = true;
      state.logout.msg = action.payload;
    },
    logoutStart: (state) => {
      state.register.isFetching = true;
    },
    logoutSuccess: (state, action) => {
      state.logout.isFetching = false;
      state.login.currentUser = null;
      state.logout.error = false;
     
    },
    logoutFailed: (state, action) => {
      state.logout.isFetching = false;
      state.logout.error = true;
 
      state.logout.msg = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  registerStart,
  registerSuccess,
  registerFailed,
  logoutFailed,
  logoutStart,
  logoutSuccess
} = authSlice.actions;
export default authSlice.reducer;
