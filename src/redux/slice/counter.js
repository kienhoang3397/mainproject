import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    plus: (state) => {
      return state + 1;
    },
    minus: (state) => {
      return state - 1;
    },
    reset: () => {
      return initialState;
    },
    replace: (state, actions) =>{
        console.log(actions)
        return actions.payload
    }
  }
});

export const { plus, minus, reset, replace } = counterSlice.actions;
export default counterSlice.reducer;
