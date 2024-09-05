"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Define the type for the counselor object
type Counselor = {
  id: number;
  name: string;
  expertise: string;
  avatar: string;
};

const CareerPlanning: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedCounselor, setSelectedCounselor] = useState<Counselor | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>(''); // State for search input

  const counselors: Counselor[] = [
    { id: 1, name: 'Dr. Anjali Mehra', expertise: 'Engineering & Technology', avatar: 'https://i.pravatar.cc/150?img=12' },
    { id: 2, name: 'Prof. Rajesh Sharma', expertise: 'Business & Management', avatar: 'https://i.pravatar.cc/150?img=15' },
    { id: 3, name: 'Ms. Priya Kapoor', expertise: 'Arts & Humanities', avatar: 'https://i.pravatar.cc/150?img=16' },
    { id: 4, name: 'Dr. Neha Gupta', expertise: 'Healthcare & Medicine', avatar: 'https://i.pravatar.cc/150?img=17' },
    { id: 5, name: 'Mr. Suresh Kumar', expertise: 'Finance & Investment', avatar: 'https://i.pravatar.cc/150?img=18' },
    { id: 6, name: 'Ms. Aisha Patel', expertise: 'Digital Marketing', avatar: 'https://i.pravatar.cc/150?img=19' },
    { id: 7, name: 'Prof. Vikram Singh', expertise: 'Law & Public Policy', avatar: 'https://i.pravatar.cc/150?img=20' },
    { id: 8, name: 'Dr. Preeti Desai', expertise: 'Psychology & Counseling', avatar: 'https://i.pravatar.cc/150?img=21' },
    { id: 9, name: 'Mr. Ravi Tandon', expertise: 'Entrepreneurship & Startups', avatar: 'https://i.pravatar.cc/150?img=22' },
    { id: 10, name: 'Ms. Meera Bhatt', expertise: 'Media & Communication', avatar: 'https://i.pravatar.cc/150?img=23' },
    { id: 11, name: 'Dr. Ajay Verma', expertise: 'Environmental Science', avatar: 'https://i.pravatar.cc/150?img=24' },
    { id: 12, name: 'Ms. Shruti Kapoor', expertise: 'Education & Teaching', avatar: 'https://i.pravatar.cc/150?img=25' }
  ];

  const showModal = (counselor: Counselor | null) => {
    setSelectedCounselor(counselor);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedCounselor(null);
  };

  // Filter counselors based on the search term
  const filteredCounselors = counselors.filter((counselor) =>
    counselor.expertise.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto p-8 bg-green-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-green-800 mb-6">Career Planning</h1>
      <p className="text-lg text-gray-700 mb-8">
        Explore your career options and plan your future with expert guidance.
      </p>
  
      <div className="flex justify-center mb-10">
        <div className="bg-green-50 border-2 border-green-800 rounded-xl p-6 hover:shadow-lg transition-transform transform hover:-translate-y-1">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            1-on-1 Personalized Career Counseling
          </h2>
          <p className="text-base text-gray-600 mb-6">
            Get personalized guidance from experts to make the best career choices.
          </p>
          <button
            className="bg-green-800 text-white text-lg px-6 py-3 rounded-lg hover:bg-green-900"
            onClick={() => showModal(null)}
          >
            Choose Your Counselor
          </button>
        </div>
      </div>
  
      {/* Modal */}
      {isModalVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full h-3/4 overflow-y-auto">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Select Your Counselor</h2>
  
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by career field"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border text-gray-900 border-gray-300 rounded-lg mb-6"
            />
  
            <ul>
              {filteredCounselors.map((counselor) => (
                <li
                  key={counselor.id}
                  className="flex items-center justify-between py-4 border-b border-gray-300"
                >
                  <div className="flex items-center">
                    <img
                      className="w-12 h-12 rounded-full mr-4"
                      src={counselor.avatar}
                      alt={counselor.name}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{counselor.name}</h3>
                      <p className="text-sm text-gray-600">{counselor.expertise}</p>
                    </div>
                  </div>
                  <Link
                    href={{
                      pathname: '/dashboard/career-planning/book-meeting',
                      query: { counselorId: counselor.id, counselorName: counselor.name },
                    }}
                    passHref
                  >
                    <button
                      className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-900"
                      onClick={() => setSelectedCounselor(counselor)}
                    >
                      Book Session
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
  
            {/* If no counselors are found */}
            {filteredCounselors.length === 0 && (
              <p className="text-center text-gray-500">No counselors found for this career field.</p>
            )}
  
            <button
              className="mt-6 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );

}
  
  export default CareerPlanning;