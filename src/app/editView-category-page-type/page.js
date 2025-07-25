'use client';
import { useState } from 'react';
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
export default function EditCategoryPageType() {
  const [formData, setFormData] = useState({
    category: 'REFRIGERATOR',
    title: 'Deep Freezer Repair',
    subTitle: 'Deep Freezer Checkup',
    problemPoints: 'Every Spear Parts Repair 3 Month Warranty,##Technician Visiting Charge Free 1 Year With AMC,##15% Discount on Every Spear Parts With AMC,',
    image: null,
    imageAlt: 'Deep Freezer Repair Icon',
    price: '349',
    offerPrice: '249',
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
    // Add your submit logic here (API call, etc.)
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
    <div className="w-full mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-6">Edit Category Page Type</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Sub Title</label>
          <input
            type="text"
            name="subTitle"
            value={formData.subTitle}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold">Problem Points</label>
          <textarea
            name="problemPoints"
            value={formData.problemPoints}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded h-28"
          />
        </div>

        <div>
          <label className="block font-semibold">Image 1</label>
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

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-semibold">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div className="flex-1">
            <label className="block font-semibold">Offer Price</label>
            <input
              type="number"
              name="offerPrice"
              value={formData.offerPrice}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
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

        <div>
          <label className="block font-semibold">Contact Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>  </main>  </div>
  );
}
