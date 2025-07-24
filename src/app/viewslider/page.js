'use client';

import { FaPen } from 'react-icons/fa';
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
import Link from 'next/link';
export default function SliderPage() {
  const sliders = [
    {
      id: 1,
      imageUrl: '/images/feedback.png',
      status: 'Active',
     
    },
    {
      id: 2,
      imageUrl: '/images/contact.png',
      status: 'Inactive',
      
    },
  ];

 

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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Slider</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="p-3 border">Image</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {sliders.map((slider) => (
                <tr key={slider.id} className="border-t">
                  <td className="p-3 border">
                    <img
                      src={slider.imageUrl}
                      alt="Slider Image"
                      className="w-32 h-20 object-cover rounded"
                    />
                    <p className="text-sm text-gray-500 mt-1">{slider.email}</p>
                  </td>
                  <td className="p-3 border">{slider.status}</td>
                  <td className="p-3 border">
                    <Link href="/edit-slider">
                    <button
                    
                      className="bg-cyan-600 hover:bg-cyan-700 text-white p-2 rounded"
                    >
                      <FaPen size={14} />
                    </button></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </main>
    </div>
  );
}
