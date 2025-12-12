const User = require("../models/userModel")
const Listing = require("../models/productModel")

const getProduct = async(req , res) => {
   const listing = await Listing.findById(req.params.pid).populate('user')
   if(!listing){
    res.status(404)
    throw new Error('Product Not Found')
   }
   res.status(200).json(listing)
}


// Get All Product
const getProducts = async(req , res) => {
    const products = await Listing.find()
        if(!products){
            res.status(404)
            throw new Error("Products Not Found")
        }
        res.status(200).json(products)
}

// Add Product
const addProduct = async(req , res) => {
   const {title, description, price, category , itemImage, isAvailable} = req.body
   
     if(!title || !description || !price || !category || !itemImage ){
        res.status(400)
    throw new  Error("Please Fill Details")
     }
      let newProduct = await Listing.create({
      title,
      description,
      price,
    category,
      isAvailable,
      itemImage,
     user: req.user._id || null,
    
   })
      if(!newProduct){
       res.status(400)
       throw new Error('Product Not Add')
      }
      res.status(201).json(newProduct)
}

// Update Product
const updateProduct = async(req , res) => {
    console.log(req.params)
     const updatedListing = await Listing.findByIdAndUpdate(
       req.params.pid, 
       req.body, 
       { new: true }
     ).populate('user')
   
     if (!updatedListing) {
       res.status(404)
       throw new Error('Product Not Found')
     }
   
     res.status(200).json(updatedListing)
}

// Get Product By Category
const getCategory = async(req , res) => {
    try {
    const product = await Listing.find({ category: req.params.category });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products" });
  }
}

// Get My Products
const getMyProduct = async(req , res) => {
     try {
    const product = await Listing.find({ user: req.user._id });

    if (product.length === 0) {
      return res.status(404).json({ message: "No products found for this user" });
    } else {
      return res.status(200).json(product);
    }

  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
}


module.exports = { getProducts, addProduct, updateProduct, getCategory, getMyProduct, getProduct}