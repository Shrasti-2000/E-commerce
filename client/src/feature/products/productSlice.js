import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";

const productSlice = createSlice({
    name:'product',
    initialState:{
        products:[],
        product:{},
        cart: null,
        productLoading:false,
         productSuccess:false,
          productError:false,
          productErrorMessage:""
    },
    reducers:{

    },

    extraReducers:builder => {
            builder
             .addCase(getAllProducts.pending, (state, action) => {
                    state.isLoading = true
                    state.isSuccess = false
                    state.isError = false
                })
                .addCase(getAllProducts.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.products = action.payload
                    state.isError = false
                })
                .addCase(getAllProducts.rejected, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = false
                    state.message = action.payload
                    state.isError = true
                })
    
                 .addCase(getSingleProduct.pending, (state, action)=> {
                            state.productLoading = true
                            state.productSuccess = false
                            state.productError = false
                        })
                         .addCase(getSingleProduct.fulfilled, (state, action)=> {
                            state.productLoading = false
                             state.product = action.payload
                            state.productSuccess = true
                           state.productError = false
                        })
                         .addCase(getSingleProduct.rejected, (state, action)=> {
                            state.productLoading = false
                            state.productSuccess = false
                            state.productError = true
                            state.productErrorMessage = action.payload
                        })

                        // Add product 
        .addCase(createProduct.pending, (state, action) => {
                state.productLoading = true
                state.productSuccess = false
                state.productError = false
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.productLoading = false
                state.products = [action.payload, ...state.products]
                state.productSuccess = true
                state.productError = false
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.productLoading = false
                state.productSuccess = false
                state.productError = true
                state.productErrorMessage = action.payload
            })
                
        }
})


export default productSlice.reducer

export const getAllProducts = createAsyncThunk('PRODUCTS/FETCH' ,async(__, thunkAPI) => {
    try {
        return productService.fetchAllProduct()
    } catch (error) {
         const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const getSingleProduct = createAsyncThunk('PRODUCT/FETCH' ,async(id, thunkAPI) => {
   try {
    return await productService.fetchSingleProduct(id);
  } catch (error) {
    const message = error.response?.data?.message || error.message;
    return thunkAPI.rejectWithValue(message);
  }
})


// Add Product
export const createProduct = createAsyncThunk('ADD/PRODUCT', async(formData, thunkAPI)=>{
 
    let token = thunkAPI.getState().auth.user.token
    try {
      return await productService.addProduct(formData, token)
} catch (error) {
    const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    
}
 })