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
     <div className="flex h-screen overflow-hidden">
  {/* Sidebar */}
  <div className="fixed md:static top-0 left-0 z-40 h-screen w-1">
    <Sidebar />
  </div>

  {/* Main Content */}
  <main className="flex-1 bg-gray-100 overflow-y-auto max-h-screen md:ml-64">
    {/* Navbar */}
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
        </main>
      </div>
    </>
  );
}
