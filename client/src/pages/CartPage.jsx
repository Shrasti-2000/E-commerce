import React from 'react'
import { Search, User, ShoppingCart, Menu, Trash2, Minus, Plus, ArrowLeft, Tag } from 'lucide-react';
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../feature/cart/cartSlice";

const CartPage = () => {

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                ShopHub
              </h1>
            </div>

            <div className="flex items-center gap-6">
              <User className="w-6 h-6 text-gray-700 cursor-pointer hover:text-cyan-600 transition-colors" />
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-cyan-600" />
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </div>
              <Menu className="w-6 h-6 text-gray-700 md:hidden" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Shopping Cart</h2>
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{cartItems.length}</span> items in cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Cart Items Dynamic */}
          <div className="lg:col-span-2 space-y-4">

            {cartItems.length === 0 && (
              <p className="text-gray-600 text-lg font-semibold">Your cart is empty!</p>
            )}

            {cartItems.map((item) => (
              <div key={item._id} className="bg-white rounded-2xl shadow-sm p-4 md:p-6">
                <div className="flex flex-col sm:flex-row gap-4">

                  {/* Product Image */}
                  <div className="w-full sm:w-32 h-32 rounded-xl bg-gray-100 flex items-center justify-center">
                    <img src={item.itemImage} className="w-full h-full object-cover rounded-xl" />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">{item.title}</h3>

                      <div className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        ₹{item.price}
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">

                        <button
                          onClick={() => dispatch(decreaseQty(item._id))}
                          className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center"
                        >
                          <Minus className="w-4 h-4 text-gray-700" />
                        </button>

                        <span className="w-12 text-center font-semibold text-gray-900">
                          {item.qty}
                        </span>

                        <button
                          onClick={() => dispatch(increaseQty(item._id))}
                          className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center"
                        >
                          <Plus className="w-4 h-4 text-gray-700" />
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => dispatch(removeFromCart(item._id))}
                        className="flex items-center gap-2 text-red-600 font-semibold"
                      >
                        <Trash2 className="w-5 h-5" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">

              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>

              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-gray-900">₹{subtotal}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  ₹{subtotal}
                </span>
              </div>

              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg">
                Proceed to Checkout
              </button>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CartPage;
