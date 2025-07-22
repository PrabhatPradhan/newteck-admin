"use client";

import { useState } from "react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Navbar from "@/Components/Navbar/Navbar";
const initialCities = [
  { name: "Kolkata", status: "Active" },
  { name: "Delhi", status: "Active" },
  { name: "Mumbai", status: "Inactive" },
  { name: "Bangalore", status: "Active" },
  { name: "Chennai", status: "Inactive" },
];

export default function CitiesPage() {
  const [cities] = useState(initialCities);

  return (
    <div className="flex min-h-screen">
    <Sidebar />

    <div className="flex-1 bg-gray-100">
      <Navbar />
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold mb-4">Cities</h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full text-left table-auto">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {cities.map((city, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition duration-150"
              >
                <td className="px-4 py-2">{city.name}</td>
                <td className="px-4 py-2">
                  <span
                    className={`text-sm font-semibold px-2 py-1 rounded ${
                      city.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {city.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:underline mr-2">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="p-4 text-sm text-gray-500 text-right">info@xyz.in</div>
      </div>
    </div> </div> </div>
  );
}
