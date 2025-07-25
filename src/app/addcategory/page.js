"use client";

import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { FiFile } from "react-icons/fi";
export default function AddCategoryPage() {
  const [formData, setFormData] = useState({
    name: "",
    imageIcon: null,
    imageAlt: "",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send formData to backend (if needed)
    alert("Category added successfully!");
    console.log("Submitted:", formData);
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
        <div className="min-h-screen bg-gray-100 flex flex-col">
          {/* Top Bar */}
          <div className="bg-white shadow px-4 py-3 flex items-center gap-3">
            <div className="text-xl">&#9776;</div>
            <h1 className="text-lg font-semibold">Add category</h1>
          </div>

          {/* Form Content */}
          <div className="flex-1 p-6">
            <div className="max-w-2xl mx-auto bg-white rounded shadow p-6">
              <h2 className="text-2xl font-bold mb-6">Add Category</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required
                  />
                </div>

                {/* Image Icon */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image Icon
                  </label>

                  <label className="flex items-center gap-3 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                    <FiFile className="text-blue-600 text-xl" />
                    <span className="text-gray-600">Choose an image...</span>
                    <input
                      type="file"
                      name="imageIcon"
                      accept="image/*"
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Image ALT */}
                <div>
                  <label className="block font-medium mb-1">Image ALT</label>
                  <input
                    type="text"
                    name="imageAlt"
                    value={formData.imageAlt}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="block font-medium mb-1">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Add Category
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-white border-t text-center text-gray-600 py-3">
            info@xyz.in
          </footer>
        </div>
      </main>
    </div>
  );
}
