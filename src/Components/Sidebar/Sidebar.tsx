"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaThLarge, FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import logo from "../../../public/logo.png"; // Adjust path if needed

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", links: [{ name: "Main", href: "/" }] },
    {
      name: "Slider",
      links: [
        { name: "Add Slider", href: "/addslider" },
        { name: "View Slider", href: "/viewslider" },
      ],
    },
    {
      name: "Banner",
      links: [{ name: "View Banner", href: "/viewbanner" }],
    },
    {
      name: "Category",
      links: [
        { name: "Add Category", href: "/addcategory" },
        { name: "View Category", href: "/viewcategory" },
      ],
    },
    {
      name: "Sub Category",
      links: [
        { name: "Add Sub Category", href: "/add-sub-category" },
        { name: "View Sub Category", href: "/view-add-sub-category" },
      ],
    },
    {
      name: "Category Page",
      links: [
        { name: "Add Category Page", href: "/add-category-page" },
        { name: "View Category Page", href: "/view-category-page" },
      ],
    },
    {
      name: "Category Page Type",
      links: [
        { name: "Add Category Page Type", href: "/add-category-page-type" },
        { name: "View Category Page Type", href: "/View-category-page-type" },
      ],
    },
    {
      name: "AMC",
      links: [
        { name: "Add AMC Category", href: "/add-amc-category" },
        { name: "View AMC Category", href: "/view-amc-category" },
        { name: "Add AMC", href: "/add-amc" },
        { name: "View AMC", href: "/view-amc" },
      ],
    },
    {
      name: "Plan",
      links: [
        { name: "Add Plan", href: "/add-plan" },
        { name: "View Plan", href: "/view-plan" },
      ],
    },
    {
      name: "Gallary",
      links: [
        { name: "Add Gallery", href: "/add-gallary" },
        { name: "View Gallery", href: "/view-gallary" },
      ],
    },
    {
      name: "Seo Tools",
      links: [
        { name: "Add SEO Tools", href: "/add-seo-tools" },
        { name: "View SEO Tools", href: "/view-seo-tools" },
      ],
    },
    {
      name: "Customer Review",
      links: [{ name: "View Customer Review", href: "/view-customer-review" }],
    },
    {
      name: "Brand",
      links: [
        { name: "Add Brand", href: "/add-brand" },
        { name: "View Brand", href: "/view-brand" },
      ],
    },
    {
      name: "City",
      links: [
        { name: "Add City", href: "/add-city" },
        { name: "View City", href: "/view-city" },
      ],
    },
    {
      name: "Locality",
      links: [
        { name: "Add Locality", href: "/add-locality" },
        { name: "View Locality", href: "/view-Locality" },
      ],
    },
    {
      name: "Useful Links",
      links: [
        { name: "Add Useful Links", href: "/add-useful-links" },
        { name: "View Useful Links", href: "/view-useful-links" },
      ],
    },
    {
      name: "Blog Category",
      links: [
        { name: "Add Blog Category", href: "/add-blog-category" },
        { name: "View Blog Category", href: "/view-blog-category" },
      ],
    },
    {
      name: "Blog",
      links: [
        { name: "Add Blog", href: "/add-blog" },
        { name: "View Blog", href: "/view-blog" },
      ],
    },
    {
      name: "Sitemap Box",
      links: [
        { name: "Add Sitemap Box", href: "/add-sitemap-box" },
        { name: "View Sitemap Box", href: "/view-sitemap-box" },
      ],
    },
    {
      name: "SiteMap",
      links: [
        { name: "Add SiteMap", href: "/add-siteMap" },
        { name: "View SiteMap", href: "/view-siteMap" },
      ],
    },
    {
      name: "FAQ",
      links: [
        { name: "Add FAQ", href: "/add-FAQ" },
        { name: "View FAQ", href: "/view-FAQ" },
      ],
    },
  ];

  return (
    <div className="w-auto">
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white bg-[#0a0f1c] p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars size={20} />
      </button>

      {/* Sidebar Drawer */}
      <div
        className={`h-screen w-64 bg-[#0a0f1c] text-white p-4 z-40 overflow-y-auto transition-transform duration-300
          fixed top-0 left-0 md:static md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:block`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 mb-6">
          <Image src={logo} alt="Logo" className="ml-10 w-32 h-auto" />
        </div>

        {/* Navigation */}
        <nav className="space-y-2 text-sm font-medium">
          {menuItems.map((menu, index) =>
            menu.name === "Dashboard" ? (
              <Link
                key={index}
                href={menu.links[0].href}
                className="flex items-center gap-2 px-3 py-3 rounded-md text-gray-300 hover:text-white hover:bg-[#111827] transition-all duration-200"
              >
                <FaThLarge />
                {menu.name}
              </Link>
            ) : (
              <details key={index} className="group">
                <summary className="flex items-center justify-between cursor-pointer px-3 py-3 rounded-md text-gray-300 hover:text-white hover:bg-[#111827] transition-all duration-200">
                  <span className="flex items-center gap-2">
                    <FaThLarge /> {menu.name}
                  </span>
                  <FaChevronDown className="transition-transform duration-300 group-open:rotate-180 text-sm" />
                </summary>
                <div className="ml-6 mt-2 flex flex-col gap-2 text-gray-400 text-xs">
                  {menu.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className="hover:text-white py-1 transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </details>
            )
          )}
        </nav>
      </div>
    </div>
  );
}
