const express = require('express')
const protect = require("../middleware/authMiddleware")
const { addToCart, removeCart, getCart, updateCart } = require('../controller/cartController')

const router = express.Router()

router.get("/", protect, getCart)
router.post("/", protect, addToCart)
router.put("/", protect, updateCart)
router.delete("/", protect, removeCart)





module.exports = router