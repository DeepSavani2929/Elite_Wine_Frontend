import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import axios from "axios";

const initialState = {
  blogDetails: [],
  perticularBlog: {}
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,

  reducers:{
      
      getAllBlogs: (state, action) => {
    state.blogDetails = action.payload;
  },

   getPerticularBlog: (state, action) => {
    state.perticularBlog = action.payload;
  },

  }

});

export const getBlogs = createAsyncThunk(
  "cart/fetchCartItems",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/blogs/getBlogs`;

      const res = await axios.get(url);

      dispatch(getAllBlogs(res.data.data || []));

      return true;
    } catch (error) {
      return rejectWithValue("Unable to fetch cart items");
    }
  }
);

export const getBlog = createAsyncThunk(
  "cart/fetchCartItems",
  async (blogId, { dispatch, rejectWithValue }) => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/blogs/getBlog/${blogId}`;

      const res = await axios.get(url);

      dispatch(getPerticularBlog(res.data.data || []));

      return true;
    } catch (error) {
      return rejectWithValue("Unable to fetch cart items");
    }
  }
);

export const { getAllBlogs, getPerticularBlog } = blogSlice.actions;
export default blogSlice.reducer;
