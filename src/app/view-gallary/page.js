"use client";

import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";

const galleryData = [
  { image: "", youtube: "twXJzEaEai4", status: "Active" },
  { image: "", youtube: "", status: "Active" },
  { image: "", youtube: "", status: "Active" },
  { image: "", youtube: "", status: "Active" },
  { image: "", youtube: "", status: "Active" },
  { image: "", youtube: "", status: "Active" },
  { image: "", youtube: "", status: "Active" },
  { image: "", youtube: "", status: "Active" },
  { image: "", youtube: "", status: "Active" },
];

export default function Page() { // 👈 Fix: 'Page' instead of 'page'
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 h-screen fixed left-0 top-0 bg-white shadow-md z-10">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 bg-gray-100">
        <Navbar />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Gallarys</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                  <th className="py-3 px-4 border-b">Image</th>
                  <th className="py-3 px-4 border-b">YouTube</th>
                  <th className="py-3 px-4 border-b">Status</th>
                  <th className="py-3 px-4 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                {galleryData.map((item, index) => (
                  <tr key={index} className="text-sm text-gray-700">
                    <td className="py-2 px-4 border-b">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt="Gallery"
                          className="h-16 w-16 object-cover rounded"
                        />
                      ) : (
                        <span className="text-gray-400 italic">No image</span>
                      )}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {item.youtube || (
                        <span className="text-gray-400 italic">—</span>
                      )}
                    </td>
                    <td className="py-2 px-4 border-b">
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                        {item.status}
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b">
                      <button className="text-blue-600 hover:underline text-sm">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
