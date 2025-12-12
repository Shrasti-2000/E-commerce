import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Menu,
  X,
  Users,
  Package,
  Plus,
  Trash2,
  Edit2,
  Settings
} from "lucide-react";

const API = "/api/admin";

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("users");
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Add Product State
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    itemImage: "",
    stock: "",
    brand: ""
  });

  // Auth token
  const token = localStorage.getItem("token");

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  // Fetch Users + Products
  const fetchData = async () => {
    try {
      const resUsers = await axios.get(`${API}/users`, config);
      const resProducts = await axios.get(`${API}/products`, config);

      setUsers(resUsers.data);
      setProducts(resProducts.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Add Product Handler
  const addProduct = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API}/product`, newProduct, config);
      alert("Product Added Successfully");

      setProducts([res.data, ...products]);

      setNewProduct({
        title: "",
        description: "",
        price: "",
        category: "",
        itemImage: "",
        stock: "",
        brand: ""
      });
    } catch (err) {
      alert("Error Adding Product");
      console.log(err);
    }
  };

  // Delete Product
  const deleteProduct = async (pid) => {
    try {
      await axios.delete(`${API}/product/${pid}`, config);
      setProducts(products.filter((item) => item._id !== pid));
      alert("Product Deleted");
    } catch (err) {
      console.log(err);
    }
  };

  // Delete User
  const deleteUser = async (uid) => {
    try {
      await axios.delete(`${API}/user/${uid}`, config);
      setUsers(users.filter((u) => u._id !== uid));
      alert("User Deleted");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } bg-white shadow-xl p-4 transition-all`}
      >
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="mb-6 p-2 bg-gray-200 rounded-full"
        >
          {sidebarOpen ? <X /> : <Menu />}
        </button>

        {sidebarOpen && (
          <div className="space-y-4">
            <button
              className={`w-full flex items-center gap-3 p-3 rounded-xl ${
                activeTab === "users" ? "bg-black text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveTab("users")}
            >
              <Users /> Users
            </button>

            <button
              className={`w-full flex items-center gap-3 p-3 rounded-xl ${
                activeTab === "products" ? "bg-black text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveTab("products")}
            >
              <Package /> Products
            </button>

            <button
              className={`w-full flex items-center gap-3 p-3 rounded-xl ${
                activeTab === "addproduct"
                  ? "bg-black text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setActiveTab("addproduct")}
            >
              <Plus /> Add Product
            </button>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {loading ? (
          <h2 className="text-xl font-bold">Loading...</h2>
        ) : (
          <>
            {/* Users Tab */}
            {activeTab === "users" && (
  <div>
    <h2 className="text-3xl font-bold mb-6">All Users</h2>

    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <div className="space-y-4">
        {users.map((u) => (
          <div
            key={u._id}
            className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-100 transition-all duration-300 border"
          >
            {/* User Info Section */}
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="w-12 h-12 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-xl font-semibold">
                {u.name?.[0]?.toUpperCase()}
              </div>

              {/* Text Info */}
              <div>
                <p className="text-lg font-bold">{u.name}</p>
                <p className="text-sm text-gray-600">{u.email}</p>

                {/* Role Badge (default user) */}
                <span className="inline-block mt-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                  User
                </span>
              </div>
            </div>

            {/* Actions */}
            <button
              onClick={() => deleteUser(u._id)}
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-red-700 transition-all"
            >
              <Trash2 size={16} /> Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
)}

          {/* Products Tab */}
{activeTab === "products" && (
  <div>
    <h2 className="text-3xl font-bold mb-6">All Products</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <div
          key={p._id}
          className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
        >
          {/* Product Image */}
          <div className="relative">
            <img
              src={p.itemImage}
              alt=""
              className="w-full h-56 object-cover rounded-xl"
            />

            {/* Price Badge */}
            <span className="absolute top-3 left-3 bg-black text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              ₹{p.price}
            </span>
          </div>

          {/* Content */}
          <div className="mt-4">
            <h3 className="text-xl font-bold">{p.title}</h3>

            {/* Category Tag */}
            <span className="inline-block mt-1 bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
              {p.category}
            </span>

            {/* Stock & Brand Info */}
            <div className="mt-3 text-sm text-gray-600">
              <p><strong>Brand:</strong> {p.brand || "N/A"}</p>
              <p><strong>Stock:</strong> {p.stock || "0"}</p>
            </div>

            {/* Actions */}
            <div className="flex justify-between mt-5">
              

              <button
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-red-700 transition-all"
                onClick={() => deleteProduct(p._id)}
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}


            {/* Add Product Tab */}
            {activeTab === "addproduct" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Add Product</h2>

                <form
                  onSubmit={addProduct}
                  className="bg-white p-6 rounded-xl shadow grid grid-cols-1 gap-4"
                >
                  <input
                    type="text"
                    placeholder="Title"
                    className="p-3 border rounded-xl"
                    value={newProduct.title}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, title: e.target.value })
                    }
                  />

                  <textarea
                    placeholder="Description"
                    className="p-3 border rounded-xl"
                    value={newProduct.description}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        description: e.target.value
                      })
                    }
                  />

                  <input
                    type="number"
                    placeholder="Price"
                    className="p-3 border rounded-xl"
                    value={newProduct.price}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, price: e.target.value })
                    }
                  />

                  <input
                    type="text"
                    placeholder="Category"
                    className="p-3 border rounded-xl"
                    value={newProduct.category}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, category: e.target.value })
                    }
                  />

                  <input
                    type="text"
                    placeholder="Image URL"
                    className="p-3 border rounded-xl"
                    value={newProduct.itemImage}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        itemImage: e.target.value
                      })
                    }
                  />

                  <input
                    type="number"
                    placeholder="Stock"
                    className="p-3 border rounded-xl"
                    value={newProduct.stock}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, stock: e.target.value })
                    }
                  />

                  <input
                    type="text"
                    placeholder="Brand"
                    className="p-3 border rounded-xl"
                    value={newProduct.brand}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, brand: e.target.value })
                    }
                  />

                  <button className="bg-black text-white p-3 rounded-xl">
                    Add Product
                  </button>
                </form>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
