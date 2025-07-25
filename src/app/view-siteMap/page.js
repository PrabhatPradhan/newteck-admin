"use client";

import { FaEdit, FaTrash } from "react-icons/fa";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Link from "next/link";

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

  const hendelDelete=(category)=>{
  const confirm=window.confirm(`are you sure `);
  if(confirm){
    console.log(`Delete ${category}`)
  }
 }
export default function SitemapList() {
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
                        <Link href="/edit-sitemap">
                        <button className="text-yellow-600 hover:text-yellow-800">
                          <FaEdit />
                        </button>
                        </Link>
                        
                        <button className="text-red-600 hover:text-red-800"
                        
                        onClick={()=> hendelDelete(item.category)}
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

          <p className="mt-6 text-sm text-gray-500">info@xyz.in</p>
        </div>
      </main>
    </div>
  );
}
