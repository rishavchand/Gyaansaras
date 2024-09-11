// components/Dashboard.tsx

import Link from 'next/link';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-lg p-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Your Learning Dashboard
        </h1>
        <p className="text-gray-700 mb-10 text-center">
          Explore our services and take your learning to the next level:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1-on-1 Session Booking */}
          <Link href="/dashboard/career-planning" passHref>
            <div className="bg-blue-100 border border-blue-300 rounded-lg p-8 flex flex-col items-center text-center hover:bg-blue-200 transition-all duration-300 cursor-pointer">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Book a 1-on-1 Session</h2>
              <p className="text-gray-600 mb-6">
                Schedule a personalized session with one of our expert teachers for tailored guidance and support.
              </p>
              <div className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                Book Now
              </div>
            </div>
          </Link>

          {/* Learning Resources */}
          <Link href="/resources" passHref>
            <div className="bg-green-100 border border-green-300 rounded-lg p-8 flex flex-col items-center text-center hover:bg-green-200 transition-all duration-300 cursor-pointer">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">Access Learning Resources</h2>
              <p className="text-gray-600 mb-6">
                Explore a variety of resources to enhance your learning experience and achieve your goals.
              </p>
              <div className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300">
                Explore Resources
              </div>
            </div>
          </Link>

          {/* Create Team */}
          <Link href="/create-team" passHref>
            <div className="bg-purple-100 border border-purple-300 rounded-lg p-8 flex flex-col items-center text-center hover:bg-purple-200 transition-all duration-300 cursor-pointer">
              <h2 className="text-2xl font-semibold text-purple-800 mb-4">Create a Team</h2>
              <p className="text-gray-600 mb-6">
                Form a team with peers and collaborate on projects or challenges.
              </p>
              <div className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-300">
                Create Team
              </div>
            </div>
          </Link>

          {/* Test Series */}
          <Link href="/dashboard/test-series" passHref>
            <div className="bg-red-100 border border-red-300 rounded-lg p-8 flex flex-col items-center text-center hover:bg-red-200 transition-all duration-300 cursor-pointer">
              <h2 className="text-2xl font-semibold text-red-800 mb-4">Test Series</h2>
              <p className="text-gray-600 mb-6">
                Take practice tests to assess your knowledge and prepare effectively.
              </p>
              <div className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300">
                Start Testing
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
