import { configureStore } from "@reduxjs/toolkit"
import auth from "./auth/authSlice"
import admin from './admin/adminSlice'
import products from './products/productSlice'

import cart from './cart/cartSlice'

const store = configureStore({
    reducer: {auth, admin , products,cart}
})



export default store