"use client";

import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { FiFile } from "react-icons/fi";
export default function AddCategoryPage() {
  const [name, setName] = useState("");
  const [iconAlt, setIconAlt] = useState("");
  const [status, setStatus] = useState(true);
  const [imageIcon, setImageIcon] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      imageIcon,
      iconAlt,
      status,
    };

    console.log("Submitted:", formData);
    // TODO: Send formData to backend (API call)
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
        <div className="w-full p-6">
          <h2 className="text-2xl font-bold mb-4">Add Blog Category</h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-md shadow-md w-full"
          >
            <div className="mb-4 w-full">
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Category Name"
                required
              />
            </div>

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
                  
                  className="hidden"
                />
              </label>
            </div>

            <div className="mb-4 w-full">
              <label className="block text-sm font-semibold mb-1">
                Image ALT
              </label>
              <input
                type="text"
                value={iconAlt}
                onChange={(e) => setIconAlt(e.target.value)}
                placeholder="Image description"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-4 w-full">
              <label className="block text-sm font-semibold mb-1">Status</label>
              <select
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                value={status ? "Active" : "Inactive"}
                onChange={(e) => setStatus(e.target.value === "Active")}
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Add  
            </button>

            <div className="mt-4 text-sm text-gray-500">Webideainfotech</div>
          </form>
        </div>
      </main>
    </div>
  );
}
