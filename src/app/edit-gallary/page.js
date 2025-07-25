'use client';
import { useState } from 'react';
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";

export default function EditGalleryPage() {
  const [formData, setFormData] = useState({
    image: null,
    imageAlt: 'Tv Repair Mane',
    youtubeId: '',
    status: 'Active',
    email: 'Webideainfotech',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // API submission logic goes here
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
        <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Edit Gallery</h2>
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <div>
                <label className="block font-semibold">Image (Select Image If Image)</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block font-semibold">Image ALT</label>
                <input
                  type="text"
                  name="imageAlt"
                  value={formData.imageAlt}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block font-semibold">YouTube ID</label>
                <input
                  type="text"
                  name="youtubeId"
                  value={formData.youtubeId}
                  onChange={handleChange}
                  placeholder="Enter YouTube ID if Video"
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="block font-semibold">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

           
                 
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Save Gallery
                </button>
              </div>          
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
