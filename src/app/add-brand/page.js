"use client";

import React from "react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Navbar from "@/Components/Navbar/Navbar";

export default function AddBrand() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <Navbar />
        <div className="p-6 w-full max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Add Brand</h1>

          <form className="bg-white p-6 rounded-lg shadow space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold">Category</label>
                <select className="w-full border rounded p-2">
                  <option>Select category</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold">City</label>
                <select className="w-full border rounded p-2">
                  <option>Select City</option>
                </select>
              </div>
              <input type="text" placeholder="Name" className="col-span-1 md:col-span-2 border p-2 rounded" />
              <input type="text" placeholder="URL" className="col-span-1 md:col-span-2 border p-2 rounded" />
              <input type="text" placeholder="Title" className="col-span-1 md:col-span-2 border p-2 rounded" />
              <input type="text" placeholder="Points (## separated)" className="col-span-1 md:col-span-2 border p-2 rounded" />
            </div>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold">Logo</label>
                <input type="file" className="w-full border p-2 rounded" />
              </div>
              <input type="text" placeholder="Logo ALT" className="border p-2 rounded" />
              <div>
                <label className="block font-semibold">Image 1</label>
                <input type="file" className="w-full border p-2 rounded" />
              </div>
              <input type="text" placeholder="Image1 ALT" className="border p-2 rounded" />
              <div>
                <label className="block font-semibold">Image 2</label>
                <input type="file" className="w-full border p-2 rounded" />
              </div>
              <input type="text" placeholder="Image2 ALT" className="border p-2 rounded" />
            </div>

            {/* Descriptions */}
            <textarea placeholder="Description 1" className="w-full border p-2 rounded" rows={3}></textarea>
            <textarea placeholder="Description 2" className="w-full border p-2 rounded" rows={3}></textarea>

            {/* Meta Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Meta Title" className="border p-2 rounded" />
              <input type="text" placeholder="Meta Keywords" className="border p-2 rounded" />
              <input type="text" placeholder="Meta Author" className="border p-2 rounded" />
              <input type="text" placeholder="Meta Description" className="border p-2 rounded" />
              <input type="text" placeholder="Canonical" className="border p-2 rounded" />
            </div>

            {/* OG Tags */}
            <h2 className="text-lg font-bold">Open Graph (OG) Tags</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="OG:Title" className="border p-2 rounded" />
              <input type="text" placeholder="OG:Description" className="border p-2 rounded" />
              <input type="text" placeholder="OG:URL" className="border p-2 rounded" />
              <div>
                <label className="block font-semibold">OG:Image</label>
                <input type="file" className="w-full border p-2 rounded" />
              </div>
              <input type="text" placeholder="OG:Type" className="border p-2 rounded" />
              <input type="text" placeholder="OG:Site Name" className="border p-2 rounded" />
              <input type="text" placeholder="OG:Locale" className="border p-2 rounded" />
              <input type="text" placeholder="Article:Publisher" className="border p-2 rounded" />
              <input type="text" placeholder="Article:Author" className="border p-2 rounded" />
              <input type="text" placeholder="OG:Updated Time" className="border p-2 rounded" />
              <div>
                <label className="block font-semibold">OG:Image SecureUrl</label>
                <input type="file" className="w-full border p-2 rounded" />
              </div>
              <input type="text" placeholder="OG:Image Width" className="border p-2 rounded" />
              <input type="text" placeholder="OG:Image Height" className="border p-2 rounded" />
              <input type="text" placeholder="OG:Image Alt" className="border p-2 rounded" />
              <input type="text" placeholder="OG:Image Type" className="border p-2 rounded" />
            </div>

            {/* Twitter Tags */}
            <h2 className="text-lg font-bold">Twitter Tags</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Twitter Card" className="border p-2 rounded" />
              <input type="text" placeholder="Twitter Title" className="border p-2 rounded" />
              <input type="text" placeholder="Twitter Description" className="border p-2 rounded" />
              <div>
                <label className="block font-semibold">Twitter Image</label>
                <input type="file" className="w-full border p-2 rounded" />
              </div>
              <input type="text" placeholder="Twitter URL" className="border p-2 rounded" />
              <input type="text" placeholder="Twitter Account ID" className="border p-2 rounded" />
              <input type="text" placeholder="Twitter Site" className="border p-2 rounded" />
              <input type="text" placeholder="Twitter Creator" className="border p-2 rounded" />
            </div>

            {/* Robots + Extra */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Robots 1" className="border p-2 rounded" />
              <input type="text" placeholder="Robots 2" className="border p-2 rounded" />
              <textarea placeholder="Script" className="col-span-1 md:col-span-2 border p-2 rounded" rows={2}></textarea>
            </div>

            {/* Ratings */}
            <h2 className="text-lg font-bold">Ratings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Rate Title" className="border p-2 rounded" />
              <input type="text" placeholder="Rate Number" className="border p-2 rounded" />
              <input type="text" placeholder="Rate Title 2" className="border p-2 rounded" />
              <input type="text" placeholder="Five Star Percent" className="border p-2 rounded" />
              <input type="text" placeholder="Four Star Percent" className="border p-2 rounded" />
              <input type="text" placeholder="Three Star Percent" className="border p-2 rounded" />
              <input type="text" placeholder="Two Star Percent" className="border p-2 rounded" />
              <input type="text" placeholder="One Star Percent" className="border p-2 rounded" />
            </div>

            {/* Status */}
            <div className="flex items-center gap-4">
              <label className="font-semibold">Status</label>
              <select className="border p-2 rounded">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            <div className="text-right text-sm text-gray-500">info@xyz.in</div>
          </form>
        </div>
      </div>
    </div>
  );
}
