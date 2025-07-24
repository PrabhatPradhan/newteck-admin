"use client";

import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";

const plans = [
  {
    category: "RO WATER PURIFIER AMC",
    type: "Annual Maintenance Contract For Water Purifier",
    duration: "1 YEAR",
    charges: "2250",
    status: "Active",
  },
  {
    category: "RO WATER PURIFIER AMC",
    type: "Water Purifire Uninstallation Charge",
    duration: "ONE Time",
    charges: "499",
    status: "Active",
  },
  {
    category: "WASHING MACHINE AMC",
    type: "Annual Maintenance Contract for Fully Automatic and Frond Loader Washing Machine",
    duration: "1 YEAR",
    charges: "3449",
    status: "Active",
  },
  {
    category: "MICEOWAVE OVEN AMC",
    type: "One Year Annual Maintenance Contract For Grill Micro Oven",
    duration: "1 YEAR",
    charges: "2499",
    status: "Active",
  },
  {
    category: "MICEOWAVE OVEN AMC",
    type: "One Year Annual Maintenance Contract For Solo Micro Oven",
    duration: "1 YEAR",
    charges: "2499",
    status: "Active",
  },
  {
    category: "REFRIGERATOR AMC",
    type: "Annual Maintenance Contract For Single Door Refrigerator",
    duration: "1 YEAR",
    charges: "2499",
    status: "Active",
  },
  {
    category: "REFRIGERATOR AMC",
    type: "Annual Maintenance Contract For Side by Side Refrigerator",
    duration: "1 YEAR",
    charges: "3449",
    status: "Active",
  },
  {
    category: "REFRIGERATOR AMC",
    type: "Annual Maintenance Contract For Double Door Refrigerator",
    duration: "1 YEAR",
    charges: "2999",
    status: "Active",
  },
  {
    category: "AIR CONDITIONER AMC",
    type: "Annual Maintenance Contract For Split and Windows Air Conditioner",
    duration: "2 YEAR",
    charges: "4999",
    status: "Active",
  },
  {
    category: "AIR CONDITIONER AMC",
    type: "Air Conditioner Installation charges",
    duration: "ONE Time",
    charges: "999",
    status: "Active",
  },
  {
    category: "AIR CONDITIONER AMC",
    type: "Air Conditioner Uninstallation charges",
    duration: "ONE Time",
    charges: "499",
    status: "Active",
  },
  {
    category: "WASHING MACHINE AMC",
    type: "Annual Maintenance Contract for Fully Automatic and Top Loader Washing Machine",
    duration: "1 YEAR",
    charges: "2999",
    status: "Active",
  },
  {
    category: "WASHING MACHINE AMC",
    type: "Annual Maintenance Contract for Fully Sami Automatic",
    duration: "1 YEAR",
    charges: "2499",
    status: "Active",
  },
  {
    category: "KITCHEN CHIMNEY AMC",
    type: "Kitchen Chimney Uninstallation",
    duration: "ONE Time",
    charges: "499",
    status: "Active",
  },
  {
    category: "GEYSER AMC",
    type: "Geyser Uninstallation Charge",
    duration: "ONE Time",
    charges: "450",
    status: "Active",
  },
  {
    category: "GEYSER AMC",
    type: "Geyser Instalation Charge",
    duration: "ONE Time",
    charges: "550",
    status: "Active",
  },
];

export default function PlansPage() {
  // const hendlerDelete=(category)=>{
  //   const confirm =window.confirm('are you sure you want to delete ');
  //   if(confirm){
  //     console.log(`delete ${category}`)
  //   }

  // }
  const hendelDelete=(category)=>{
    const confirm=window.confirm(`are you sure you want delete this`);
    if(confirm){
      console.log(`delete ${category}`)
    }
  }
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
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Plans</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200 text-gray-700 text-sm">
                <tr>
                  <th className="text-left px-4 py-2">Category</th>
                  <th className="text-left px-4 py-2">Type</th>
                  <th className="text-left px-4 py-2">Duration</th>
                  <th className="text-left px-4 py-2">Sharges</th>
                  <th className="text-left px-4 py-2">Status</th>
                  <th className="text-left px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {plans.map((plan, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-200 text-sm hover:bg-gray-50"
                  >
                    <td className="px-4 py-2">{plan.category}</td>
                    <td className="px-4 py-2">{plan.type}</td>
                    <td className="px-4 py-2">{plan.duration}</td>
                    <td className="px-4 py-2">{plan.charges}</td>
                    <td className="px-4 py-2 text-green-600 font-medium">
                      {plan.status}
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex items-center gap-3 text-lg">
                        <Link href="/edit-plan">
                       <button
                          className="text-blue-600 hover:text-blue-800"
                          title="Edit"
                        >
                          <FaEdit />
                        </button>
                       </Link>
                         
                        <button className="text-red-600 hover:text-red-800"
                        onClick={()=> hendelDelete(plan.category)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            info@xyz.in
          </p>
        </div>
      </main>
    </div>
  );
}
