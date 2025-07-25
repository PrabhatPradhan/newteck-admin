"use client";

import { useState } from "react";
import { FaEdit, FaTrash, FaWineBottle } from "react-icons/fa";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Link from "next/link";

const initialLocalities = [
  { city: "Kolkata", name: "Salt Lake", status: "Active" },
  { city: "Delhi", name: "Connaught Place", status: "Active" },
  { city: "Mumbai", name: "Andheri", status: "Inactive" },
  { city: "Bangalore", name: "Whitefield", status: "Active" },
  { city: "Chennai", name: "T. Nagar", status: "Active" },
];

export default function Page() {
  const [localitys] = useState(initialLocalities);
  const hendelDelete=(category)=>{
    const confirm=window.confirm(`are you sure `);
    if(confirm){
      console.log(`Delete ${category}`)
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
        <div className="w-full p-6">
          <h2 className="text-2xl font-bold mb-4">Localitys</h2>

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
                {localitys.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition duration-150"
                  >
                    <td className="px-4 py-2">{item.city}</td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`text-sm font-semibold px-2 py-1 rounded ${
                          item.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 flex gap-3">
                      <Link href="/edit-locality">
                      <button className="text-blue-600 hover:text-blue-800">
                        <FaEdit />
                      </button>
                      </Link>
                      <button className="text-red-600 hover:text-red-800"  
                      onClick={()=> hendelDelete(item.category)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="p-4 text-sm text-gray-500 text-right">
              info@xyz.in
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
