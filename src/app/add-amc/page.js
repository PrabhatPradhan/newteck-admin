'use client';

import { useState } from 'react';
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
export default function  Page() {
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
    <div className="flex flex-col lg:flex-row h-screen">
        <div className="w-full lg:w-64 bg-gray-800 text-white">
          <Sidebar />
        </div>

        <div className="flex-1 overflow-y-auto bg-gray-100">
          <Navbar />
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">Add Subcategory</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label>Category</label>
              <select name="category" onChange={handleChange} className="input">
                <option>Select category</option>
                <option>Electronics</option>
                <option>Home</option>
              </select>
            </div>
            <div>
              <label>Name</label>
              <input name="name" onChange={handleChange} className="input" />
            </div>
            <div className="md:col-span-2">
              <label>Problem Points (## separated)</label>
              <input
                name="problemPoints"
                onChange={handleChange}
                className="input"
              />
            </div>

            {/* Image Fields */}
            <div>
              <label>Image Icon</label>
              <input type="file" name="imageIcon" onChange={handleChange} />
            </div>
            <div>
              <label>Image Icon ALT</label>
              <input name="imageIconAlt" onChange={handleChange} className="input" />
            </div>
            <div>
              <label>Image 1</label>
              <input type="file" name="image1" onChange={handleChange} />
            </div>
            <div>
              <label>Image 1 ALT</label>
              <input name="image1Alt" onChange={handleChange} className="input" />
            </div>
            <div>
              <label>Image 2</label>
              <input type="file" name="image2" onChange={handleChange} />
            </div>
            <div>
              <label>Image 2 ALT</label>
              <input name="image2Alt" onChange={handleChange} className="input" />
            </div>
          </div>

          {/* Descriptions */}
          <div>
            <label>Description 1</label>
            <textarea name="description1" onChange={handleChange} className="input" />
          </div>
          <div>
            <label>Description 2</label>
            <textarea name="description2" onChange={handleChange} className="input" />
          </div>

          {/* Banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label>Banner</label>
              <input type="file" name="banner" onChange={handleChange} />
            </div>
            <div>
              <label>Banner ALT</label>
              <input name="bannerAlt" onChange={handleChange} className="input" />
            </div>
          </div>

          {/* Meta Tags */}
          <h3 className="text-lg font-semibold mt-4">Meta Tags</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="metaTitle" placeholder="Meta Title" onChange={handleChange} className="input" />
            <input name="metaKeywords" placeholder="Meta Keywords" onChange={handleChange} className="input" />
            <input name="metaAuthor" placeholder="Meta Author" onChange={handleChange} className="input" />
            <input name="metaDescription" placeholder="Meta Description" onChange={handleChange} className="input" />
            <input name="canonical" placeholder="Canonical" onChange={handleChange} className="input" />
          </div>

          {/* Open Graph */}
          <h3 className="text-lg font-semibold mt-4">Open Graph Tags</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="ogTitle" placeholder="OG:Title" onChange={handleChange} className="input" />
            <input name="ogDescription" placeholder="OG:Description" onChange={handleChange} className="input" />
            <input name="ogURL" placeholder="OG:URL" onChange={handleChange} className="input" />
            <input type="file" name="ogImage" onChange={handleChange} />
            <input name="ogType" placeholder="OG:Type" onChange={handleChange} className="input" />
            <input name="ogSiteName" placeholder="OG:Site Name" onChange={handleChange} className="input" />
            <input name="ogLocale" placeholder="OG:Locale" onChange={handleChange} className="input" />
            <input name="articlePublisher" placeholder="Article:Publisher" onChange={handleChange} className="input" />
            <input name="articleAuthor" placeholder="Article:Author" onChange={handleChange} className="input" />
            <input name="ogUpdatedTime" placeholder="OG:Updated Time" onChange={handleChange} className="input" />
            <input type="file" name="ogImageSecureUrl" onChange={handleChange} />
            <input name="ogImageWidth" placeholder="OG:Image Width" onChange={handleChange} className="input" />
            <input name="ogImageHeight" placeholder="OG:Image Height" onChange={handleChange} className="input" />
            <input name="ogImageAlt" placeholder="OG:Image Alt" onChange={handleChange} className="input" />
            <input name="ogImageType" placeholder="OG:Image Type" onChange={handleChange} className="input" />
          </div>

          {/* Twitter Tags */}
          <h3 className="text-lg font-semibold mt-4">Twitter Tags</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="twitterCard" placeholder="Twitter Card" onChange={handleChange} className="input" />
            <input name="twitterTitle" placeholder="Twitter Title" onChange={handleChange} className="input" />
            <input name="twitterDescription" placeholder="Twitter Description" onChange={handleChange} className="input" />
            <input type="file" name="twitterImage" onChange={handleChange} />
            <input name="twitterURL" placeholder="Twitter URL" onChange={handleChange} className="input" />
            <input name="twitterAccountId" placeholder="Twitter Account ID" onChange={handleChange} className="input" />
            <input name="twitterSite" placeholder="Twitter Site" onChange={handleChange} className="input" />
            <input name="twitterCreator" placeholder="Twitter Creator" onChange={handleChange} className="input" />
          </div>

          {/* Robots and Script */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="robots1" placeholder="Robots 1" onChange={handleChange} className="input" />
            <input name="robots2" placeholder="Robots 2" onChange={handleChange} className="input" />
          </div>
          <div>
            <label>Script</label>
            <textarea name="script" onChange={handleChange} className="input" />
          </div>

          {/* Status */}
          <div>
            <label>Status</label>
            <select name="status" onChange={handleChange} className="input">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Submit */}
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Add Subcategory
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-gray-500">info@xyz.in</div>
      </div>
    </div> </div> </div>
  );
}
