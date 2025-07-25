'use client';

import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { FiEdit,FiTrash2 } from "react-icons/fi"; // ← Import Edit Icon
import Link from "next/link";

const amcList = [
  { category: "RO Water Purifier", status: "Active" },
  { category: "Kitchen Chimney", status: "Active" },
  { category: "Washing Machine", status: "Active" },
  { category: "Microwave Oven", status: "Active" },
  { category: "Air Conditioner", status: "Active" },
  { category: "Television", status: "Active" },
  { category: "Geyser", status: "Active" },
  { category: "Refrigerator", status: "Active" },
];

export default function Page() {
  const hendleDelete=(category)=>{
    const confirm=window.confirm(`are you sure `);
    if(confirm){
      console.log(`delete:${category} `)
    }
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
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">AMCs</h2>

          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200 bg-white">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="px-4 py-2 font-semibold text-gray-700">Category</th>
                  <th className="px-4 py-2 font-semibold text-gray-700">Status</th>
                  <th className="px-4 py-2 font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {amcList.map((item, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 text-gray-800">{item.category}</td>
                    <td className="px-4 py-2 text-green-600 font-medium">{item.status}</td>
                    <td className="px-4 py-2 text-blue-500 cursor-pointer">
                    <div className="flex items-center gap-3 text-lg text-blue-500 cursor-pointer">
                      <Link href="edit-amc">
                      <FiEdit />
                        </Link> 
                        <FiTrash2 className="text-red-500"
                        onClick={()=> hendleDelete(item.category)} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <footer className="text-center text-gray-600 mt-6">info@xyz.in</footer>
        </div>
      </main>
    </div>
  );
}
