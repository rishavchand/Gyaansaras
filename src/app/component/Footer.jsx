'use client'

import React from 'react'

function Footer() {
  return (
    <footer className="bg-teal-500 text-gray-400 py-12">
      <div  className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
        <h2 className="text-black text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4 text-gray-900">
          Gyaansaras is dedicated to empowering learners with the skills and knowledge needed to thrive in today's world. Our platform offers expert-designed courses for exam preparation, professional growth, and personal enrichment. Join our vibrant learning community and start your journey to success today.
          </p>
        </div>
        <div>
        <h2 className="text-black text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-black text-gray-900 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black text-gray-900 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black text-gray-900 transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black text-gray-900 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
        <h2 className="text-black text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-black text-gray-900 transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-black text-gray-900 transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-black text-gray-900 transition-colors duration-300"
            >
              Instagram
            </a>
            </div>
        </div>
        <div>
        <h2 className="text-black text-lg font-semibold mb-4">Contact Us</h2>
          <p className='text-gray-900'>New Delhi, India</p>
          <p className='text-gray-900'>Delhi 10001</p>
          <p className='text-gray-900'>Email: info@.com</p>
          <p className='text-gray-900'>Phone: +91 78950xxxxx</p>
        </div>
      </div>
      <p className="text-center text-gray-900 text-xs pt-8">© 2024 Gyaansaras. All rights reserved.</p>
    </footer>
  )
}

export default Footer
