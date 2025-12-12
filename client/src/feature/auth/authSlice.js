import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

// ----------------------
// 1️⃣ ASYNC THUNKS
// ----------------------

// Register User
export const registerUser = createAsyncThunk(
  "AUTH/REGISTER",
  async (formData, thunkAPI) => {
    try {
      return await authService.register(formData);
    } catch (error) {
      const message = error?.response?.data?.message || "Something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login User
export const loginUser = createAsyncThunk(
  "AUTH/LOGIN",
  async (formData, thunkAPI) => {
    try {
      return await authService.login(formData);
    } catch (error) {
      const message = error?.response?.data?.message || "Something went wrong";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Logout User
export const logoutUser = createAsyncThunk("AUTH/LOGOUT", async () => {
    localStorage.removeItem('user')
    localStorage.removeItem("token");
})

// ----------------------
// 2️⃣ LOAD USER FROM LOCAL STORAGE
// ----------------------
const userExist = JSON.parse(localStorage.getItem("user"));


const authSlice = createSlice({
  name: "auth||admin",
  initialState:{
    user: userExist || null,
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: ""
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // ----------------------
      // REGISTER HANDLERS
      // ----------------------
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
       
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.isError = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      // ----------------------
      // LOGIN HANDLERS
      // ----------------------
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
    
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "",
        state.user = action.payload
        state.isError = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      // ----------------------
      // LOGOUT HANDLER
      // ----------------------
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = false
        state.message = "",
            state.user = null
    })
  },
});

export default authSlice.reducer;
