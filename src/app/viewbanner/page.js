"use client";

import { FaEdit } from "react-icons/fa";
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
import Link from "next/link";
export default function BannersPage() {
  const banners = [
    {
      id: 1,
      image: "/banner1.png", // Place these in /public
      page: "feedback",
      status: "Active",
    },
    {
      id: 2,
      image: "/banner2.png",
      page: "contact",
      status: "Active",
    },
  ];

  

  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen">
        <div className="w-full lg:w-64 bg-gray-800 text-white">
          <Sidebar />
        </div>

        <div className="flex-1 overflow-y-auto bg-gray-100">
          <Navbar />

          <div className="h-screen flex flex-col">
            {/* Topbar */}
            
            {/* Table Section */}
            <div className="flex-1 p-4 bg-gray-100 overflow-auto">
              <div className="bg-white rounded shadow overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="text-left p-3">Image</th>
                      <th className="text-left p-3">Page</th>
                      <th className="text-left p-3">Status</th>
                      <th className="text-left p-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {banners.map((banner) => (
                      <tr key={banner.id} className="border-t">
                        <td className="p-3">
                          <img
                            src={banner.image}
                            alt="Banner"
                            className="w-40 h-auto object-cover rounded"
                          />
                        </td>
                        <td className="p-3">{banner.page}</td>
                        <td className="p-3">{banner.status}</td>
                        <td className="p-3">
                         <Link href="/editbanner">
                         <button
                             
                            className="bg-cyan-600 hover:bg-cyan-700 text-white p-2 rounded"
                          >
                            <FaEdit />
                          </button>
                         </Link>
                        </td>
                      </tr>
                    ))}
                    {banners.length === 0 && (
                      <tr>
                        <td
                          colSpan="4"
                          className="text-center py-4 text-gray-500"
                        >
                          No banners found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
