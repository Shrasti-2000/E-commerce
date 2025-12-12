const express = require('express');
const { createOrder, getOrderById, getMyOrders, cancelOrder } = require('../controller/orderController');
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createOrder);

// Route to get logged-in user's orders
router.get("/myorders", protect, getMyOrders);

// Route to get single order by ID
router.get("/:oid", protect, getOrderById);

// Route to cancel order
router.put("/:oid/cancel", protect, cancelOrder);

module.exports = router;
