// components/MobileLogin.js
"use client"
import React from 'react';

const MobileLogin = () => {
    return (
        <div className="bg-white flex flex-col items-center">
            <label htmlFor="mobile" className="text-gray-900 font-semibold mt-5">Please enter your mobile number to login/register</label>
            <div className="flex mt-4">
                <span className="inline-flex items-center px-3 text-gray-600 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                    🇮🇳 +91
                </span>
                <input
                    type="text"
                    id="mobile"
                    className="rounded-none rounded-r-md border border-gray-300 p-2 focus:ring-teal-500 focus:border-teal-500 text-black"  
                    placeholder="Enter mobile no"
                />
            </div>
            <button className="mt-4 bg-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-600 mb-10">
                Get OTP
            </button>
        </div>
    );
};

export default MobileLogin;
