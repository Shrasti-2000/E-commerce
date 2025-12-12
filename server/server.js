const express = require('express')
require('dotenv').config()
const path = require('path')
const colors = require('colors')
const connectDB = require('./config/dbConfig')
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')


const PORT =process.env.PORT || 5000
const app = express()

// DB Connection
connectDB()
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
// Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



// Default Route
if (process.env.NODE_ENV === "production") {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "/client/dist")));

    app.get("/", (req, res) =>
        res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
    );
} else {
    app.get("/", (req, res) => {
        res.send("API is running... (development mode)");
    });
}




// Auth Routes
app.use("/api/auth", require("./routes/authRoutes"))

// // Product Routes
app.use("/api/product", require("./routes/productRoutes"))

// // Review Routes 
app.use("/api/review", require("./routes/reviewRoutes"))

// Cart Routes
app.use("/api/cart", require("./routes/cartRoutes"))


// Order Routes
app.use("/api/order", require("./routes/orderRoutes"))


// Admin Routes
app.use("/api/admin", require("./routes/adminRoutes"))




// Error  Handler
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT PORT : ${PORT}`.bgMagenta.white)
})