import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";

import thunk from "redux-thunk";
import cartApiReducer from "./slice/cartApiSlice";

import productApiReducer from "./slice/productApiSlice";

import userApiSlice from "./slice/userApiSlice";
import userReducer from "./slice/userSlice";
import wishlistApiReducer from "./slice/wishlistApiSlice";
import infoUserReducer from "./slice/infoUserSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,

    productsApi: productApiReducer,
    cartsApi: cartApiReducer,
    userApi: userApiSlice,
    wishlistApi: wishlistApiReducer,
    infoUserApi: infoUserReducer,
  },
  middleware: [thunk],
});
