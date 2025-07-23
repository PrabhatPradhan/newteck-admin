"use client";

import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"

export default function AddGallery() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        <Navbar />
        <div className="p-6 w-full">
          <h1 className="text-3xl font-bold mb-6">Add Gallery</h1>

          <form className="bg-white shadow-md rounded-lg p-6 w-full">
            {/* Image Upload */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image (Select Image If Image)
              </label>
              <input
                type="file"
                className="block w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-md cursor-pointer"
              />
            </div>

            {/* Image ALT */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image ALT
              </label>
              <input
                type="text"
                placeholder="Enter ALT text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* YouTube ID */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                YouTube ID
              </label>
              <input
                type="text"
                placeholder="Enter YouTube ID (if any)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Status */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 "
            >
              Submit
            </button>
          </form>

          {/* Footer Info */}
          <p className="text-center text-sm text-gray-500 mt-6">info@xyz.in</p>
        </div>
      </div>
    </div>
  );
}
