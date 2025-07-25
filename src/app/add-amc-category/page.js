'use client';

import { useState } from 'react';
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"

export default function AddAmcCategoryPage() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
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
        <div className="p-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Add AMC Category</h2>

            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Category Name"
                />
              </div>

              {/* Image Icon */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Image Icon</label>
                <input
                  type="file"
                  accept="image/*"
                  className="block"
                  onChange={handleImageChange}
                />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="mt-2 w-16 h-16 object-contain border rounded"
                  />
                )}
              </div>

              {/* Image ALT */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Image ALT</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  placeholder="Image ALT text"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Status</label>
                <select className="w-full border rounded-md p-2">
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Footer */}
          <footer className="text-center text-gray-600 mt-6">
            info@xyz.in
          </footer>
        </div>
      </main>
    </div>
  );
}
