"use client";

import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
const sitemaps = [
  {
    id: 1,
    box: "Home Sitemap",
    name: "Homepage Sitemap",
    link: "https://example.com/home-sitemap",
    status: "Active",
  },
  {
    id: 2,
    box: "Blog Sitemap",
    name: "Blog Articles",
    link: "https://example.com/blog-sitemap",
    status: "Active",
  },
];

export default function SitemapList() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
    <div className="w-full lg:w-64 bg-gray-800 text-white">
      <Sidebar />
    </div>

    <div className="flex-1 overflow-y-auto bg-gray-100">
      <Navbar />
    <div className="max-w-6xl w-full mx-auto bg-white p-6 rounded shadow-md mt-4">
      <h2 className="text-2xl font-semibold mb-6">sitemaps</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
              <th className="px-4 py-2 border">Box</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Link</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {sitemaps.map((item) => (
              <tr key={item.id} className="text-sm text-gray-800">
                <td className="px-4 py-2 border">{item.box}</td>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border text-blue-600 underline">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.link}
                  </a>
                </td>
                <td className="px-4 py-2 border">
                  <span className="text-green-600 font-semibold">{item.status}</span>
                </td>
                <td className="px-4 py-2 border flex items-center gap-3">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FaEye />
                  </button>
                  <button className="text-yellow-600 hover:text-yellow-800">
                    <FaEdit />
                  </button>
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
    </div></div></div>
  );
}
