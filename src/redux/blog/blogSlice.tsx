import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  blogDetails: [],
  otherBlogs: [],
  perticularBlog: {},
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,

  reducers: {
    getAllBlogs: (state, action) => {
      state.blogDetails = action.payload;
    },

    getremainingBlogs: (state, action) => {
      state.otherBlogs = action.payload;
    },

    getPerticularBlog: (state, action) => {
      state.perticularBlog = action.payload;
    },
  },
});

export const getBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/blogs/getBlogs`;

      const res = await axios.get(url);
      if (res.data.success) {
        dispatch(getAllBlogs(res.data.data || []));
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }

      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      return rejectWithValue("Unable to fetch cart items");
    }
  }
);

export const getBlog = createAsyncThunk(
  "blog/fetchBlog",
  async (blogId, { dispatch, rejectWithValue }) => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/blogs/getBlog/${blogId}`;

      const res = await axios.get(url);
      if (res.data.success) {
        dispatch(getPerticularBlog(res.data.data || []));
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }

      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      return rejectWithValue("Unable to fetch cart items");
    }
  }
);

export const getOtherBlogs = createAsyncThunk(
  "otherBlogs/fetchOtherBlogs",
  async (blogId, { dispatch, rejectWithValue }) => {
    try {
      const url = `${
        import.meta.env.VITE_API_URL
      }/blogs/getOtherBlogs/${blogId}`;

      const res = await axios.get(url);

      if (res.data.success) {
        dispatch(getremainingBlogs(res.data.data || []));
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }

      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      return rejectWithValue("Unable to fetch cart items");
    }
  }
);

export const { getAllBlogs, getPerticularBlog, getremainingBlogs } =
  blogSlice.actions;
export default blogSlice.reducer;
