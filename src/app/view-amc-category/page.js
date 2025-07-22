'use client';

import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"

const amcCategories = [
  { name: "RO WATER PURIFIER AMC", status: "Active" },
  { name: "KITCHEN CHIMNEY AMC", status: "Active" },
  { name: "WASHING MACHINE AMC", status: "Active" },
  { name: "MICEOWAVE OVEN AMC", status: "Active" },
  { name: "AIR CONDITIONER AMC", status: "Active" },
  { name: "TELEVISION AMC", status: "Active" },
  { name: "GEYSER AMC", status: "Active" },
  { name: "REFRIGERATOR AMC", status: "Active" },
];

export default function  Page() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 bg-gray-100 overflow-y-auto">
        <Navbar />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">AMC Category</h2>

          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200 bg-white">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="px-4 py-2 font-semibold text-gray-700">Name</th>
                  <th className="px-4 py-2 font-semibold text-gray-700">Icon</th>
                  <th className="px-4 py-2 font-semibold text-gray-700">Status</th>
                  <th className="px-4 py-2 font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {amcCategories.map((cat, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-2 text-gray-800">{cat.name}</td>
                    <td className="px-4 py-2">
                      <div className="w-8 h-8 rounded bg-gray-200" />
                    </td>
                    <td className="px-4 py-2 text-green-600 font-medium">{cat.status}</td>
                    <td className="px-4 py-2 text-blue-500 cursor-pointer">✏️</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <footer className="text-center text-gray-600 mt-6">info@xyz.in</footer>
        </div>
      </div>
    </div>
  );
}
