"use client";

import React from "react";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Navbar from "@/Components/Navbar/Navbar";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Aman",
    rating: 5,
    feedback: "Excellent Service",
    date: "2024-01-18 14:39:25",
  },
  {
    name: "Sanju Saila",
    rating: 5,
    feedback: "Excellent Service",
    date: "2024-01-18 14:36:28",
  },
  {
    name: "Sanjib Halder",
    rating: 5,
    feedback: "Excellent Service",
    date: "2024-01-18 14:28:00",
  },
  {
    name: "Ranjan",
    rating: 5,
    feedback: "Excellent Service",
    date: "2022-06-20 10:02:18",
  },
  {
    name: "Sudipa das",
    rating: 5,
    feedback: "Good Service",
    date: "2021-02-15 14:40:12",
  },
  {
    name: "Rohit malohtra",
    rating: 5,
    feedback: "Excellent Service",
    date: "2021-02-15 14:15:54",
  },
  {
    name: "Aradhya shrma",
    rating: 5,
    feedback: "Excellent Service",
    date: "2021-02-15 14:13:24",
  },
  {
    name: "bhupendra",
    rating: 5,
    feedback: "Good Service",
    date: "2021-02-06 11:44:06",
  },
  {
    name: "yogendra",
    rating: 5,
    feedback: "Excellent Service",
    date: "2021-02-06 11:43:42",
  },
  {
    name: "Gaurav Tandon",
    rating: 5,
    feedback: "Excellent Service",
    date: "2021-02-06 11:43:22",
  },
];

export default function RatingReview() {
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
          <h1 className="text-3xl font-bold mb-4">Rating Review</h1>

          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <p className="text-xl font-semibold text-gray-700 mb-1">
              <span className="text-3xl font-bold text-yellow-500">4.48</span> /5
            </p>
          </div>

          <div className="space-y-4">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-md shadow flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div className="space-y-1">
                  <p className="font-semibold text-gray-700">
                    Customer Name: <span className="text-black">{review.name}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Rating:{" "}
                    <span className="text-yellow-500 flex items-center gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </span>
                  </p>
                  <p className="text-gray-700">Customer Feedback: {review.feedback}</p>
                </div>
                <p className="text-sm text-gray-500 mt-2 md:mt-0">{review.date}</p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 text-right text-sm text-gray-600">123Next Page</div>
        </div>
      </main>
    </div>
  );
}
