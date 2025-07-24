"use client";

import { useState } from 'react';
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";

export default function AddUsefulLinkPage() {
  const [formData, setFormData] = useState({
    category: '',
    city: '',
    name: '',
    url: '',
    title: '',
    points: '',
    logo: null,
    logoAlt: '',
    image1: null,
    image1Alt: '',
    image2: null,
    image2Alt: '',
    description1: '',
    description2: '',
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
    rateTitle: '',
    rateNumber: '',
    rateTitle2: '',
    fiveStarPercent: '',
    fourStarPercent: '',
    threeStarPercent: '',
    twoStarPercent: '',
    oneStarPercent: '',
    status: 'Active'
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
    console.log(formData);
    alert("Useful Link Submitted!");
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto bg-gray-100">
        <Navbar />
        <div className="min-h-screen p-6">
          <div className="max-w-6xl mx-auto bg-white p-6 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-6">Edit Useful Link</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select name="category" onChange={handleChange} className={inputStyle}>
                  <option>Select Category</option>
                  <option>Health</option>
                  <option>Education</option>
                </select>
                <select name="city" onChange={handleChange} className={inputStyle}>
                  <option>Select City</option>
                  <option>Delhi</option>
                  <option>Mumbai</option>
                </select>
                <input name="name" placeholder="Name" onChange={handleChange} className={inputStyle} />
                <input name="url" placeholder="URL" onChange={handleChange} className={inputStyle} />
                <input name="title" placeholder="Title" onChange={handleChange} className={inputStyle} />
                <input name="points" placeholder="Points (## separated)" onChange={handleChange} className={inputStyle} />
                <input type="file" name="logo" onChange={handleChange} className="w-full" />
                <input name="logoAlt" placeholder="Logo ALT" onChange={handleChange} className={inputStyle} />
                <input type="file" name="image1" onChange={handleChange} className="w-full" />
                <input name="image1Alt" placeholder="Image1 ALT" onChange={handleChange} className={inputStyle} />
                <input type="file" name="image2" onChange={handleChange} className="w-full" />
                <input name="image2Alt" placeholder="Image2 ALT" onChange={handleChange} className={inputStyle} />
              </div>
              <textarea name="description1" placeholder="Description 1" onChange={handleChange} className={inputStyle} />
              <textarea name="description2" placeholder="Description 2" onChange={handleChange} className={inputStyle} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="metaTitle" placeholder="Meta Title" onChange={handleChange} className={inputStyle} />
                <input name="metaKeywords" placeholder="Meta Keywords" onChange={handleChange} className={inputStyle} />
                <input name="metaAuthor" placeholder="Meta Author" onChange={handleChange} className={inputStyle} />
                <input name="metaDescription" placeholder="Meta Description" onChange={handleChange} className={inputStyle} />
                <input name="canonical" placeholder="Canonical" onChange={handleChange} className={inputStyle} />
              </div>
              <h3 className="text-lg font-semibold mt-4">Open Graph & Twitter Tags</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="ogTitle" placeholder="OG:Title" onChange={handleChange} className={inputStyle} />
                <input name="ogDescription" placeholder="OG:Description" onChange={handleChange} className={inputStyle} />
                <input name="ogURL" placeholder="OG:URL" onChange={handleChange} className={inputStyle} />
                <input type="file" name="ogImage" onChange={handleChange} className="w-full" />
                <input name="ogType" placeholder="OG:TYPE" onChange={handleChange} className={inputStyle} />
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
                <input name="twitterCard" placeholder="Twitter Card" onChange={handleChange} className={inputStyle} />
                <input name="twitterTitle" placeholder="Twitter Title" onChange={handleChange} className={inputStyle} />
                <input name="twitterDescription" placeholder="Twitter Description" onChange={handleChange} className={inputStyle} />
                <input type="file" name="twitterImage" onChange={handleChange} className="w-full" />
                <input name="twitterURL" placeholder="Twitter URL" onChange={handleChange} className={inputStyle} />
                <input name="twitterAccountId" placeholder="Twitter Account ID" onChange={handleChange} className={inputStyle} />
                <input name="twitterSite" placeholder="Twitter Site" onChange={handleChange} className={inputStyle} />
                <input name="twitterCreator" placeholder="Twitter Creator" onChange={handleChange} className={inputStyle} />
              </div>
              <textarea name="script" placeholder="Script" onChange={handleChange} className={inputStyle} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="robots1" placeholder="Robots 1" onChange={handleChange} className={inputStyle} />
                <input name="robots2" placeholder="Robots 2" onChange={handleChange} className={inputStyle} />
              </div>
              <h3 className="text-lg font-semibold mt-4">Ratings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="rateTitle" placeholder="Rate Title" onChange={handleChange} className={inputStyle} />
                <input name="rateNumber" placeholder="Rate Number" onChange={handleChange} className={inputStyle} />
                <input name="rateTitle2" placeholder="Rate Title 2" onChange={handleChange} className={inputStyle} />
                <input name="fiveStarPercent" placeholder="Five Star %" onChange={handleChange} className={inputStyle} />
                <input name="fourStarPercent" placeholder="Four Star %" onChange={handleChange} className={inputStyle} />
                <input name="threeStarPercent" placeholder="Three Star %" onChange={handleChange} className={inputStyle} />
                <input name="twoStarPercent" placeholder="Two Star %" onChange={handleChange} className={inputStyle} />
                <input name="oneStarPercent" placeholder="One Star %" onChange={handleChange} className={inputStyle} />
              </div>
              <select name="status" onChange={handleChange} className={inputStyle}>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Submit
              </button>
            </form>
            <div className="mt-6 text-center text-gray-500">info@xyz.in</div>
          </div>
        </div>
      </div>
    </div>
  );
}