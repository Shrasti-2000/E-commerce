import React, { useEffect, useState } from 'react'
import { Mail, Lock, Eye } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../feature/auth/authSlice';
import { toast } from 'react-toastify';


const LoginPage = () => {

const dispatch = useDispatch()
const navigate = useNavigate()

const {user, isLoading, isSuccess, isError, message} = useSelector(state => state.auth)
  const [formData, setFormData] = useState({email:"",  password:""})

  const{ email, password} = formData

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

const handleSubmit = (e) => {
  e.preventDefault() 
  dispatch(loginUser(formData))
  setFormData({
      email: "",
       password: "",
    });
}

useEffect(() => {
  if(user) {
    if(user.isAdmin){
      navigate("/admin")
    }
    else{
      navigate("/")
    }
  }
  if(isError && message) {
    toast.error(message)
  }
},[isError, message, user])



 return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
              ShopHub
            </h1>
            <p className="text-gray-600 text-sm">Welcome back! Please login to your account</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name = "email"
                  id = "email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="password"
                   name = "password"
                  id = "password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
                  <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                </div>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-cyan-600 hover:text-blue-600 font-semibold transition-colors">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-200">
              Login
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-300 w-full"></div>
              <span className="bg-white px-4 text-sm text-gray-500 absolute">or</span>
            </div>

            {/* Social Login Buttons */}
            

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Don't have an account?{' '}
              <Link to="/register" className="text-cyan-600 hover:text-blue-600 font-semibold transition-colors">
                Sign Up
              </Link>
            </p>
          </form>
        </div>

        {/* Footer Text */}
        <p className="text-center text-gray-600 text-sm mt-6">
          © 2024 ShopHub. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default LoginPage