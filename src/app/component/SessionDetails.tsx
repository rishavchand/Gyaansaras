import React from 'react';

interface Session {
  name: string;
  topic: string;
  time: string;
  status: 'Session Confirmed' | 'Waiting' | 'Cancelled';
  icon: string;
  statusColor: string;
}

const sessions: Session[] = [
  { name: 'Kundan Kumar', topic: 'Relation And Function', time: '2:00 PM', status: 'Session Confirmed', icon: '📐', statusColor: 'text-green-600' },
  { name: 'Bipin Kumar', topic: 'Gravitation', time: '9:00 PM', status: 'Waiting', icon: '⚛️', statusColor: 'text-blue-500' },
  { name: 'Sonu Kumar', topic: 'Periodic Table', time: '5:00 PM', status: 'Session Confirmed', icon: '🧪', statusColor: 'text-green-600' },
  { name: 'Om Sharma', topic: 'Design', time: '2:00 PM', status: 'Cancelled', icon: '🖌️', statusColor: 'text-red-600' },
  { name: 'Kajal Kumari', topic: 'Function', time: '2:00 PM', status: 'Session Confirmed', icon: '💻', statusColor: 'text-green-600' },
  { name: 'Mr. Kumar', topic: 'Robotics', time: '2:00 PM', status: 'Waiting', icon: '🤖', statusColor: 'text-blue-500' },
  { name: 'Shaswat Singh', topic: 'Microprocessor', time: '2:00 PM', status: 'Cancelled', icon: '🔧', statusColor: 'text-red-600' },
];

const SessionDetails: React.FC = () => {

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Session Details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sessions.map((session, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <div className="text-xl font-bold text-gray-900">{session.name}</div>
              <div className="text-sm text-gray-900">{session.topic}</div>
              <div className="text-sm text-gray-800">{session.time}</div>
              <div className={`mt-2 font-semibold ${session.statusColor}`}>{session.status}</div>
            </div>
            <div className="text-4xl">{session.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionDetails;
