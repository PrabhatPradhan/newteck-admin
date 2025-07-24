"use client";

import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";

export default function ViewSubcategoryPage() {
  const [subcategories, setSubcategories] = useState([
    {
      category: "ELECTRONICS",
      name: "TELEVISION",
      icon: "/images/tv.png",
      status: "Active",
    },
    {
      category: "ELECTRONICS",
      name: "WASHING MACHINE",
      icon: "/images/washing-machine.png",
      status: "Active",
    },
    {
      category: "HOME APPLIANCES",
      name: "GEYSER",
      icon: "/images/geyser.png",
      status: "Inactive",
    },
    {
      category: "KITCHEN",
      name: "MICROWAVE OVEN",
      icon: "/images/microwave.png",
      status: "Active",
    },
  ]);

 

  const handleDelete = (name) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${name}?`);
    if (confirmDelete) {
      setSubcategories((prev) => prev.filter((item) => item.name !== name));
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
    {/* Sidebar */}
    <div className="w-64 h-screen fixed left-0 top-0 bg-white shadow-md z-10">
      <Sidebar />
    </div>

    {/* Main Content */}
    <main className="flex-1 ml-64 bg-gray-100 overflow-y-auto max-h-screen">
      {/* Navbar */}
      <Navbar />
        <div className="min-h-screen bg-gray-100 flex flex-col">
          {/* Header */}
          <div className="bg-white px-4 py-3 shadow flex items-center gap-3">
            <div className="text-xl">&#9776;</div>
            <h1 className="text-lg font-semibold">Subcategories</h1>
          </div>

          {/* Table */}
          <div className="p-6 overflow-x-auto">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full table-auto text-sm text-left">
                <thead className="bg-gray-200 text-gray-600 uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Icon</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {subcategories.map((item, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3">{item.category}</td>
                      <td className="px-4 py-3">{item.name}</td>
                      <td className="px-4 py-3">
                        <img
                          src={item.icon}
                          alt={`${item.name} icon`}
                          className="w-10 h-10 object-contain"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            item.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 flex gap-3 items-center text-blue-600">
                       <Link href="/edit-Subcategory">
                       <button title="Edit">
                          <FaEdit className="hover:text-blue-800" />
                        </button>
                       </Link>
                        <button onClick={() => handleDelete(item.name)} title="Delete">
                          <FaTrash className="text-red-500 hover:text-red-700" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-white border-t text-center text-gray-600 py-3">
            info@xyz.in
          </footer>
        </div>
      </main>
    </div>
  );
}
