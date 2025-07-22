"use client";
import Sidebar from "../../Components/Sidebar/Sidebar"
import Navbar from "../../Components/Navbar/Navbar"
const faqs = [
  {
    type: "Brand",
    question: "The Best Whirlpool AC AMC Plan Provider in Your Area",
    answer:
      "With a Whirlpool AC AMC plan, you can enjoy the peace of mind of knowing that your air conditioner will be taken care of regularly by trained professionals.",
    status: "Active",
  },
  {
    type: "UsefulLink",
    question: "AC Service Number",
    answer:
      "The AC service number is the phone number that you can call to schedule a service appointment or get assistance with your AC unit",
    status: "Active",
  },
  {
    type: "UsefulLink",
    question: "Refrigerator repair Kolkata. You can search online",
    answer:
      "Refrigerator repair near me, Fridge repair service, Fix refrigerator, Warranty refrigerator service, Technician for repairs",
    status: "Active",
  },
  // Add more as needed...
];

export default function FaqsTable() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
    <div className="w-full lg:w-64 bg-gray-800 text-white">
      <Sidebar />
    </div>

    <div className="flex-1 overflow-y-auto bg-gray-100">
      <Navbar />
    <div className="p-6 max-w-7xl mx-auto bg-white mt-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">FAQs</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Type</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Question</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Answer</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Status</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {faqs.map((faq, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm">{faq.type}</td>
                <td className="px-4 py-2 text-sm max-w-xs">{faq.question}</td>
                <td className="px-4 py-2 text-sm max-w-md">{faq.answer}</td>
                <td className="px-4 py-2 text-sm">
                  <span className="text-green-600 font-medium">{faq.status}</span>
                </td>
                <td className="px-4 py-2 text-sm">
                  <button className="text-blue-600 hover:underline mr-2">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 text-sm text-gray-500">info@xyz.in</div>
      </div>
    </div></div></div>
  );
}
