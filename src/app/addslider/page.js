"use client";

import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { FiFile } from "react-icons/fi";
export default function AddSliderPage() {
  const [formData, setFormData] = useState({
    heading: "",
    description: "",
    image: null,
    imageAlt: "",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted");
    console.log(formData);
    // Submit logic here
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
        <div className="min-h-screen bg-gray-100 px-6 py-4">
          <div className="bg-white p-6 rounded shadow w-full">
            <h2 className="text-2xl font-bold mb-6">Add Slider</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Heading */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Heading
                </label>
                <input
                  type="text"
                  name="heading"
                  value={formData.heading}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  rows={3}
                  required
                ></textarea>
              </div>

              {/* Image */}
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
                <label className="block text-sm font-medium mb-1">
                  Image ALT
                </label>
                <input
                  type="text"
                  name="imageAlt"
                  value={formData.imageAlt}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                  required
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Add Slider
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
