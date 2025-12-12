import React from 'react'
import { User, ShoppingBag, ShoppingCart, Package, Plus, Settings, Bell, LogOut } from 'lucide-react';


const UserDashboard = () => {
     return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              ShopHub
            </h1>
            <div className="flex items-center gap-4">
              <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-cyan-600 transition-colors" />
              <Settings className="w-6 h-6 text-gray-600 cursor-pointer hover:text-cyan-600 transition-colors" />
              <LogOut className="w-6 h-6 text-gray-600 cursor-pointer hover:text-red-600 transition-colors" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h2>
          <p className="text-gray-600">Manage your account and track your orders</p>
        </div>

        {/* Profile Summary Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">John Doe</h3>
              <p className="text-gray-600 mb-3">john.doe@example.com</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 text-sm font-semibold rounded-full">
                  Premium Member
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full">
                  Member since 2024
                </span>
              </div>
            </div>

            {/* Edit Profile Button */}
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">24</span>
            </div>
            <h4 className="text-gray-600 font-medium">Total Orders</h4>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">5</span>
            </div>
            <h4 className="text-gray-600 font-medium">Cart Items</h4>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">12</span>
            </div>
            <h4 className="text-gray-600 font-medium">My Products</h4>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">∞</span>
            </div>
            <h4 className="text-gray-600 font-medium">Add More</h4>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">My Orders</h4>
              <p className="text-sm text-gray-600">View order history</p>
            </button>

            <button className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">My Cart</h4>
              <p className="text-sm text-gray-600">View cart items</p>
            </button>

            <button className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">My Products</h4>
              <p className="text-sm text-gray-600">Manage products</p>
            </button>

            <button className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-md p-6 hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-white bg-opacity-30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-1">Add Product</h4>
              <p className="text-sm text-cyan-50">Create new listing</p>
            </button>
          </div>
        </div>

        {/* Recent Orders Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Recent Orders</h3>
            <a href="#" className="text-cyan-600 hover:text-blue-600 font-semibold text-sm transition-colors">
              View All
            </a>
          </div>

          <div className="space-y-4">
            {[
              { id: '#12345', product: 'Wireless Headphones', status: 'Delivered', date: 'Dec 1, 2024', color: 'from-green-400 to-emerald-500' },
              { id: '#12344', product: 'Smart Watch', status: 'In Transit', date: 'Nov 28, 2024', color: 'from-blue-400 to-cyan-500' },
              { id: '#12343', product: 'Leather Backpack', status: 'Processing', date: 'Nov 25, 2024', color: 'from-orange-400 to-amber-500' },
            ].map((order) => (
              <div key={order.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-cyan-300 hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-3 sm:mb-0">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${order.color} flex items-center justify-center`}>
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{order.product}</h4>
                    <p className="text-sm text-gray-600">Order {order.id}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-4">
                  <span className="text-sm text-gray-600">{order.date}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                    order.status === 'In Transit' ? 'bg-blue-100 text-blue-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}


export default UserDashboard