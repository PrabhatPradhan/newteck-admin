"use client";

import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
export default function AddSitemapBox() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Active");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, status });
    // TODO: Submit to backend
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-y-auto bg-gray-100">
        <Navbar />
    <div className="w-full max-w-2xl mx-auto bg-white p-6 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Edit Sitemapbox</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Sitemapbox Name"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      <p className="mt-6 text-sm text-gray-500">info@xyz.in</p>
    </div>  </div>  </div>
  );
}
