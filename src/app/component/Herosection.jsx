// components/HeroSection.js
"use client"
import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative bg-gradient-to-r from-teal-400 to-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center">
                {/* Text Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                        Empower Your Learning Journey with Gyaansaras
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Access unlimited courses and personalized learning experiences designed to help you succeed.
                    </p>
                    <a href="/sign-in">
                    <button className="bg-white text-teal-600 hover:text-white hover:bg-teal-700 px-8 py-3 rounded-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300">
                        Get Started
                    </button>
                    </a>
                 
                </div>
                {/* Image or Illustration */}
                <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
                    <img
                        src="/Images/HerosectionOrg.jpeg"  // Update with your illustration or image
                        alt="Learning Illustration"
                        className="w-full max-w-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
