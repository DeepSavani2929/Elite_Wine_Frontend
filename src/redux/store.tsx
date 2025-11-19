import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice.tsx";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});