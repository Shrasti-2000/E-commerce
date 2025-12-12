import React, { useEffect } from 'react'
import { Search, User, ShoppingCart, Menu, SlidersHorizontal, Star, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../feature/products/productSlice';
import { Link, useNavigate } from 'react-router-dom';

const ProductListing = () => {
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  
const {products, productLoading, productSuccess, productError, productErrorMessage} = useSelector((state)=>state.products)
const dispatch = useDispatch()
const navigate=useNavigate()
console.log(products)
useEffect(() => {
  dispatch(getAllProducts())
},[])
useEffect(() => {
  setFilteredProducts(products);
}, [products]);
const handleCategoryFilter = (category) => {
  let updated;
  
  if (selectedCategories.includes(category)) {
    updated = selectedCategories.filter(c => c !== category);
  } else {
    updated = [...selectedCategories, category];
  }

  setSelectedCategories(updated);

  // Filter logic
  if (updated.length === 0) {
    setFilteredProducts(products);
  } else {
    setFilteredProducts(
      products.filter(p => updated.includes(p.category))
    );
  }
};


     return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-[999]">
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
            <Link to={"/listing"}>
                        <User className="w-6 h-6 text-gray-700 cursor-pointer hover:text-purple-600 transition-colors" />
           </Link>
              <div className="relative" onClick={()=>navigate("/cart")}>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">All Products</h2>
          <p className="text-gray-600">Discover our complete collection of premium products</p>
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <button className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 flex items-center justify-center gap-2 font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            <SlidersHorizontal className="w-5 h-5" />
            Filters & Sorting
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Filters</h3>
                <button className="text-sm text-cyan-600 hover:text-blue-600 font-semibold transition-colors">
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">{products.category}</h4>
                <div className="space-y-2">
                {['Electronics', 'Fashion', 'Home & Living', 'Beauty', 'Sports', 'Books'].map((category) => (
  <label key={category} className="flex items-center cursor-pointer group">
    <input 
      type="checkbox" 
      checked={selectedCategories.includes(category)}
      onChange={() => handleCategoryFilter(category)}
      className="w-4 h-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500" 
    />
    <span className="ml-2 text-sm text-gray-700 group-hover:text-cyan-600 transition-colors">
      {category}
    </span>
  </label>
))}

                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
                <div className="space-y-3">
                  <div>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex items-center justify-between mt-2">
                      <input
                        type="text"
                        placeholder="$0"
                        className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                      <span className="text-gray-500">-</span>
                      <input
                        type="text"
                        placeholder="$1000"
                        className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    {['Under $50', '$50 - $100', '$100 - $200', 'Over $200'].map((range) => (
                      <label key={range} className="flex items-center cursor-pointer group">
                        <input type="radio" name="price" className="w-4 h-4 border-gray-300 text-cyan-600 focus:ring-cyan-500" />
                        <span className="ml-2 text-sm text-gray-700 group-hover:text-cyan-600 transition-colors">
                          {range}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500" />
                      <div className="ml-2 flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="ml-1 text-sm text-gray-700 group-hover:text-cyan-600 transition-colors">
                          & Up
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Apply Button */}
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-6 bg-white rounded-xl shadow-sm p-4">
              <p className="text-sm text-gray-600">
                Showing <span className="font-semibold text-gray-900">48</span> products
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer">
                  <option>Popularity</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                  <option>Rating</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts?.map((product, idx) => (
                <Link to={`/ProductDetails/${product._id}`}
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer"
                >
                  <div className={`bg-gradient-to-br ${product.color} aspect-square flex items-center justify-center relative overflow-hidden`}>
                    <div className=" bg-white bg-opacity-30 rounded-xl">
             <img src={product.itemImage} alt="" className='w-full'/>
                    </div>
                    <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-10">
                      <ShoppingCart className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                      {product.title}
                    </h3>
                    <h3 className="font-semibold  mb-2 group-hover:text-cyan-600 transition-colors">
                      {product.category}
                    </h3>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        {product.price}
                      </span>
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                        Add
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                Previous
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    page === 1
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );

}

export default ProductListing