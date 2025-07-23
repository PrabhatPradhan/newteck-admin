"use client";

import { FaEdit, FaTrash } from "react-icons/fa";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";

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
          <h2 className="text-2xl font-semibold mb-6">Sitemaps</h2>

          <div className="overflow-x-auto">
            <table className="table-fixed min-w-full border border-gray-200 text-sm text-center">
              <thead>
                <tr className="bg-gray-100 text-gray-700 font-semibold">
                  <th className="px-4 py-2 border w-1/6">Box</th>
                  <th className="px-4 py-2 border w-1/6">Name</th>
                  <th className="px-4 py-2 border w-2/6">Link</th>
                  <th className="px-4 py-2 border w-1/6">Status</th>
                  <th className="px-4 py-2 border w-1/6">Action</th>
                </tr>
              </thead>
              <tbody>
                {sitemaps.map((item) => (
                  <tr key={item.id} className="text-gray-800">
                    <td className="px-4 py-2 border">{item.box}</td>
                    <td className="px-4 py-2 border">{item.name}</td>
                    <td className="px-4 py-2 border">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {item.link}
                      </a>
                    </td>
                    <td className="px-4 py-2 border">
                      <span className="text-green-600 font-medium">{item.status}</span>
                    </td>
                    <td className="px-4 py-2 border">
                      <div className="flex items-center justify-center gap-4">
                        <button className="text-yellow-600 hover:text-yellow-800">
                          <FaEdit />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <FaTrash />
                        </button>
                      </div>
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
