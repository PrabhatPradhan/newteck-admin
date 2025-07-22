"use client";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Image from "next/image";

export default function ViewSubcategoryPage() {
  const subcategories = [
    {
      category: "ELECTRONICS",
      name: "TELEVISION",
      icon: "/images/tv.png",
      status: "Active",
    },
    {
      category: "ELECTRONICS",
      name: "WASHING MACHINE",
      icon: "/images/washing-machine.png",
      status: "Active",
    },
    {
      category: "HOME APPLIANCES",
      name: "GEYSER",
      icon: "/images/geyser.png",
      status: "Inactive",
    },
    {
      category: "KITCHEN",
      name: "MICROWAVE OVEN",
      icon: "/images/microwave.png",
      status: "Active",
    },
  ];

  const handleEdit = (name) => {
    alert(`Edit clicked for: ${name}`);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <div className="w-full lg:w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gray-100">
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex flex-col">
          {/* Header */}
          <div className="bg-white px-4 py-3 shadow flex items-center gap-3">
            <div className="text-xl">&#9776;</div>
            <h1 className="text-lg font-semibold">Subcategories</h1>
          </div>

          {/* Table */}
          <div className="p-6 overflow-x-auto">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full table-auto text-sm text-left">
                <thead className="bg-gray-200 text-gray-600 uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Icon</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {subcategories.map((item, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3">{item.category}</td>
                      <td className="px-4 py-3">{item.name}</td>
                      <td className="px-4 py-3">
                        <Image
                          src={item.icon}
                          alt={`${item.name} icon`}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            item.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleEdit(item.name)}
                          className="text-blue-600 hover:underline"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-white border-t text-center text-gray-600 py-3">
            info@xyz.in
          </footer>
        </div>
      </div>
    </div>
  );
}
