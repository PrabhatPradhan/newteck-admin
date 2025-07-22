"use client";

import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
export default function AddPlanPage() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        <Navbar />

        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Add plan</h1>

          <form className="bg-white rounded-lg shadow-md p-6 max-w-xl space-y-5">
            {/* Category */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Category
              </label>
              <select className="w-full border border-gray-300 rounded px-4 py-2">
                <option>Select category</option>
                <option>RO</option>
                <option>AC</option>
                <option>TV</option>
              </select>
            </div>

            {/* Type */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Type
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Enter plan type"
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Duration
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2"
                placeholder="Enter duration"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Status
              </label>
              <select className="w-full border border-gray-300 rounded px-4 py-2">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>

          {/* Footer */}
          <div className="text-center text-sm text-gray-500 mt-6">
            info@xyz.in
          </div>
        </div>
      </div>
    </div>
  );
}
