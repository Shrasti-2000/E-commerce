import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminService from "./adminService";

export const fetchUsers = createAsyncThunk(
  "ADMIN/USERS",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await adminService.fetchAllUser(token);
    } catch (err) {
      return thunkAPI.rejectWithValue("Failed to load users");
    }
  }
);

export const fetchProducts = createAsyncThunk(
  "ADMIN/PRODUCTS",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await adminService.getAllProducts(token);
    } catch (err) {
      return thunkAPI.rejectWithValue("Failed to load products");
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    users: [],
    products: [],
    loading: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      });
  },
});

export default adminSlice.reducer;
