import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";

import selectedCategoriesSlice from './slice/check';
import selectedPrice from './slice/priceFilter';
import productRuducer from "./slice/productSlice";
import searchSlice from "./slice/search";
import userReducer from "./slice/userSlice";
import wishSlice from "./slice/wishlist";
import productApiReducer from './slice/productApiSlice'
import cartApiReducer from './slice/cartApiSlice'
import user from './slice/userApiSlice'
import thunk from "redux-thunk";
import userApiSlice from "./slice/userApiSlice";

export default configureStore({
  reducer: {
    search: searchSlice,
    selectedCategoriesz: selectedCategoriesSlice,
    selectedPrice: selectedPrice,
   
    product: productRuducer,
    auth: authReducer,
    users: userReducer,
    wishlist: wishSlice,
    productsApi: productApiReducer,
    cartsApi: cartApiReducer,
    userApi: userApiSlice
  },
  middleware: [thunk],
})

