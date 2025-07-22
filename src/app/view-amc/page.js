'use client';

import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
const amcList = [
  { category: "RO Water Purifier", status: "Active" },
  { category: "Kitchen Chimney", status: "Active" },
  { category: "Washing Machine", status: "Active" },
  { category: "Microwave Oven", status: "Active" },
  { category: "Air Conditioner", status: "Active" },
  { category: "Television", status: "Active" },
  { category: "Geyser", status: "Active" },
  { category: "Refrigerator", status: "Active" },
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
          <h2 className="text-2xl font-semibold mb-4">AMCs</h2>

          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200 bg-white">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="px-4 py-2 font-semibold text-gray-700">Category</th>
                  <th className="px-4 py-2 font-semibold text-gray-700">Status</th>
                  <th className="px-4 py-2 font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {amcList.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-gray-800">{item.category}</td>
                    <td className="px-4 py-2 text-green-600 font-medium">{item.status}</td>
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
