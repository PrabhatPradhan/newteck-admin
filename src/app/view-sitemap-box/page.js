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

  const hendelDelete=(category)=>{
    const confirm=window.confirm(`are you sure `);
    if(category){
      console.log(`Delete ${confirm}`);
    }
  };

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
          </div>

          <p className="mt-6 text-sm text-gray-500">info@xyz.in</p>
        </div>
      </main>
    </div>
  );
}
