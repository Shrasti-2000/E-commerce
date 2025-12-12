import React, { useEffect } from 'react'
import { Search, User, ShoppingCart, Menu, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../feature/auth/authSlice';
import { getAllProducts } from '../feature/products/productSlice';
import { addToCart } from '../feature/cart/cartSlice';

const HomePage = () => {

const {user} = useSelector((state) =>state.auth)
const {products, productLoading, productSuccess, productError, productErrorMessage} = useSelector((state)=>state.products)
const dispatch = useDispatch()
const navigate = useNavigate()

const { cartItems } = useSelector((state) => state.cart);
const handleLogout = () => {
  dispatch(logoutUser())
  navigate("/login")
}

console.log(products)
useEffect(() => {
  dispatch(getAllProducts())
},[])


  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ShopHub
              </div>
              <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-90">
                <Search className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent outline-none w-full text-sm"
                />
              </div>
            </div>
            <div className="flex items-center gap-6">
           <Link to={"/listing"}>
                        <User className="w-6 h-6 text-gray-700 cursor-pointer hover:text-purple-600 transition-colors" />
           </Link>
           <span className="text-white bg-purple-500 font-semibold text-sm w-8 h-8  rounded-full flex items-center justify-center shadow-md hover:bg-green-700 transition">
                  {user?.name[0]||"User"}
                </span>
              <div className="relative" onClick={()=>navigate("/cart")}>
                <ShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer hover:text-purple-600 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </div>
        {/* Button */}
                <button
                onClick={handleLogout}
                className="cursor-pointer bg-purple-500 hover:bg-purple-700 text-white font-medium rounded-full py-2 px-4 shadow-md transition"
              >
                Logout
              </button>
              <Menu className="w-6 h-6 text-gray-700 md:hidden" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover Your Style
              <span className="block mt-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Shop With Confidence
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our curated collection of premium products designed to elevate your lifestyle
            </p>
            <button onClick={()=>navigate("/listing")} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { name: 'Electronics', gradient: 'from-blue-400 to-cyan-400' },
              { name: 'Fashion', gradient: 'from-pink-400 to-rose-400' },
              { name: 'Home & Living', gradient: 'from-green-400 to-emerald-400' },
              { name: 'Beauty', gradient: 'from-purple-400 to-pink-400' },
              { name: 'Sports', gradient: 'from-orange-400 to-red-400' },
              { name: 'Books', gradient: 'from-indigo-400 to-purple-400' },
            ].map((category) => (
              <div
                key={category.name}
                className="group cursor-pointer"
              >
                <div className={`bg-gradient-to-br ${category.gradient} rounded-2xl aspect-square flex items-center justify-center mb-3 group-hover:shadow-xl transition-shadow`}>
                  <div className="w-16 h-16 bg-white rounded-full"></div>
                </div>
                <p className="text-center font-medium text-gray-900">{category.name}</p>
              </div>
            ))}
          </div>
        

        </div>
      </section>

      {/* Featured Products Section */}
    {/* Featured Products Section */}
<section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
      Featured Products
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products?.map((product, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
        >

          {/* CLICKABLE IMAGE */}
          <Link to={`/ProductDetails/${product._id}`}>
            <div
              className={`bg-gradient-to-br ${product.color} aspect-square flex items-center justify-center relative`}
            >
              <div className="bg-white bg-opacity-30 rounded-xl">
                <img src={product.itemImage} alt="" className="w-full" />
              </div>
            </div>
          </Link>

          {/* PRODUCT CONTENT */}
          <div className="p-4">

            {/* CLICKABLE TITLE */}
            <Link to={`/ProductDetails/${product._id}`}>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                {product.title}
              </h3>
            </Link>

            <p className="text-gray-700 text-sm mb-2">{product.description}</p>

            {/* Ratings */}
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-600 ml-1">
                ({product.rating})
              </span>
            </div>

            {/* Price + Add Button */}
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                ₹{product.price}
              </span>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(addToCart(product));
                }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                ShopHub
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your one-stop destination for premium products and exceptional shopping experience.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"></div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-pink-500/50 transition-shadow"></div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Shop</h4>
              <ul className="space-y-3">
                <li className="text-gray-400 hover:text-white cursor-pointer transition-colors hover:translate-x-1 transform duration-200">New Arrivals</li>
                <li className="text-gray-400 hover:text-white cursor-pointer transition-colors hover:translate-x-1 transform duration-200">Best Sellers</li>
                <li className="text-gray-400 hover:text-white cursor-pointer transition-colors hover:translate-x-1 transform duration-200">Sale</li>
                <li className="text-gray-400 hover:text-white cursor-pointer transition-colors hover:translate-x-1 transform duration-200">Gift Cards</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Support</h4>
              <ul className="space-y-3">
                <li className="text-gray-400 hover:text-white cursor-pointer transition-colors hover:translate-x-1 transform duration-200">Contact Us</li>
                <li className="text-gray-400 hover:text-white cursor-pointer transition-colors hover:translate-x-1 transform duration-200">Shipping Info</li>
                <li className="text-gray-400 hover:text-white cursor-pointer transition-colors hover:translate-x-1 transform duration-200">Returns & Exchanges</li>
                <li className="text-gray-400 hover:text-white cursor-pointer transition-colors hover:translate-x-1 transform duration-200">FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
              <ul className="space-y-3">
                <li className="text-gray-400 hover:text-white cursor-pointer transition-colors hover:translate-x-1 transform duration-200">About Us</li>
                <li className="text-gray-400 hover:text-white cursor-pointer transition-colors hover:translate-x-1 transform duration-200">Careers</li>
                <li className="text-gray-400 hover:text-white cursor-pointer transition-colors hover:translate-x-1 transform duration-200">Privacy Policy</li>
                <li className="text-gray-400 hover:text-white cursor-pointer transition-colors hover:translate-x-1 transform duration-200">Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">&copy; 2024 ShopHub. All rights reserved.</p>
              <div className="flex gap-6 text-sm text-gray-400">
                <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
                <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
                <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default HomePage