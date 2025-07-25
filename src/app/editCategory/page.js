"use client";

import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
export default function EditCategoryPage() {
  const [formData, setFormData] = useState({
    name: "CAR REPAIR",
    image: null,
    imageAlt: "",
    status: "Inactive",
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      setFormData({ ...formData, image: file });

      if (file) {
        setImagePreview(URL.createObjectURL(file));
      } else {
        setImagePreview(null);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit to backend or API
  };

  return (
    <div className="flex h-screen overflow-hidden">
  {/* Sidebar */}
  <div className="fixed md:static top-0 left-0 z-40 h-screen w-1">
    <Sidebar />
  </div>

  {/* Main Content */}
  <main className="flex-1 bg-gray-100 overflow-y-auto max-h-screen md:ml-64">
    {/* Navbar */}
    <Navbar />
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow w-full max-w-3xl mx-auto mt-10 px-4">
        <div className="bg-white shadow-md rounded-lg p-6 w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Edit Category</h2>
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            {/* Name */}
            <div className="w-full">
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter Category Name"
              />
            </div>

            {/* Image Upload */}
            <div className="w-full">
              <label className="block font-semibold mb-1">Image Icon</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-2 h-32 object-contain border rounded"
                />
              )}
            </div>

            {/* Image ALT */}
            <div className="w-full">
              <label className="block font-semibold mb-1">Image ALT</label>
              <input
                type="text"
                name="imageAlt"
                value={formData.imageAlt}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Describe the icon"
              />
            </div>

            {/* Status */}
            <div className="w-full">
              <label className="block font-semibold mb-1">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Save Category
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 text-gray-500 text-sm">
        info@xyz.in
      </footer>
    </div></main></div>
  );
}
