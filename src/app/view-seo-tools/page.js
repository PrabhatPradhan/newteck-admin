"use client";

import React from "react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Navbar from "@/Components/Navbar/Navbar";

export default function ViewSeo() {
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
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        <Navbar />
        <div className="p-6 w-full">
          <h1 className="text-3xl font-bold mb-6">View SEO</h1>

          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Page</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {seoPages.map((page, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm text-gray-800">{page}</td>
                    <td className="px-6 py-4">
                      <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">info@xyz.in</p>
        </div>
      </div>
    </div>
  );
}
