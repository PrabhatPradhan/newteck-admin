"use client";

import { useState } from "react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Navbar from "@/Components/Navbar/Navbar";
import { FiEdit, FiTrash2 } from "react-icons/fi"; // ← Imported Icons
import Link from "next/link";

const brandList = [
  { city: "Kolkata", name: "Voltas Ac Service Center", status: "Active" },
  { city: "Kolkata", name: "Videocon Ac Service Center", status: "Active" },
  { city: "Kolkata", name: "Vestar Ac Service Center", status: "Active" },
  { city: "Kolkata", name: "Toshiba Ac Service Center", status: "Active" },
  { city: "Kolkata", name: "Sharp Ac Service Center", status: "Active" },
  { city: "Kolkata", name: "Sanyo Ac Service Center", status: "Active" },
  { city: "Kolkata", name: "Samsung Ac Service Center", status: "Active" },
  { city: "Kolkata", name: "Panasonic Ac Service Center", status: "Active" },
  { city: "Kolkata", name: "Onida Ac Service Center", status: "Active" },
  { city: "Kolkata", name: "Ogeneral Ac Service Center", status: "Active" },
  { city: "Kolkata", name: "Mitsubishi Ac Service Center", status: "Active" },
  { city: "Kolkata", name: "Mitashi Ac Service Center", status: "Active" },
  { city: "Kolkata", name: "Midea Ac Service Center", status: "Active" },
  { city: "Kolkata", name: "Lloyd Ac Service Center", status: "Active" },
  { city: "Kolkata", name: "LG Ac Service Center", status: "Active" },
  { city: "Kolkata", name: "Kenstar Ac Service Center", status: "Active" },
  { city: "Kolkata", name: "Kelvinator Ac Service Center", status: "Active" },
  { city: "Kolkata", name: "IFB Ac Service Center", status: "Active" },
  { city: "Kolkata", name: "Hitachi Ac Service Center", status: "Active" },
  { city: "Kolkata", name: "Godrej Ac Service Center", status: "Active" },
];

export default function Page() {
  const [brands] = useState(brandList);
  const hendelDelete=(category)=>{
    const confirm=window.confirm(`are you sure`);
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
        <div className="p-6 w-full">
          <h2 className="text-2xl font-bold mb-4">Brands</h2>
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left">City</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {brands.map((brand, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{brand.city}</td>
                    <td className="px-4 py-2">{brand.name}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 text-sm font-semibold rounded ${
                          brand.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {brand.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 flex gap-4 text-lg">
                    
                        
                        
                       <Link href="/edit-brand">
                      <button className="text-blue-600 hover:text-blue-800" title="Edit">
                        <FiEdit />
                      </button>
                      </Link>
                      <button className="text-red-600 hover:text-red-800" title="Delete"
                      onClick={()=> hendelDelete(brand.category)}
                      >
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-xs text-right text-gray-500 p-4">
              Webideainfotech
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
