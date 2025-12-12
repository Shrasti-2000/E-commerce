import React from 'react'
import { Search, User, ShoppingCart, Menu, MapPin, CreditCard, Wallet, Truck, ShieldCheck, Lock } from 'lucide-react';

const CheckOutPage = () => {
 
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
              <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-96">
                <Search className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent outline-none w-full text-sm"
                />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <User className="w-6 h-6 text-gray-700 cursor-pointer hover:text-cyan-600 transition-colors" />
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer hover:text-cyan-600 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  5
                </span>
              </div>
              <Menu className="w-6 h-6 text-gray-700 md:hidden" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white flex items-center justify-center font-semibold">
                ✓
              </div>
              <span className="ml-2 font-semibold text-gray-900">Cart</span>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500"></div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-semibold">
                2
              </div>
              <span className="ml-2 font-semibold text-cyan-600">Checkout</span>
            </div>
            <div className="w-16 h-1 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300 text-white flex items-center justify-center font-semibold">
                3
              </div>
              <span className="ml-2 font-semibold text-gray-400">Complete</span>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Address */}
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Shipping Address</h3>
              </div>

              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="House no., Building, Street"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                  />
                </div>

                {/* City & Pincode */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="Enter city"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Pincode
                    </label>
                    <input
                      type="text"
                      placeholder="Enter pincode"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                    />
                  </div>
                </div>

                {/* State & Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      State
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all">
                      <option>Select State</option>
                      <option>Maharashtra</option>
                      <option>Delhi</option>
                      <option>Karnataka</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Country
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all">
                      <option>India</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Payment Method</h3>
              </div>

              <div className="space-y-3">
                {/* Credit/Debit Card */}
                <label className="flex items-center p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-cyan-500 transition-colors group">
                  <input
                    type="radio"
                    name="payment"
                    className="w-5 h-5 text-cyan-600 focus:ring-cyan-500"
                    defaultChecked
                  />
                  <div className="flex items-center gap-3 ml-4 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                        Credit / Debit Card
                      </p>
                      <p className="text-sm text-gray-600">Visa, Mastercard, Amex</p>
                    </div>
                  </div>
                </label>

                {/* UPI */}
                <label className="flex items-center p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-cyan-500 transition-colors group">
                  <input
                    type="radio"
                    name="payment"
                    className="w-5 h-5 text-cyan-600 focus:ring-cyan-500"
                  />
                  <div className="flex items-center gap-3 ml-4 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                        UPI Payment
                      </p>
                      <p className="text-sm text-gray-600">Google Pay, PhonePe, Paytm</p>
                    </div>
                  </div>
                </label>

                {/* Net Banking */}
                <label className="flex items-center p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-cyan-500 transition-colors group">
                  <input
                    type="radio"
                    name="payment"
                    className="w-5 h-5 text-cyan-600 focus:ring-cyan-500"
                  />
                  <div className="flex items-center gap-3 ml-4 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                        Net Banking
                      </p>
                      <p className="text-sm text-gray-600">All major banks supported</p>
                    </div>
                  </div>
                </label>

                {/* Cash on Delivery */}
                <label className="flex items-center p-4 border-2 border-gray-300 rounded-xl cursor-pointer hover:border-cyan-500 transition-colors group">
                  <input
                    type="radio"
                    name="payment"
                    className="w-5 h-5 text-cyan-600 focus:ring-cyan-500"
                  />
                  <div className="flex items-center gap-3 ml-4 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                      <Truck className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                        Cash on Delivery
                      </p>
                      <p className="text-sm text-gray-600">Pay when you receive</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Section - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>

              {/* Order Items */}
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                {[
                  { name: 'Wireless Headphones', qty: 1, price: 129.99, color: 'from-blue-400 to-cyan-400' },
                  { name: 'Smart Watch', qty: 1, price: 299.99, color: 'from-purple-400 to-pink-400' },
                  { name: 'Designer Sunglasses', qty: 2, price: 179.98, color: 'from-orange-400 to-red-400' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <div className="w-8 h-8 bg-white bg-opacity-30 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                      <p className="text-xs text-gray-600">Qty: {item.qty}</p>
                    </div>
                    <span className="font-semibold text-gray-900">${item.price}</span>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-gray-900">$609.96</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold text-gray-900">$61.00</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  $670.96
                </span>
              </div>

              {/* Place Order Button */}
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all mb-4">
                Place Order
              </button>

              {/* Security Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Lock className="w-4 h-4 text-cyan-600" />
                  <span>Secure SSL encrypted payment</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% secure checkout</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Truck className="w-4 h-4 text-blue-600" />
                  <span>Free delivery on orders over $50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default CheckOutPage