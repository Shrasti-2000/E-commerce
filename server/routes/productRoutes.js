const express = require('express')
const {  getProducts, addProduct, updateProduct,  getCategory, getMyProduct, getProduct } = require('../controller/productController')
const protect = require('../middleware/authMiddleware')

const router = express.Router()

router.get("/:pid", getProduct )
router.get("/", getProducts)
router.post("/",protect, addProduct )
router.put("/:pid", protect, updateProduct)
router.get("/category/:category", getCategory)
router.get("/my", protect, getMyProduct )


module.exports = router