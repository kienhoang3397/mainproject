import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";

import thunk from "redux-thunk";
import cartApiReducer from "./slice/cartApiSlice";
import selectedCategoriesSlice from "./slice/check";
import selectedPrice from "./slice/priceFilter";
import productApiReducer from "./slice/productApiSlice";
import searchSlice from "./slice/search";
import userApiSlice from "./slice/userApiSlice";
import userReducer from "./slice/userSlice";
import wishlistApiReducer from "./slice/wishlistApiSlice";

export default configureStore({
  reducer: {
    search: searchSlice,
    selectedCategoriesz: selectedCategoriesSlice,
    selectedPrice: selectedPrice,

    auth: authReducer,
    users: userReducer,

    productsApi: productApiReducer,
    cartsApi: cartApiReducer,
    userApi: userApiSlice,
    wishlistApi: wishlistApiReducer,
  },
  middleware: [thunk],
});
