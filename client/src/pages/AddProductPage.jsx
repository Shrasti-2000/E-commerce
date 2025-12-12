import React, { useState } from "react";
import axios from "axios";
import { Search, User, ShoppingCart, Menu, Upload, Image, X } from "lucide-react";
import { useSelector } from "react-redux";

const AddProductPage = () => {
  const { user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    brand: "",
    tags: "",
  });

  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // --------------------------
  // 📸 IMAGE HANDLING
  // --------------------------
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    setImages([...images, ...files]);

    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreview([...imagePreview, ...previews]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
    setImagePreview(imagePreview.filter((_, i) => i !== index));
  };

  // --------------------------
  // 🚀 SUBMIT PRODUCT
  // --------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!images.length) return alert("Please upload at least one image!");

    try {
      const data = new FormData();

      for (let key in formData) {
        data.append(key, formData[key]);
      }

      images.forEach((img) => data.append("images", img));

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const res = await axios.post(
        "http://localhost:8000/api/admin/product",
        data,
        config
      );

      alert("Product added successfully!");

      // RESET FORM
      setFormData({
        title: "",
        description: "",
        price: "",
        category: "",
        stock: "",
        brand: "",
        tags: "",
      });

      setImages([]);
      setImagePreview([]);

      console.log("Product Added:", res.data);
    } catch (error) {
      console.log("Add Product Error:", error);
      alert("Error adding product");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Add New Product</h2>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md space-y-6">

          {/* TITLE */}
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Product Title"
            className="w-full border px-4 py-3 rounded-xl"
          />

          {/* DESCRIPTION */}
          <textarea
            rows="4"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Product Description"
            className="w-full border px-4 py-3 rounded-xl"
          ></textarea>

          {/* PRICE + CATEGORY */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className="border px-4 py-3 rounded-xl"
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border px-4 py-3 rounded-xl"
            >
              <option>Select Category</option>
              <option>Electronics</option>
              <option>Clothes</option>
              <option>Phones</option>
              <option>Shoes</option>
              <option>Books</option>
            </select>
          </div>

          {/* STOCK & BRAND */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              placeholder="Stock Qty"
              className="border px-4 py-3 rounded-xl"
            />

            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Brand"
              className="border px-4 py-3 rounded-xl"
            />
          </div>

          {/* TAGS */}
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Tags (comma separated)"
            className="w-full border px-4 py-3 rounded-xl"
          />

          {/* IMAGE UPLOAD */}
          <div>
            <label className="font-semibold block mb-1">Product Images</label>

            <input
              type="file"
              multiple
              onChange={handleImageUpload}
              className="mb-4"
            />

            <div className="grid grid-cols-3 gap-4">
              {imagePreview.map((img, i) => (
                <div key={i} className="relative group">
                  <img
                    src={img}
                    alt="preview"
                    className="h-28 w-full object-cover rounded-lg"
                  />
                  <button
                    onClick={() => removeImage(i)}
                    className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-3 rounded-xl text-white font-bold">
            Add Product
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
