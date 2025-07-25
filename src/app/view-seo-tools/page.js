"use client";

import React from "react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Navbar from "@/Components/Navbar/Navbar";
import { FaEdit, FaTrash } from "react-icons/fa"; // 👈 Import icons
import Link from "next/link";

export default function ViewSeo() {
  const hendelDelete=(category)=>{
    const confirm=window.confirm(`are you sure you want to delete`);
    if(confirm){
      console.log(`delete ${category}`)
    }
  }
  const seoPages = [
    "About",
    "AMC",
    "Contact",
    "Appointment",
    "PhotoGallary",
    "VideoGallary",
    "Feedback",
    "faq",
    "blog-articles",
    "Site map",
    "Home",
    "privacy-policy",
  ];

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
          <h1 className="text-3xl font-bold mb-6">View SEO</h1>

          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Page
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {seoPages.map((page, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-gray-800">{page}</td>
                    <td className="px-6 py-4 flex gap-4 items-center">
                    <Link href="/editbanner">
                       <button
                          className="text-blue-600 hover:text-blue-800"
                          title="Edit"
                        >
                          <FaEdit />
                        </button>
                       </Link>
                      <button className="text-red-600 hover:text-red-800"
                      onClick={ ()=> hendelDelete(page.category)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            info@xyz.in
          </p>
        </div>
      </main>
    </div>
  );
}
