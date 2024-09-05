// components/SideNavBar.tsx
"use client"
import React from 'react';
import Link from 'next/link';

const SideNavBar: React.FC = () => {
  return (
    <div className="h-screen w-64 bg-white shadow-lg sticky top-0">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 bg-teal-300">
        <img src="/Images/Gyaansaras.jpeg" alt="Logo" className="h-10" />
        <span className="ml-2 text-lg font-bold text-gray-950">Gyaansaras</span>
      </div>

      {/* Navigation Items */}
      <nav className="mt-4">
        <ul>
          <li className="mb-1">
            <Link href="/dashboard/library">
              <div className="block p-4 text-gray-600 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                Library
              </div>
            </Link>
          </li>
          <li className="mb-1">
            <Link href="/dashboard/sessions">
              <div className="block p-4 text-gray-600 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                Sessions
              </div>
            </Link>
          </li>
          <li className="mb-1">
            <Link href="/dashboard/career-planning">
              <div className="block p-4 text-gray-600 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                Career Planning
              </div>
            </Link>
          </li>
          <li className="mb-1">
            <Link href="/dashboard/connect">
              <div className="block p-4 text-gray-600 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                Build Connection
              </div>
            </Link>
          </li>
          <li className="mb-1">
            <Link href="/dashboard/test-series">
              <div className="block p-4 text-gray-600 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                Test Series
              </div>
            </Link>
          </li>
          <li className="mb-1">
            <Link href="#">
              <div className="block p-4 text-gray-600 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                Refer & Earn
              </div>
            </Link>
          </li>
          <li className="mb-1">
            <Link href="/dashboard/contact-us">
              <div className="block p-4 text-gray-600 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                Contact Us
              </div>
            </Link>
          </li>
          <li className="mb-1">
            <Link href="/dashboard/about-us">
              <div className="block p-4 text-gray-600 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                About Us
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNavBar;
