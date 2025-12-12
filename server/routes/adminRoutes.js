const express = require('express')
const { updateUser, getAllUsers, updateProduct, createProduct, removeUser, removeProduct, getAllProducts } = require('../controller/adminController')
const adminProtect = require('../middleware/adminMiddleware')

const router = express.Router()

router.get("/users", adminProtect, getAllUsers)
router.get("/products",adminProtect, getAllProducts)
router.put("/user/:uid", adminProtect, updateUser)
router.put("/product/:pid", adminProtect,  updateProduct)
router.post("/product", adminProtect,  createProduct )
router.delete("/user/:uid", adminProtect , removeUser)
router.delete("/product/:pid", adminProtect,  removeProduct)

module.exports = router