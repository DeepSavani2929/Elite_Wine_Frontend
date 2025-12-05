import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

import {
  getGuestCartId,
  createGuestCartId,
  getUserCartId,
  getUserId,
} from "../../utils/cartIdManager";

const getActiveCartId = () => {
  const userCartId = getUserCartId();
  if (userCartId) return userCartId;

  let guestId = getGuestCartId();
  if (!guestId) guestId = createGuestCartId();
  return guestId;
};

const authHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const addToCartAPI = createAsyncThunk(
  "cart/addToCart",
  async ({ productId }, { dispatch, rejectWithValue }) => {
    try {
      const cartId = getActiveCartId();

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/cart/addToCart`,
        { cartId, productId },
        { headers: authHeader() }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        dispatch(fetchCartItemsAPI());
      } else {
        toast.error(res.data.message);
      }

      return true;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const fetchCartItemsAPI = createAsyncThunk(
  "cart/fetchCartItems",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const cartId = getActiveCartId();

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/cart/getCartProducts/${cartId}`,
        { headers: authHeader() }
      );

      dispatch(getAllCartItems(res.data.data || []));
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }
);

export const incrementQuantity = createAsyncThunk(
  "cart/incrementQuantity",
  async (productId, { dispatch }) => {
    try {
      const cartId = getActiveCartId();

      await axios.put(
        `${
          import.meta.env.VITE_API_URL
        }/cart/incrementQuantity/${cartId}/${productId}`,
        {},
        { headers: authHeader() }
      );
      dispatch(fetchCartItemsAPI());
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }
);

export const decrementQuantity = createAsyncThunk(
  "cart/decrementQuantity",
  async (productId, { dispatch }) => {
    try {
      const cartId = getActiveCartId();

      await axios.put(
        `${
          import.meta.env.VITE_API_URL
        }/cart/decrementQuantity/${cartId}/${productId}`,
        {},
        { headers: authHeader() }
      );

      dispatch(fetchCartItemsAPI());
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }
);

export const deleteCartProduct = createAsyncThunk(
  "cart/deleteCartProduct",
  async (productId, { dispatch }) => {
    const cartId = getActiveCartId();

    await axios.get(
      `${
        import.meta.env.VITE_API_URL
      }/cart/deteleCartProduct/${cartId}/${productId}`,
      { headers: authHeader() }
    );

    dispatch(fetchCartItemsAPI());
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    isDrawerOpen: false,
  },
  reducers: {
    setDrawerOpen: (state, action) => {
      state.isDrawerOpen = action.payload;
    },
    clearCartItems: (state) => {
      state.cartItems = [];
    },
    getAllCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { setDrawerOpen, clearCartItems, getAllCartItems } =
  cartSlice.actions;

export default cartSlice.reducer;
