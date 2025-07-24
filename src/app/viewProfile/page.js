"use client";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { useState } from "react";

export default function ViewProfile() {
  const [profile, setProfile] = useState({
    name: "user",
    email: "user@example.com",
    phone: "+91-9876543210",
    city: "Kolkata",
  });

  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    // Submit password update logic here
    alert("Password changed successfully!");
    console.log(passwords);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 fixed top-0 left-0 h-screen bg-white shadow z-10">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 bg-gray-100">
        <Navbar />

        <div className="p-6 max-w-4xl mx-auto space-y-8">
          {/* Profile Info */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">My Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600">Full Name</label>
                <p className="font-medium text-gray-800">{profile.name}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600">Email</label>
                <p className="font-medium text-gray-800">{profile.email}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600">Phone</label>
                <p className="font-medium text-gray-800">{profile.phone}</p>
              </div>
              <div>
                <label className="block text-sm text-gray-600">City</label>
                <p className="font-medium text-gray-800">{profile.city}</p>
              </div>
            </div>
            <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Edit Profile
            </button>
          </div>

          {/* Change Password */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Change Password</h2>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Old Password</label>
                <input
                  type="password"
                  name="oldPassword"
                  value={passwords.oldPassword}
                  onChange={handlePasswordChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwords.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwords.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
