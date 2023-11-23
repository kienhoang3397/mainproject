import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    allUser: null,
    isFetching: false,
    error: false,
    msg: ""
}



const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {

        getUsersStart: (state) => {
            state.isFetching = true
        },
        getUsersSuccsess: (state, action) => {
            state.isFetching = false
            state.allUser = action.payload
        },
        getUserFailed: (state) => {
            state.isFetching = false
            state.error = true

        },
        deleteUsersStart: (state) => {
            state.isFetching = true
        },
        deleteUsersSuccsess: (state, action) => {
            state.isFetching = false
            state.msg  = action.payload
          
        },
        deleteUserFailed: (state, action) => {
            state.isFetching = false
            state.error = true
            state.msg  = action.payload

        },
        

    }
});

export const {
    getUserFailed, getUsersStart, getUsersSuccsess
    , deleteUserFailed, deleteUsersStart, deleteUsersSuccsess
} = userSlice.actions;
export default userSlice.reducer;
