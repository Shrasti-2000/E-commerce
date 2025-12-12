// UI Only — Main App component with routing

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductListing from "./pages/ProductListingPage";
import MyOrderPage from "./pages/MyOrderPage";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import AddProductPage from "./pages/AddProductPage";
import Admin from "./pages/Admin";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage/>}></Route>
       <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
         <Route path="/ProductDetails/:pid" element={<ProductDetailsPage/>}></Route>
          <Route path="/listing" element={<ProductListing/>}></Route>
           <Route path="/MyOrder" element={<MyOrderPage/>}></Route>
            <Route path="/cart" element={<CartPage/>}></Route>
            <Route path="/add" element={<AddProductPage/>}></Route>
            <Route path="/admin" element={<Admin/>}/>
     </Routes>
    </Router>
  );
}

export default App;
