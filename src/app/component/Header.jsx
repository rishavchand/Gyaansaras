
import { UserButton } from '@clerk/nextjs';
import { useAuth } from '@clerk/nextjs';
import { useState } from 'react';

export default function Navbar() {
  const { isSignedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src="/Images/Gyaansaras.jpeg" // Update with your logo path
            alt="Logo"
            className="w-12 h-12"
          />
          <div className="text-teal-300 text-2xl font-semibold">LearningPlatform</div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-grow justify-center justify-items-end space-x-6">
          <a href="/" className="text-white hover:text-white">Home</a>
          <a href="#" className="text-white hover:text-white">Courses</a>
          <a href="#" className="text-white hover:text-white">About</a>
          <a href="#" className="text-white hover:text-white">Contact</a>
        </div>

        {/* Login Button */}

        <div className="hidden md:flex">
      {isSignedIn ? (
        <UserButton />
      ) : (
        <a href="/sign-in" className="text-white hover:text-white border border-gray-300 px-4 py-2 rounded">
          Login
        </a>
      )}
    </div>
        
    <div
        className={`md:hidden flex flex-col items-center ml-32`}
      >
    {isSignedIn ? (
        <UserButton />
      ) : (
        <a href="/sign-in" className="text-white hover:text-white border border-gray-300 px-4 py-2 rounded">
          Login
        </a>
      )}

      </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-2xl">&times;</span> // Close icon
          ) : (
            <span className="text-2xl">&#9776;</span> // Menu icon
          )}
        </button>


      </div>



      {/* Mobile Menu Links */}
      <div
        className={`md:hidden flex flex-col items-center mt-4 space-y-2 ${isOpen ? 'block' : 'hidden'
          }`}
      >
        <a href="#" className="text-white hover:text-teal-300">Home</a>
        <a href="#" className="text-white hover:text-teal-300">Courses</a>
        <a href="#" className="text-white hover:text-teal-300">About</a>
        <a href="#" className="text-white hover:text-teal-300">Contact</a>

      </div>
    </nav>
  );
}
