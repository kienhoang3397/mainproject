import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "https://fe21-db.vercel.app/todo";

const initialState = {
  data: [],
  isLoading: false,
  message: "",
  formData: { name: "", status: "" }, 
};
export const fetchTodos = createAsyncThunk("todo/getList", async () => {
  const data = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const json = await data.json();

  return json;
});
export const postTodos = createAsyncThunk(
  "todo/create",
  async (params) => {
    const url = "https://fe21-db.vercel.app/todo/create";
    const data = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    const json = await data.json();

    return json;
  }
);
export const deleteTodo = createAsyncThunk("todo/delete", async (id) => {
  const url = `https://fe21-db.vercel.app/todo/delete/${id}`;
  const data = await fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
    },
  });
  const json = await data.json();

  return json;
});


const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
  },

  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchTodos.rejected]: (state, action) => {
      state.message = action.error.message;
      state.isLoading = false;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.data = action.payload;

      state.isLoading = false;
    },
    [postTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [postTodos.rejected]: (state, action) => {
      state.data = action.payload
      state.isLoading = false
      alert("Error!")
    },
    [postTodos.fulfilled]: (state, action) => {
      state.isLoading = false
    },
    [deleteTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteTodo.rejected]: (state, action) => {
      state.message = action.error.message;
      state.isLoading = false;
      alert("Error deleting item!");
    },
    [deleteTodo.fulfilled]: (state, action) => {
      // Update the state to remove the deleted item
      state.data = state.data.filter(item => item.id !== action.meta.arg);
  
      state.isLoading = false;
    },
  },
});
export const { setFormData } = todoSlice.actions;
const { reducer: todoListReducer } = todoSlice;
export default todoListReducer