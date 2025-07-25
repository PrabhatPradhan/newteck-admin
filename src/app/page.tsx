"use client";

import React from "react";
import Dashboard from "@/Components/Dashboard/Dashboard";
import { FaTachometerAlt } from "react-icons/fa";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";

export default function Page() {
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

        {/* Header */}
        <div className="bg-white px-6 py-4 shadow-sm border-b flex items-center gap-4">
          {/* Icon */}
          <div className="text-teal-600 text-4xl">
            <FaTachometerAlt />
          </div>

          {/* Text */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
               Admin Dashboard
            </h1>
            <p className="text-sm text-gray-600">
              Very detailed &amp; featured admin.
            </p>
          </div>
        </div>

        {/* Dashboard Cards */}
        <Dashboard />
      </main>
    </div>
  );
}
