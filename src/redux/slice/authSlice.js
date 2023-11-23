import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    register: {
        succsess: false,
        isFetching: false,
        error: false
    }
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccsess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false
        },
        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true
        },
        registerStart: (state) => {
            state.register.isFetching = true;
        },
        registerSuccsess: (state, action) => {
            state.register.isFetching = false;
            state.register.succsess = true
            state.register.error = false
        },
        registerFailed: (state) => {
            state.register.isFetching = false;
            state.register.error = true
            state.register.succsess = false
        },


    }
});

export const {
    loginStart, loginSuccsess, loginFailed,
    registerStart, registerSuccsess, registerFailed
} = authSlice.actions;
export default authSlice.reducer;
