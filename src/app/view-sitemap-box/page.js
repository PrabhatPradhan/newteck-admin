"use client";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";

export default function SitemapboxList() {
  const sitemapboxes = [
    {
      name: "Home Sitemap",
      status: "Active",
    },
    {
      name: "Service Sitemap",
      status: "Active",
    },
    {
      name: "Blog Sitemap",
      status: "Inactive",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-y-auto bg-gray-100">
        <Navbar />
        <div className="w-full max-w-5xl mx-auto bg-white p-6 shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-4">Sitemap Boxes</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left border-b">Name</th>
                  <th className="px-4 py-2 text-left border-b">Status</th>
                  <th className="px-4 py-2 text-left border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                {sitemapboxes.map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">
                      <span
                        className={`px-2 py-1 text-sm rounded-full ${
                          item.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 flex items-center gap-4">
                      <Link href="/edit-Sitemapbox">
                      <button className="text-blue-600 hover:text-blue-800">
                        <FaEdit />
                      </button>
                      </Link>
                     
                      <button className="text-red-600 hover:text-red-800">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-gray-500">info@xyz.in</p>
        </div>
      </div>
    </div>
  );
}
