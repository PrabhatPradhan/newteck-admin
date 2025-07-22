'use client';

import { FaPen } from 'react-icons/fa';
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
export default function SliderPage() {
  const sliders = [
    {
      id: 1,
      imageUrl: '/images/feedback.png',
      status: 'Active',
      email: 'info@xyz.in',
    },
    {
      id: 2,
      imageUrl: '/images/contact.png',
      status: 'Inactive',
      email: 'support@xyz.in',
    },
  ];

  const handleEdit = (id) => {
    alert(`Edit clicked for ID: ${id}`);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
        <div className="w-full lg:w-64 bg-gray-800 text-white">
          <Sidebar />
        </div>

        <div className="flex-1 overflow-y-auto bg-gray-100">
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
                    <button
                      onClick={() => handleEdit(slider.id)}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white p-2 rounded"
                    >
                      <FaPen size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
