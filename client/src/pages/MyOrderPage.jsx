import React from 'react'
import { Search, User, ShoppingCart, Menu, Package, Truck, CheckCircle, XCircle, Clock, Download, Eye } from 'lucide-react';

const MyOrderPage = () => {

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
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h2>
            <p className="text-gray-600">Track and manage your orders</p>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex gap-2 mt-4 sm:mt-0 overflow-x-auto">
            <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-sm whitespace-nowrap shadow-lg shadow-cyan-500/50">
              All Orders
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-xl font-semibold text-sm whitespace-nowrap hover:bg-gray-50 transition-colors">
              Processing
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-xl font-semibold text-sm whitespace-nowrap hover:bg-gray-50 transition-colors">
              Delivered
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-xl font-semibold text-sm whitespace-nowrap hover:bg-gray-50 transition-colors">
              Cancelled
            </button>
          </div>
        </div>

        {/* Orders Grid */}
        <div className="space-y-4">
          {/* Order Card 1 - Delivered */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Product Image */}
                <div className="w-full lg:w-32 h-32 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
                  <div className="w-20 h-20 bg-white bg-opacity-30 rounded-lg"></div>
                </div>

                {/* Order Details */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Wireless Headphones</h3>
                      <p className="text-sm text-gray-600">Order ID: #ORD-12345</p>
                    </div>
                    <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-sm font-semibold rounded-full inline-flex items-center gap-2 w-fit">
                      <CheckCircle className="w-4 h-4" />
                      Delivered
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Order Date</p>
                      <p className="font-semibold text-gray-900">Dec 1, 2024</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Delivered On</p>
                      <p className="font-semibold text-gray-900">Dec 5, 2024</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Amount</p>
                      <p className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">$129.99</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors">
                      <Download className="w-4 h-4" />
                      Invoice
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors">
                      Buy Again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Card 2 - In Transit */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-32 h-32 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
                  <div className="w-20 h-20 bg-white bg-opacity-30 rounded-lg"></div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Smart Watch Pro</h3>
                      <p className="text-sm text-gray-600">Order ID: #ORD-12346</p>
                    </div>
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-semibold rounded-full inline-flex items-center gap-2 w-fit">
                      <Truck className="w-4 h-4" />
                      In Transit
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Order Date</p>
                      <p className="font-semibold text-gray-900">Nov 28, 2024</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Expected Delivery</p>
                      <p className="font-semibold text-gray-900">Dec 8, 2024</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Amount</p>
                      <p className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">$299.99</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                      <Package className="w-4 h-4" />
                      Track Order
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Card 3 - Processing */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-32 h-32 rounded-xl bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center flex-shrink-0">
                  <div className="w-20 h-20 bg-white bg-opacity-30 rounded-lg"></div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Designer Sunglasses</h3>
                      <p className="text-sm text-gray-600">Order ID: #ORD-12347</p>
                    </div>
                    <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 text-sm font-semibold rounded-full inline-flex items-center gap-2 w-fit">
                      <Clock className="w-4 h-4" />
                      Processing
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Order Date</p>
                      <p className="font-semibold text-gray-900">Nov 25, 2024</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Expected Delivery</p>
                      <p className="font-semibold text-gray-900">Dec 10, 2024</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Amount</p>
                      <p className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">$89.99</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-red-300 text-red-600 rounded-xl font-semibold text-sm hover:bg-red-50 transition-colors">
                      <XCircle className="w-4 h-4" />
                      Cancel Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Card 4 - Cancelled */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden opacity-75">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-32 h-32 rounded-xl bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center flex-shrink-0">
                  <div className="w-20 h-20 bg-white bg-opacity-30 rounded-lg"></div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Leather Backpack</h3>
                      <p className="text-sm text-gray-600">Order ID: #ORD-12348</p>
                    </div>
                    <span className="px-4 py-2 bg-gradient-to-r from-red-100 to-rose-100 text-red-700 text-sm font-semibold rounded-full inline-flex items-center gap-2 w-fit">
                      <XCircle className="w-4 h-4" />
                      Cancelled
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Order Date</p>
                      <p className="font-semibold text-gray-900">Nov 20, 2024</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Cancelled On</p>
                      <p className="font-semibold text-gray-900">Nov 22, 2024</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Refund Amount</p>
                      <p className="text-lg font-bold text-gray-900">$159.99</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors">
                      Buy Again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Card 5 - Delivered */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-32 h-32 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center flex-shrink-0">
                  <div className="w-20 h-20 bg-white bg-opacity-30 rounded-lg"></div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Running Shoes</h3>
                      <p className="text-sm text-gray-600">Order ID: #ORD-12349</p>
                    </div>
                    <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-sm font-semibold rounded-full inline-flex items-center gap-2 w-fit">
                      <CheckCircle className="w-4 h-4" />
                      Delivered
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Order Date</p>
                      <p className="font-semibold text-gray-900">Nov 15, 2024</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Delivered On</p>
                      <p className="font-semibold text-gray-900">Nov 20, 2024</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Amount</p>
                      <p className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">$119.99</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors">
                      <Download className="w-4 h-4" />
                      Invoice
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors">
                      Rate Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default MyOrderPage