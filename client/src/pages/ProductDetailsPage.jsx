import React, { useEffect, useState } from 'react'
import { Search, User, ShoppingCart, Menu, Star, Heart, Share2, Minus, Plus, Truck, ShieldCheck, RotateCcw } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../feature/products/productSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToCart } from "../feature/cart/cartSlice";

const ProductDetailsPage = () => {
 
 const navigate=useNavigate()
 const {product, productLoading, productSuccess, productError, productErrorMessage} = useSelector(state => state.products)
   const dispatch = useDispatch()
const { pid } = useParams();


  const [qty, setQty] = useState(1);

  const increaseQty = () => {
    setQty(prev => prev + 1);
  };

  const decreaseQty = () => {
    setQty(prev => (prev > 1 ? prev - 1 : 1));
  };


 useEffect(() => {
dispatch(getSingleProduct(pid))

if(productError && productErrorMessage ){
  toast.error(productError)
}
  },[])



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

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-sm">
          <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">Home</a>
          <span className="text-gray-400">/</span>
          <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">Electronics</a>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-semibold">Wireless Headphones</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="bg-white  rounded-2xl shadow-md overflow-hidden">
              <div className="aspect-square  flex items-center justify-center">
                 <img src={product.itemImage} alt="" className='w-80 h-80' />
              </div>
            </div>
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {['from-blue-400 to-cyan-400', 'from-purple-400 to-pink-400', 'from-emerald-400 to-teal-400', 'from-orange-400 to-red-400'].map((gradient, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${gradient} rounded-xl aspect-square cursor-pointer hover:scale-105 transition-transform flex items-center justify-center ${idx === 0 ? 'ring-4 ring-cyan-500' : ''}`}>
                  <div className="w-12 h-12 bg-white bg-opacity-30 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              {/* Title */}
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {product.title}
              </h2>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">(4.5) 328 Reviews</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {product.price}
                </span>
                <span className="text-xl text-gray-400 line-through">{product.price}</span>
                <span className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 text-sm font-semibold rounded-full">
                  35% OFF
                </span>
              </div>

              {/* Description */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Color</h3>
                <div className="flex items-center gap-3">
                  {['bg-gray-900', 'bg-blue-500', 'bg-rose-400', 'bg-white'].map((color, idx) => (
                    <button
                      key={idx}
                      className={`w-10 h-10 rounded-full ${color} ${color === 'bg-white' ? 'border-2 border-gray-300' : ''} ${idx === 0 ? 'ring-4 ring-cyan-500 ring-offset-2' : ''} hover:scale-110 transition-transform`}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
  <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
  <div className="flex items-center gap-3">

    <button
      onClick={decreaseQty}
      className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
    >
      <Minus className="w-4 h-4 text-gray-700" />
    </button>
  <input
      type="text"
      value={qty}
      className="w-16 h-10 text-center border border-gray-300 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500"
      readOnly
    />
 <button
      onClick={increaseQty}
      className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
      <Plus className="w-4 h-4 text-gray-700" />
    </button>

  </div>
</div>


         {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
  onClick={() => {
    dispatch(
      addToCart({
        _id: product._id,
        title: product.title,
        price: product.price,
        itemImage: product.itemImage,
      })
    );
      navigate("/cart")
    toast.success("Item added to cart!");
  }}
  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2"
>
  <ShoppingCart className="w-5 h-5" />
  Add to Cart
</button>


                <button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-emerald-500/50 transition-all">
                  Buy Now
                </button>
              </div>

              {/* Wishlist & Share */}
              <div className="flex gap-3 mb-6 pb-6 border-b border-gray-200">
                <button className="flex-1 border border-gray-300 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  Wishlist
                </button>
                <button className="flex-1 border border-gray-300 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                    <Truck className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Free Delivery</p>
                    <p className="text-gray-600">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">2 Year Warranty</p>
                    <p className="text-gray-600">Full coverage protection</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <RotateCcw className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">30-Day Returns</p>
                    <p className="text-gray-600">Easy return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Write a Review
            </button>
          </div>

          {/* Rating Summary */}
          <div className="flex flex-col md:flex-row gap-8 mb-8 pb-8 border-b border-gray-200">
            <div className="text-center md:text-left">
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                4.5
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-gray-600 text-sm">Based on 328 reviews</p>
            </div>

            <div className="flex-1 space-y-2">
              {[
                { stars: 5, percentage: 70 },
                { stars: 4, percentage: 20 },
                { stars: 3, percentage: 5 },
                { stars: 2, percentage: 3 },
                { stars: 1, percentage: 2 },
              ].map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-20">
                    <span className="text-sm font-semibold text-gray-700">{item.stars}</span>
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Review Cards */}
          <div className="space-y-6">
            {[
              { name: 'Sarah Johnson', rating: 5, date: 'Dec 1, 2024', text: 'Absolutely amazing headphones! The sound quality is incredible and the noise cancellation works perfectly. Very comfortable for long listening sessions.' },
              { name: 'Michael Chen', rating: 5, date: 'Nov 28, 2024', text: 'Best purchase I\'ve made this year. Battery life is exceptional and they look great too. Highly recommend!' },
              { name: 'Emma Williams', rating: 4, date: 'Nov 25, 2024', text: 'Great headphones overall. Sound quality is excellent. Only minor issue is they can feel a bit tight after a few hours, but that might just be me.' },
              { name: 'David Brown', rating: 5, date: 'Nov 20, 2024', text: 'Perfect for working from home. The noise cancellation blocks out all distractions. Build quality feels premium.' },
            ].map((review, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-6 hover:border-cyan-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-600">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-8">
            <button className="border border-gray-300 px-8 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              Load More Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default ProductDetailsPage