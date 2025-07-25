"use client";

import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
export default function AddSitemap() {
  const [formData, setFormData] = useState({
    box: "",
    name: "",
    link: "",
    status: "Active",
  });

  const boxes = [
    { id: 1, name: "Home Sitemap" },
    { id: 2, name: "Service Sitemap" },
    { id: 3, name: "Blog Sitemap" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // Handle API call or validation here
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
        <div className="max-w-4xl w-full mx-auto bg-white p-6 rounded shadow-md mt-4">
          <h2 className="text-2xl font-semibold mb-6">Add sitemap</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            {/* Box dropdown */}
            <div>
              <label className="block text-sm font-medium mb-1">Box</label>
              <select
                name="box"
                value={formData.box}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              >
                <option value="">Select box</option>
                {boxes.map((box) => (
                  <option key={box.id} value={box.name}>
                    {box.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Name input */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter sitemap name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>

            {/* Link input */}
            <div>
              <label className="block text-sm font-medium mb-1">Link</label>
              <input
                type="text"
                name="link"
                placeholder="https://example.com/sitemap"
                value={formData.link}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded"
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
                className="w-full border px-3 py-2 rounded"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
              >
                Create
              </button>
            </div>
          </form>

          <p className="mt-6 text-sm text-gray-500">Webideainfotech</p>
        </div>
      </main>
    </div>
  );
}
