import { configureStore } from "@reduxjs/toolkit";

import todoListReducer from "./slice/todolist";
import searchSlice from "./slice/search";
import selectedCategoriesSlice from './slice/check';
import priceFilter from "./slice/priceFilter";
import selectedPrice from './slice/priceFilter';
import cartSlice from "./slice/cartSlice";
import productRuducer from "./slice/productSlice";
import authReducer from "./slice/authSlice"
import userReducer from "./slice/userSlice"

export default configureStore({
  reducer: {
    
    // todoList: todoListReducer,
    search: searchSlice,
    selectedCategoriesz: selectedCategoriesSlice,
    selectedPrice: selectedPrice, // Correção da chave aqui
    cart: cartSlice,
    product: productRuducer,
    auth: authReducer,
    users: userReducer
   
    
  },
});
