'use client';

import { useState } from 'react';
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";

export default function AddSubcategoryPage() {
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    problemPoints: '',
    imageIcon: null,
    imageIconAlt: '',
    image1: null,
    image1Alt: '',
    image2: null,
    image2Alt: '',
    description1: '',
    description2: '',
    banner: null,
    bannerAlt: '',
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

  const inputStyle = "w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400";

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Subcategory Submitted!');
    console.log(formData);
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
        <div className="min-h-screen p-6">
          <div className="max-w-5xl mx-auto bg-white p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-6">Edit Subcategory</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Basic Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">Category</label>
                  <select name="category" onChange={handleChange} className={inputStyle}>
                    <option>Select category</option>
                    <option>Electronics</option>
                    <option>Home</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <input name="name" onChange={handleChange} className={inputStyle} />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-1 font-medium">Problem Points (## separated)</label>
                  <input name="problemPoints" onChange={handleChange} className={inputStyle} />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Image Icon</label>
                  <input type="file" name="imageIcon" onChange={handleChange} className="w-full" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Image Icon ALT</label>
                  <input name="imageIconAlt" onChange={handleChange} className={inputStyle} />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Image 1</label>
                  <input type="file" name="image1" onChange={handleChange} className="w-full" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Image 1 ALT</label>
                  <input name="image1Alt" onChange={handleChange} className={inputStyle} />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Image 2</label>
                  <input type="file" name="image2" onChange={handleChange} className="w-full" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Image 2 ALT</label>
                  <input name="image2Alt" onChange={handleChange} className={inputStyle} />
                </div>
              </div>

              {/* Descriptions */}
              <div>
                <label className="block mb-1 font-medium">Description 1</label>
                <textarea name="description1" onChange={handleChange} className={inputStyle} />
              </div>
              <div>
                <label className="block mb-1 font-medium">Description 2</label>
                <textarea name="description2" onChange={handleChange} className={inputStyle} />
              </div>

              {/* Banner */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">Banner</label>
                  <input type="file" name="banner" onChange={handleChange} className="w-full" />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Banner ALT</label>
                  <input name="bannerAlt" onChange={handleChange} className={inputStyle} />
                </div>
              </div>

              {/* Meta Tags */}
              <h3 className="text-lg font-semibold mt-4">Meta Tags</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["metaTitle", "metaKeywords", "metaAuthor", "metaDescription", "canonical"].map((field) => (
                  <input key={field} name={field} placeholder={field.replace(/([A-Z])/g, ' $1')} onChange={handleChange} className={inputStyle} />
                ))}
              </div>

              {/* Open Graph */}
              <h3 className="text-lg font-semibold mt-4">Open Graph Tags</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="ogTitle" placeholder="OG:Title" onChange={handleChange} className={inputStyle} />
                <input name="ogDescription" placeholder="OG:Description" onChange={handleChange} className={inputStyle} />
                <input name="ogURL" placeholder="OG:URL" onChange={handleChange} className={inputStyle} />
                <input type="file" name="ogImage" onChange={handleChange} className="w-full" />
                <input name="ogType" placeholder="OG:Type" onChange={handleChange} className={inputStyle} />
                <input name="ogSiteName" placeholder="OG:Site Name" onChange={handleChange} className={inputStyle} />
                <input name="ogLocale" placeholder="OG:Locale" onChange={handleChange} className={inputStyle} />
                <input name="articlePublisher" placeholder="Article:Publisher" onChange={handleChange} className={inputStyle} />
                <input name="articleAuthor" placeholder="Article:Author" onChange={handleChange} className={inputStyle} />
                <input name="ogUpdatedTime" placeholder="OG:Updated Time" onChange={handleChange} className={inputStyle} />
                <input type="file" name="ogImageSecureUrl" onChange={handleChange} className="w-full" />
                <input name="ogImageWidth" placeholder="OG:Image Width" onChange={handleChange} className={inputStyle} />
                <input name="ogImageHeight" placeholder="OG:Image Height" onChange={handleChange} className={inputStyle} />
                <input name="ogImageAlt" placeholder="OG:Image Alt" onChange={handleChange} className={inputStyle} />
                <input name="ogImageType" placeholder="OG:Image Type" onChange={handleChange} className={inputStyle} />
              </div>

              {/* Twitter Tags */}
              <h3 className="text-lg font-semibold mt-4">Twitter Tags</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="twitterCard" placeholder="Twitter Card" onChange={handleChange} className={inputStyle} />
                <input name="twitterTitle" placeholder="Twitter Title" onChange={handleChange} className={inputStyle} />
                <input name="twitterDescription" placeholder="Twitter Description" onChange={handleChange} className={inputStyle} />
                <input type="file" name="twitterImage" onChange={handleChange} className="w-full" />
                <input name="twitterURL" placeholder="Twitter URL" onChange={handleChange} className={inputStyle} />
                <input name="twitterAccountId" placeholder="Twitter Account ID" onChange={handleChange} className={inputStyle} />
                <input name="twitterSite" placeholder="Twitter Site" onChange={handleChange} className={inputStyle} />
                <input name="twitterCreator" placeholder="Twitter Creator" onChange={handleChange} className={inputStyle} />
              </div>

              {/* Robots and Script */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="robots1" placeholder="Robots 1" onChange={handleChange} className={inputStyle} />
                <input name="robots2" placeholder="Robots 2" onChange={handleChange} className={inputStyle} />
              </div>
              <div>
                <label className="block mb-1 font-medium">Script</label>
                <textarea name="script" onChange={handleChange} className={inputStyle} />
              </div>

              {/* Status */}
              <div>
                <label className="block mb-1 font-medium">Status</label>
                <select name="status" onChange={handleChange} className={inputStyle}>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="mt-4">
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Add Subcategory
                </button>
              </div>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center text-gray-500">info@xyz.in</div>
          </div>
        </div>
      </main>
    </div>
  );
}
