"use client";
import { FaEdit, FaTrash } from "react-icons/fa";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Link from "next/link";

export default function CategoryList() {
  const categories = [
    {
      name: "REFRIGERATOR",
      image: "", // Add image URL if available
      status: "Active",
    },
    // Add more categories as needed
  ];

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-y-auto bg-gray-100">
        <Navbar />
        <div className="w-full p-6">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
              <thead className="bg-gray-100 text-gray-700 text-sm">
                <tr>
                  <th className="text-left px-4 py-2 border">Name</th>
                  <th className="text-left px-4 py-2 border">Image</th>
                  <th className="text-left px-4 py-2 border">Status</th>
                  <th className="text-left px-4 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat, index) => (
                  <tr key={index} className="text-sm text-gray-800">
                    <td className="px-4 py-2 border">{cat.name}</td>
                    <td className="px-4 py-2 border">
                      {cat.image ? (
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="w-10 h-10 object-cover"
                        />
                      ) : (
                        <span className="text-gray-400 italic">No image</span>
                      )}
                    </td>
                    <td className="px-4 py-2 border">{cat.status}</td>
                    <td className="px-4 py-2 border space-x-3">
                      <Link href="/edit-blog-catrgory">
                      <button className="text-blue-600 hover:text-blue-800">
                        <FaEdit className="inline-block mr-1" />
                      </button>
                      </Link>
                      
                      <button className="text-red-600 hover:text-red-800">
                        <FaTrash className="inline-block" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 text-sm text-gray-500">info@xyz.in</div>
        </div>
      </div>
    </div>
  );
}
