import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counter";
import todoListReducer from "./slice/todolist";
import searchSlice from "./slice/search";
import selectedCategoriesSlice from './slice/check';
import priceFilter from "./slice/priceFilter";
import selectedPrice from './slice/priceFilter';

export default configureStore({
  reducer: {
    counter: counterSlice,
    todoList: todoListReducer,
    search: searchSlice,
    selectedCategories: selectedCategoriesSlice,
    selectedPrice: selectedPrice, // Correção da chave aqui
  },
});
