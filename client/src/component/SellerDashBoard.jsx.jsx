import React from 'react'
import { Search, User, ShoppingCart, Menu, Package, ShoppingBag, DollarSign, TrendingUp, Plus, Edit, Trash2, Eye, BarChart3 } from 'lucide-react';


const SellDashBoard = () => {
  
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Seller Dashboard</h2>
            <p className="text-gray-600">Manage your products and track sales</p>
          </div>
          <button className="mt-4 sm:mt-0 flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all">
            <Plus className="w-5 h-5" />
            Add Product
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Products Listed */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">24</span>
            </div>
            <h4 className="text-gray-600 font-medium mb-1">Products Listed</h4>
            <p className="text-sm text-green-600 font-semibold">+3 this month</p>
          </div>

          {/* Orders Received */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">142</span>
            </div>
            <h4 className="text-gray-600 font-medium mb-1">Orders Received</h4>
            <p className="text-sm text-green-600 font-semibold">+12 today</p>
          </div>

          {/* Total Revenue */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">$12.5k</span>
            </div>
            <h4 className="text-gray-600 font-medium mb-1">Total Revenue</h4>
            <p className="text-sm text-green-600 font-semibold">+18% this month</p>
          </div>

          {/* Avg. Rating */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">4.8</span>
            </div>
            <h4 className="text-gray-600 font-medium mb-1">Avg. Rating</h4>
            <p className="text-sm text-gray-600">From 328 reviews</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <button className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-all flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Package className="w-5 h-5 text-purple-600" />
            </div>
            <span className="font-semibold text-gray-900">Manage Inventory</span>
          </button>
          <button className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-all flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ShoppingBag className="w-5 h-5 text-orange-600" />
            </div>
            <span className="font-semibold text-gray-900">View Orders</span>
          </button>
          <button className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-all flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center group-hover:scale-110 transition-transform">
              <BarChart3 className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="font-semibold text-gray-900">Analytics</span>
          </button>
          <button className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-all flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
              <DollarSign className="w-5 h-5 text-cyan-600" />
            </div>
            <span className="font-semibold text-gray-900">Payouts</span>
          </button>
        </div>

        {/* My Products Table */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">My Products</h3>
              <div className="flex items-center gap-3">
                <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer">
                  <option>All Products</option>
                  <option>Active</option>
                  <option>Out of Stock</option>
                  <option>Draft</option>
                </select>
              </div>
            </div>
          </div>

          {/* Table - Desktop */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Stock</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: 'Wireless Headphones', price: '$129.99', stock: 45, status: 'Active', color: 'from-blue-400 to-cyan-400' },
                  { name: 'Smart Watch Pro', price: '$299.99', stock: 23, status: 'Active', color: 'from-purple-400 to-pink-400' },
                  { name: 'Designer Sunglasses', price: '$89.99', stock: 0, status: 'Out of Stock', color: 'from-orange-400 to-red-400' },
                  { name: 'Leather Backpack', price: '$159.99', stock: 12, status: 'Active', color: 'from-green-400 to-emerald-400' },
                  { name: 'Running Shoes', price: '$119.99', stock: 67, status: 'Active', color: 'from-pink-400 to-rose-400' },
                  { name: 'Coffee Maker', price: '$79.99', stock: 34, status: 'Active', color: 'from-indigo-400 to-purple-400' },
                ].map((product, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center flex-shrink-0`}>
                          <div className="w-6 h-6 bg-white bg-opacity-30 rounded"></div>
                        </div>
                        <span className="font-semibold text-gray-900">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        {product.price}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`font-semibold ${product.stock === 0 ? 'text-red-600' : product.stock < 20 ? 'text-orange-600' : 'text-gray-900'}`}>
                        {product.stock}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.status === 'Active' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-cyan-50 rounded-lg transition-colors group">
                          <Eye className="w-4 h-4 text-gray-600 group-hover:text-cyan-600" />
                        </button>
                        <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors group">
                          <Edit className="w-4 h-4 text-gray-600 group-hover:text-blue-600" />
                        </button>
                        <button className="p-2 hover:bg-red-50 rounded-lg transition-colors group">
                          <Trash2 className="w-4 h-4 text-gray-600 group-hover:text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards - Mobile */}
          <div className="md:hidden divide-y divide-gray-200">
            {[
              { name: 'Wireless Headphones', price: '$129.99', stock: 45, status: 'Active', color: 'from-blue-400 to-cyan-400' },
              { name: 'Smart Watch Pro', price: '$299.99', stock: 23, status: 'Active', color: 'from-purple-400 to-pink-400' },
              { name: 'Designer Sunglasses', price: '$89.99', stock: 0, status: 'Out of Stock', color: 'from-orange-400 to-red-400' },
              { name: 'Leather Backpack', price: '$159.99', stock: 12, status: 'Active', color: 'from-green-400 to-emerald-400' },
            ].map((product, idx) => (
              <div key={idx} className="p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${product.color} flex items-center justify-center flex-shrink-0`}>
                    <div className="w-8 h-8 bg-white bg-opacity-30 rounded"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{product.name}</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        {product.price}
                      </span>
                      <span className="text-sm text-gray-600">Stock: {product.stock}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${
                      product.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all">
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="p-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing <span className="font-semibold text-gray-900">1-6</span> of <span className="font-semibold text-gray-900">24</span> products
              </p>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm font-semibold shadow-lg shadow-cyan-500/50">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default SellDashBoard