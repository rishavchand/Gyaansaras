"use client"
import { useState } from 'react';

type Member = {
  name: string;
  role: string;
};

const TeamForm = () => {
  const [teamName, setTeamName] = useState('');
  const [description, setDescription] = useState('');
  const [members, setMembers] = useState<Member[]>([{ name: '', role: '' }]);

  const handleMemberChange = (
    index: number,
    key: keyof Member,
    value: string
  ) => {
    const newMembers = [...members];
    newMembers[index] = { ...newMembers[index], [key]: value };
    setMembers(newMembers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, such as sending data to the backend
    console.log({ teamName, description, members });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <div>
        <label className="block text-sm font-medium text-gray-700 text-gray-900">Team Name</label>
        <input 
          type="text" 
          value={teamName} 
          onChange={(e) => setTeamName(e.target.value)} 
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
        />
      </div>

      {members.map((member, index) => (
        <div key={index} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Member Name</label>
            <input 
              type="text" 
              value={member.name} 
              onChange={(e) => handleMemberChange(index, 'name', e.target.value)} 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Member Role</label>
            <input 
              type="text" 
              value={member.role} 
              onChange={(e) => handleMemberChange(index, 'role', e.target.value)} 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"
            />
          </div>
        </div>
      ))}

      <button 
        type="submit" 
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 "
      >
        Submit
      </button>
    </form>
  );
};

export default TeamForm;
