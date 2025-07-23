"use client";

import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";

export default function AddSubcategoryPage() {
  const [formData, setFormData] = useState({
    amc: '',
    category: '',
    banner: null,
    bannerAlt: '',
    description: '',
    metaTitle: '',
    metaKeywords: '',
    metaAuthor: '',
    metaDescription: '',
    canonical: '',
    ogTitle: '',
    ogDescription: '',
    ogURL: '',
    ogImage: null,
    ogType: '',
    ogSiteName: '',
    ogLocale: '',
    articlePublisher: '',
    articleAuthor: '',
    ogUpdatedTime: '',
    ogImageSecureUrl: null,
    ogImageWidth: '',
    ogImageHeight: '',
    ogImageAlt: '',
    ogImageType: '',
    twitterCard: '',
    twitterTitle: '',
    twitterDescription: '',
    twitterImage: null,
    twitterURL: '',
    twitterAccountId: '',
    twitterSite: '',
    twitterCreator: '',
    robots1: '',
    robots2: '',
    script: '',
    status: 'Active',
  });

  const inputStyle =
    "w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400";

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Subcategory Submitted!");
    console.log(formData);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-y-auto bg-gray-100">
        <Navbar />
        <div className="min-h-screen p-6">
          <div className="max-w-5xl mx-auto bg-white p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-6">Add Subcategory</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">AMC</label>
                  <input name="amc" onChange={handleChange} className={inputStyle} />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Category</label>
                  <select name="category" onChange={handleChange} className={inputStyle}>
                    <option>Select category</option>
                    <option>Electronics</option>
                    <option>Kitchen</option>
                    <option>Home Appliances</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-1 font-medium">Banner</label>
                  <input type="file" name="banner" onChange={handleChange} className="w-full" />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Banner ALT</label>
                  <input name="bannerAlt" onChange={handleChange} className={inputStyle} />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">Description</label>
                <textarea name="description" onChange={handleChange} className={inputStyle} />
              </div>

              <h3 className="text-lg font-semibold mt-6">Meta Tags</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "metaTitle",
                  "metaKeywords",
                  "metaAuthor",
                  "metaDescription",
                  "canonical",
                ].map((field) => (
                  <input
                    key={field}
                    name={field}
                    placeholder={field.replace(/([A-Z])/g, " $1")}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                ))}
              </div>

              <h3 className="text-lg font-semibold mt-6">Open Graph Tags</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "ogTitle",
                  "ogDescription",
                  "ogURL",
                  "ogType",
                  "ogSiteName",
                  "ogLocale",
                  "articlePublisher",
                  "articleAuthor",
                  "ogUpdatedTime",
                  "ogImageWidth",
                  "ogImageHeight",
                  "ogImageAlt",
                  "ogImageType",
                ].map((field) => (
                  <input
                    key={field}
                    name={field}
                    placeholder={field.replace(/([A-Z])/g, " $1")}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                ))}
                <input type="file" name="ogImage" onChange={handleChange} className="w-full" />
                <input type="file" name="ogImageSecureUrl" onChange={handleChange} className="w-full" />
              </div>

              <h3 className="text-lg font-semibold mt-6">Twitter Tags</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "twitterCard",
                  "twitterTitle",
                  "twitterDescription",
                  "twitterURL",
                  "twitterAccountId",
                  "twitterSite",
                  "twitterCreator",
                ].map((field) => (
                  <input
                    key={field}
                    name={field}
                    placeholder={field.replace(/([A-Z])/g, " $1")}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                ))}
                <input type="file" name="twitterImage" onChange={handleChange} className="w-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="robots1" placeholder="Robots 1" onChange={handleChange} className={inputStyle} />
                <input name="robots2" placeholder="Robots 2" onChange={handleChange} className={inputStyle} />
              </div>

              <div>
                <label className="block mb-1 font-medium">Script</label>
                <textarea name="script" onChange={handleChange} className={inputStyle} />
              </div>

              <div>
                <label className="block mb-1 font-medium">Status</label>
                <select name="status" onChange={handleChange} className={inputStyle}>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Add Subcategory
                </button>
              </div>
            </form>

            <div className="mt-6 text-center text-gray-500">info@xyz.in</div>
          </div>
        </div>
      </div>
    </div>
  );
}
