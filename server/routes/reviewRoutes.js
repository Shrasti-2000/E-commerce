const express = require('express')
const { addReview, getReview } = require('../controller/reviewController')
const protect = require("../middleware/authMiddleware")

const router = express.Router()

router.post("/:pid", protect, addReview)
router.get("/:pid", protect,  getReview)


module.exports = router