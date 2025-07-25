"use client";

import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; // ✅ Import icons
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Link from "next/link";

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

export default function Page() {
  const hendelDelete=(category)=>{
    const confirm=window.confirm(`are you sure you want to delete`);
    if(confirm){
      console.log(`delete ${category}`)
    }
  }
  return (
    <div className="flex h-screen overflow-hidden">
  {/* Sidebar */}
  <div className="fixed md:static top-0 left-0 z-40 h-screen w-1">
    <Sidebar />
  </div>

  {/* Main Content */}
  <main className="flex-1 bg-gray-100 overflow-y-auto max-h-screen md:ml-64">
    {/* Navbar */}
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
                      <div className="flex items-center gap-3">
                      <Link href="/edit-gallary">
                       <button
                          className="text-blue-600 hover:text-blue-800"
                          title="Edit"
                        >
                          <FaEdit />
                        </button>
                       </Link>
                        <button className="text-red-600 hover:text-red-800 text-sm"
                        onClick={()=> hendelDelete(item.ccategory)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
