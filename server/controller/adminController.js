const User = require("../models/userModel")
const Listing = require("../models/productModel")

// Get All Users
const getAllUsers = async(req , res) => {
    
    const users = await User.find()
    if(!users){
        res.status(404)
        throw new Error("Users Not Found")
    }
    res.status(200).json(users)
}
// Get All Product
const getAllProducts = async(req , res) => {
    const products = await Listing.find()
    if(!products){
        res.status(404)
        throw new Error("Products Not Found")
    }
    res.status(200).json(products)
}



// Update User
const updateUser = async(req , res) => {
     const updatedUser = await User.findByIdAndUpdate(req.params.uid, req.body, {new : true})
     if(!updatedUser){
        res.status(400)
        throw new Error('User Not Updated')
     }
res.status(200).json(updatedUser)
}

// Update Product
const updateProduct = async (req, res) => {
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


// Create Product
const createProduct = async (req, res) => {
   try {
     const { title, description, price, category, itemImage, stock, brand } = req.body;
 
     if (!title || !description || !price || !category || !itemImage) {
       return res.status(400).json({ message: "Please fill all required fields" });
     }
 
     const newProduct = await Listing.create({
       title,
       description,
       price,
       category,
       itemImage,
       stock,
       brand,
       user: req.user._id
     });
 
     res.status(201).json(newProduct);
 
   } catch (error) {
     res.status(500).json({ message: "Internal Error", error });
   }
 };
 

// Remove user
const removeUser = async(req , res) => {
      const user = await User.findById(req.params.uid)

   if(!user){
      res.status(400)
      throw new Error('User Not Found')
   } else {
      await user.deleteOne()
      res.json({ msg: "User Deleted" })
   }
}

// Remove Product
const removeProduct = async(req , res) => {
   const product = await Listing.findById(req.params.pid)

   if(!product){
      res.status(400)
      throw new Error('Product Not Found')
   } else {
      await product.deleteOne()
      res.json({ msg: "Product Deleted" })
   }
}


module.exports = {getAllUsers, getAllProducts, updateUser, updateProduct, createProduct, removeUser, removeProduct}