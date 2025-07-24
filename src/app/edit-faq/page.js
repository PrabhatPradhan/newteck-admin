"use client";

import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
export default function AddFAQ() {
  const [form, setForm] = useState({
    type: "",
    city: "",
    question: "",
    answer: "",
    status: true,
  });

  const handleChange = (e) => {
    const { name, value, type: inputType, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: inputType === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Here you can call your API
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
        <div className="max-w-5xl w-full mx-auto p-6 bg-white rounded shadow-md  mt-6">
          <h2 className="text-2xl font-bold mb-6">Edit FAQ</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Type */}
            <div>
              <label className="block mb-1 font-medium">Type</label>
              <input
                type="text"
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>

            {/* City */}
            <div>
              <label className="block mb-1 font-medium">City</label>
              <select
                name="city"
                value={form.city}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              >
                <option value="">Select City</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </div>

            {/* Question */}
            <div>
              <label className="block mb-1 font-medium">Question</label>
              <input
                type="text"
                name="question"
                value={form.question}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>

            {/* Answer */}
            <div>
              <label className="block mb-1 font-medium">Answer</label>
              <textarea
                name="answer"
                value={form.answer}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              ></textarea>
            </div>

            {/* Status */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="status"
                checked={form.status}
                onChange={handleChange}
              />
              <label className="font-medium">Active</label>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>

            {/* Info */}
            <p className="text-sm text-gray-500">info@xyz.in</p>
          </form>
        </div>
      </main>
    </div>
  );
}
