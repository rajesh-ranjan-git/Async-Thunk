import { configureStore } from "@reduxjs/toolkit";
import postReducers from "../Slices/postSlice";

export const store = configureStore({
  reducer: {
    posts: postReducers,
  },
});
