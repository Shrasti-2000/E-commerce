import React, { useEffect, useState } from 'react'
import { User, Mail, Lock, Eye, Phone, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { registerUser } from '../feature/auth/authSlice';
import Button from '../component/Button';

const RegisterPage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user, isLoading, isSuccess, isError, message} = useSelector(state => state.auth)
  const [formData, setFormData] = useState({name:"", email:"", phone:"", password:"", confirmpassword:""})

  const{name, email, phone, password, confirmpassword} = formData

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

const handleSubmit = (e) => {
 e.preventDefault()
 if(password !== confirmpassword){
  toast.error("Password Not Match"),{position : "top-center"}
}else{
  dispatch(registerUser({  name,
    email,
    phone,
    password}))
 

}   
}


useEffect(() => {
  if (isSuccess && user) {
    navigate("/");
  }

  if (isError) {
    toast.error(message);
  }

}, [isSuccess, user, isError,message]);

if (isLoading) {
  return (
    <h1 className="text-center font-bold text-gray-400 text-6xl my-4">Loading...</h1>
  )
}


 return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Signup Card */}
        <div className="bg-white rounded-3xl shadow-md p-8 md:p-10">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
              ShopHub
            </h1>
            <p className="text-gray-600 text-sm">Create your account to get started</p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <input
                name="name"
                id= "Name"
                value={name}
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

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
               name="email"
                id= "email"
                value={email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

 {/* Phone Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
           Phone
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="Phone"
                   name="phone"
                id= "phone"
                value={phone}
                  onChange={handleChange}
                  placeholder="Enter your number"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
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
                   name="password"
                id= "password"
                value={password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
                  <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                </div>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="password"
                   name="confirmpassword"
                id= "confirmpassword"
                value={confirmpassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
                  <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                </div>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start">
              <input
                type="checkbox"
                className="w-4 h-4 mt-1 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
              />
              <label className="ml-2 text-sm text-gray-600">
                I agree to the{' '}
                <a href="#" className="text-emerald-600 hover:text-teal-600 font-semibold transition-colors">
                  Terms & Conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-emerald-600 hover:text-teal-600 font-semibold transition-colors">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Signup Button */}
            <Button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-200">
              Create Account
            </Button>

            {/* Divider */}
            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-300 w-full"></div>
              <span className="bg-white px-4 text-sm text-gray-500 absolute">or</span>
            </div>

            {/* Social Signup Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded"></div>
                <span className="text-sm font-semibold text-gray-700">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-5 h-5 bg-gradient-to-br from-blue-600 to-blue-800 rounded"></div>
                <span className="text-sm font-semibold text-gray-700">Facebook</span>
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{' '}
              <Link to="/login" className="text-emerald-600 hover:text-teal-600 font-semibold transition-colors">
                Login
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

export default RegisterPage