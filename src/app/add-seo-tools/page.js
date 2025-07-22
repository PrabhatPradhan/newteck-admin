"use client";

import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
export default function  Page() {
  const [formData, setFormData] = useState({
    page: "",
    title: "",
    metaDescription: "",
    metaAuthor: "",
    metaKeyword: "",
    canonical: "",
    ogTitle: "",
    ogDescription: "",
    ogUrl: "",
    ogType: "",
    ogSiteName: "",
    ogLocale: "",
    articlePublisher: "",
    articleAuthor: "",
    ogUpdatedTime: "",
    ogImageWidth: "",
    ogImageHeight: "",
    ogImageAlt: "",
    ogImageType: "",
    twitterCard: "",
    twitterTitle: "",
    twitterDescription: "",
    twitterUrl: "",
    twitterAccountId: "",
    twitterSite: "",
    twitterCreator: "",
    robots1: "",
    robots2: "",
    script: "",
    header: "",
    footer: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 h-screen fixed left-0 top-0 bg-white shadow-md z-10">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 bg-gray-100">
        <Navbar />

    <div className="max-w-6xl mx-auto p-6 bg-white shadow rounded-lg mt-6 mb-10">
      <h2 className="text-2xl font-bold mb-6">Add SEO</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Page Selector */}
        <div>
          <label className="block mb-1 font-semibold">Page</label>
          <select
            name="page"
            value={formData.page}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded"
          >
            <option value="">Select Page</option>
            <option value="home">Home</option>
            <option value="about">About</option>
            <option value="contact">Contact</option>
            {/* Add more as needed */}
          </select>
        </div>

        {/* Text Inputs */}
        {[
          ["Title", "title"],
          ["Meta Description", "metaDescription"],
          ["Meta Author", "metaAuthor"],
          ["Meta Keyword", "metaKeyword"],
          ["Canonical", "canonical"],
          ["OG:Title", "ogTitle"],
          ["OG:Description", "ogDescription"],
          ["OG:URL", "ogUrl"],
          ["OG:TYPE", "ogType"],
          ["OG:Site Name", "ogSiteName"],
          ["OG:Locale", "ogLocale"],
          ["Article:Publisher", "articlePublisher"],
          ["Article:Author", "articleAuthor"],
          ["OG:Updated Time", "ogUpdatedTime"],
          ["OG:Image Width", "ogImageWidth"],
          ["OG:Image Height", "ogImageHeight"],
          ["OG:Image Alt", "ogImageAlt"],
          ["OG:Image Type", "ogImageType"],
          ["Twitter Card", "twitterCard"],
          ["Twitter Title", "twitterTitle"],
          ["Twitter Description", "twitterDescription"],
          ["Twitter URL", "twitterUrl"],
          ["Twitter Account ID", "twitterAccountId"],
          ["Twitter Site", "twitterSite"],
          ["Twitter Creator", "twitterCreator"],
          ["Robots 1", "robots1"],
          ["Robots 2", "robots2"],
          ["Script", "script"],
          ["Header", "header"],
          ["Footer", "footer"],
        ].map(([label, name]) => (
          <div key={name}>
            <label className="block mb-1 font-semibold">{label}</label>
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>
        ))}

        {/* File Inputs */}
        <div>
          <label className="block mb-1 font-semibold">OG:Image</label>
          <input
            type="file"
            name="ogImage"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">OG:Image SecureUrl</label>
          <input
            type="file"
            name="ogImageSecureUrl"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Twitter Image</label>
          <input
            type="file"
            name="twitterImage"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        {/* Email Display at Bottom (optional info) */}
        <div className="md:col-span-2 mt-4">
          <p className="text-sm text-gray-500">Contact: <a href="mailto:info@xyz.in" className="text-blue-600">info@xyz.in</a></p>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
}
