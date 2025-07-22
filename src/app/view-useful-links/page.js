"use client";

import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
const initialLinks = [
  { city: "Tv AMC Plan Kolkata", status: "Active" },
  { city: "Geyser AMC Plan", status: "Active" },
  { city: "Geyser Installation", status: "Active" },
  { city: "AC AMC Plan Kolkata", status: "Active" },
  { city: "Ac Service Center", status: "Active" },
  { city: "Ac Repair Kolkata", status: "Active" },
  { city: "Fridge AMC", status: "Active" },
  { city: "Refrigerator Repair Kolkata", status: "Active" },
];

export default function UsefulLinksPage() {
  const [links] = useState(initialLinks);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
    <div className="w-full lg:w-64 bg-gray-800 text-white">
      <Sidebar />
    </div>

    <div className="flex-1 overflow-y-auto bg-gray-100">
      <Navbar />
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold mb-4">Useful Links</h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full text-left table-auto">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {links.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition duration-150"
              >
                <td className="px-4 py-2">{item.city}</td>
                <td className="px-4 py-2">{item.city}</td>
                <td className="px-4 py-2">
                  <span className="text-sm font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:underline mr-2">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="p-4 text-sm text-gray-500 text-right">info@xyz.in</div>
      </div>
    </div></div></div>
  );
}
