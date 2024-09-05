// components/SessionComponent.tsx
"use client"
import { useState } from 'react';
import Link from 'next/link';

interface Session {
  id: number;
  title: string;
  description: string;
}

const sessions: Session[] = [
  { id: 1, title: 'Introduction to Email Marketing', description: 'Learn the basics of email marketing.' },
  { id: 2, title: 'Social Media Management', description: 'Master social media strategies.' },
  { id: 3, title: 'Agency Management', description: 'Efficiently manage an agency.' },
  { id: 4, title: 'Copywriting Techniques', description: 'Enhance your copywriting skills for better engagement.' },
  { id: 5, title: 'Sales Strategies', description: 'Develop effective sales strategies for growth.' },
  { id: 6, title: 'Data Structures and Algorithms', description: 'Fundamentals of data structures and algorithms.' },
  { id: 7, title: 'Web Development Fundamentals', description: 'Basics of front-end and back-end development.' },
  { id: 8, title: 'Advanced JavaScript', description: 'In-depth exploration of JavaScript features and patterns.' },
  { id: 9, title: 'React and Next.js', description: 'Building modern web applications using React and Next.js.' },
  { id: 10, title: 'TypeScript for React', description: 'TypeScript basics and advanced techniques for React applications.' },
  { id: 11, title: 'Machine Learning Basics', description: 'Introduction to machine learning concepts and algorithms.' },
  { id: 12, title: 'Database Management Systems', description: 'Understanding databases, SQL, and NoSQL.' },
  { id: 13, title: 'Cloud Computing Fundamentals', description: 'Basics of cloud computing and services.' },
  { id: 14, title: 'Cybersecurity Essentials', description: 'Fundamentals of cybersecurity and best practices.' },
  { id: 15, title: 'Software Engineering Principles', description: 'Core principles and practices of software engineering.' },
  // Add more sessions as needed
];

const SessionDetails = () => {
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);

  const handleSessionClick = (session: Session) => {
    setSelectedSession(session);
  };

  return (
    <div className="p-6 bg-white-900 text-white min-h-screen">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900" >Available Sessions</h2>
      <ul className="space-y-4">
        {sessions.map((session) => (
          <li
            key={session.id}
            className={`p-5 border rounded-lg cursor-pointer transition-all ${
              selectedSession?.id === session.id ? 'bg-teal-700 border-teal-500' : 'bg-gray-800 border-gray-700'
            } hover:bg-teal-700 border-2`}
            onClick={() => handleSessionClick(session)}
          >
            <h3 className="text-xl font-medium">{session.title}</h3>
            <p className="text-gray-300 mt-1">{session.description}</p>
          </li>
        ))}
      </ul>

      {selectedSession && (
        <div className="mt-8 p-6 border rounded-lg bg-gray-800">
          <h2 className="text-2xl font-semibold">{selectedSession.title}</h2>
          <p className="text-gray-300 mt-2">{selectedSession.description}</p>
          <Link href={`/sessions/${selectedSession.id}`} passHref>
            <button
              className="mt-4 inline-block px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              View Details
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SessionDetails;
