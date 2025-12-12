const Order = require("../models/orderModel")
const Cart = require("../models/cartModel")

// get Order By Id
const getOrderById = async(req , res) => {
   const order = await Order.findById(req.params.oid).populate("user", "name email");
  if (order) res.json(order);
  else res.status(404).json({ message: "Order not found" });
}


// Order Product
const createOrder = async (req, res) => {
  try {
    const userId = req.user._id;

    // Required fields from frontend
    const { shippingAddress, paymentMethod } = req.body;

    if (!shippingAddress || !paymentMethod) {
      return res.status(400).json({ message: "Shipping address & payment method are required" });
    }

    // Find cart of logged-in user
    const cart = await Cart.findOne({ user: userId }).populate("products.product");

    if (!cart || cart.products.length === 0) {
      return res.status(400).json({ message: "Cart is empty!" });
    }

    // Prepare products for order
    const products = cart.products.map(item => ({
      product: item.product._id,
      qty: item.qty
    }));

    // Calculate items price
    const itemsPrice = cart.products.reduce((acc, item) => {
      const price = item.product.price || 0;
      return acc + price * item.qty;
    }, 0);

    const shippingPrice = itemsPrice > 500 ? 0 : 40; // Example rule
    const totalPrice = itemsPrice + shippingPrice;

    // Save order
    const newOrder = await Order.create({
      user: userId,
      products,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice,
    });

    // Clear user cart after order placed
    await Cart.findOneAndUpdate(
      { user: userId },
      { $set: { products: [] } }
    );

    res.status(201).json(newOrder);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};



// Get My Orders For Logged in User
const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
      isCancelled: false     // 👈 IMPORTANT FILTER
    });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


// Cancel Order
const cancelOrder = async (req, res) => {
  const order = await Order.findById(req.params.oid);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  order.isCancelled = true;
  await order.save();

  res.json({ message: "Order cancelled successfully" });
};





module.exports = {getOrderById, createOrder, getMyOrders, cancelOrder}