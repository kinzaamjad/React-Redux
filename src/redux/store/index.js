import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../counterSlice";
import compareReducer from "../counterCompare";
import favoriteReducer from "../counterFrvt";

export const store = configureStore({
  reducer: {
    counter: cartReducer,
    compare: compareReducer,
    favorite: favoriteReducer,
  },
});
