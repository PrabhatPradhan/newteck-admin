"use client";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { useState } from "react";

export default function AddCategoryPageType() {
  const [form, setForm] = useState({
    category: "",
    title: "",
    subTitle: "",
    problemPoints: "",
    image: null,
    imageAlt: "",
    price: "",
    offerPrice: "",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", form);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-y-auto bg-gray-100">
        <Navbar />
        <div className="p-6 max-w-4xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-xl font-bold mb-4">Add Category Page Type</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Category</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md"
                >
                  <option value="">Select category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Home">Home</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Title</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Sub Title</label>
                <input
                  type="text"
                  name="subTitle"
                  value={form.subTitle}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Problem Points</label>
                <textarea
                  name="problemPoints"
                  value={form.problemPoints}
                  onChange={handleChange}
                  placeholder="Enter Value in ## separated eg: point1##point2##point3"
                  className="w-full border px-3 py-2 rounded-md"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Image 1</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Image ALT</label>
                <input
                  type="text"
                  name="imageAlt"
                  value={form.imageAlt}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-md"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Offer Price</label>
                  <input
                    type="number"
                    name="offerPrice"
                    value={form.offerPrice}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">Status</label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
          <footer className="text-center text-sm text-gray-500 mt-6">
            info@xyz.in
          </footer>
        </div>
      </div>
    </div>
  );
}
