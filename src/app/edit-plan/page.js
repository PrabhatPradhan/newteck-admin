'use client';
import { useState } from 'react';
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";

export default function EditPlanPage() {
  const [formData, setFormData] = useState({
    category: '',
    type: 'Annual Maintenance Contract For Split and Windows Air Conditioner',
    duration: '1 YEAR',
    price: '2999',
    status: 'Active',
    email: 'info@xyz.in',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // API call logic here
  };

  return (
    <div className="flex h-screen overflow-hidden">
    {/* Sidebar */}
    <div className="w-64 h-screen fixed left-0 top-0 bg-white shadow-md z-10">
      <Sidebar />
    </div>

    {/* Main Content */}
    <main className="flex-1 ml-64 bg-gray-100 overflow-y-auto max-h-screen">
      {/* Navbar */}
      <Navbar />
        <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Edit Plan</h2>
            <form onSubmit={handleSubmit} className="space-y-4 w-full">

              <div>
                <label className="block font-semibold">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                >
                  <option value="">Select category</option>
                  <option value="AC">AC</option>
                  <option value="REFRIGERATOR">Refrigerator</option>
                  <option value="WASHING_MACHINE">Washing Machine</option>
                  {/* Add more categories as needed */}
                </select>
              </div>

              <div>
                <label className="block font-semibold">Type</label>
                <input
                  type="text"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold">Duration</label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block font-semibold">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
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

              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Save Plan
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
