"use client"
import Link from 'next/link';
import Sidebar from './Sidebar';
import { UserButton } from '@clerk/nextjs';


const studyItems = [
  { name: 'Biology Class 9', slug: 'biology-class-9' },
  { name: 'Physics Class 9', slug: 'physics-class-9' },
  { name: 'Maths Class 9', slug: 'maths-class-9' },
  { name: 'English Class 9', slug: 'english-class-9' },
  { name: 'Biology Class 10', slug: 'biology-class-10' },
  { name: 'Thermodynamics Engineering', slug: 'thermodynamics-engineering' },
  { name: 'Science Class 6', slug: 'science-class-6' },
  { name: 'IDS Engineering', slug: 'ids-engineering' },
  { name: 'Biology Class 6', slug: 'biology-class-6' },
  { name: 'Maths Class 6', slug: 'maths-class-6' },
  { name: 'English Class 4', slug: 'english-class-4' },
  { name: 'Science Class 5', slug: 'science-class-5' },
  { name: 'Maths Class 8', slug: 'maths-class-8' },
];

export default function Library() {


  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-slate-100">
        <header className="flex justify-end items-end mb-5 mt-4 ">
          <UserButton/>
        </header>

        <div className="flex justify-normal items-center mb-4">
          <input
            type="text"
            placeholder="Search for study"
            className="p-2 border border-gray-300  text-gray-900 rounded-md w-1/3"
        
          />
             <div className='mx-4'>
          <button className="p-2 bg-blue-500 text-white rounded-md">Study</button>
        </div>
          <button className="p-2 bg-blue-500 text-white rounded-md">Filter</button>
        </div>

     

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {studyItems.map((item, index) => (
            <Link key={index} href={`/courses/${item.slug}`}>
              <div className="flex flex-col items-center cursor-pointer">
                <div className="w-20 h-20 bg-neutral-50 rounded-full flex items-center justify-center mb-2">
                  <img src="/Images/book.png" alt="Books" className="w-12 h-12 bg-neutral-50" />
                </div>
                <div className="text-center text-gray-900">{item.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
