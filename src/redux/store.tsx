import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice.tsx";
import blogReducer from "./blog/blogSlice.tsx";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    blog: blogReducer
  },
});