"use client"
import { useState } from 'react';
import Link from 'next/link';

interface Course {
  id: number;
  title: string;
  description: string;
  resources: string[];
}

const courses: Course[] = [
  { id: 1, title: 'Data Structures and Algorithms', description: 'Learn fundamental data structures and algorithms.', resources: ['Resource 1', 'Resource 2', 'Resource 3'] },
  { id: 2, title: 'Web Development Fundamentals', description: 'Basics of web development including HTML, CSS, and JavaScript.', resources: ['Resource 1', 'Resource 2'] },
  { id: 3, title: 'Advanced JavaScript', description: 'In-depth look into advanced JavaScript concepts and patterns.', resources: ['Resource 1', 'Resource 2', 'Resource 3', 'Resource 4'] },
  { id: 4, title: 'React and Next.js', description: 'Build modern web applications using React and Next.js.', resources: ['Resource 1', 'Resource 2', 'Resource 3'] },
  { id: 5, title: 'TypeScript for React', description: 'TypeScript basics and advanced techniques for React applications.', resources: ['Resource 1', 'Resource 2'] },
  { id: 6, title: 'Machine Learning Basics', description: 'Introduction to machine learning concepts and algorithms.', resources: ['Resource 1', 'Resource 2', 'Resource 3'] },
  { id: 7, title: 'Database Management Systems', description: 'Understanding databases, SQL, and NoSQL.', resources: ['Resource 1', 'Resource 2', 'Resource 3'] },
  { id: 8, title: 'Cloud Computing Fundamentals', description: 'Basics of cloud computing and services.', resources: ['Resource 1', 'Resource 2'] },
  { id: 9, title: 'Cybersecurity Essentials', description: 'Fundamentals of cybersecurity and best practices.', resources: ['Resource 1', 'Resource 2', 'Resource 3', 'Resource 4'] },
  { id: 10, title: 'Software Engineering Principles', description: 'Core principles and practices of software engineering.', resources: ['Resource 1', 'Resource 2'] },
];

const Library = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-3xl font-semibold mb-6">Course Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`p-5 border rounded-lg cursor-pointer transition-all ${
              selectedCourse?.id === course.id ? 'bg-teal-700 border-teal-500' : 'bg-gray-800 border-gray-700'
            } hover:bg-teal-700 border-2`}
            onClick={() => handleCourseClick(course)}
          >
            <h3 className="text-xl font-medium">{course.title}</h3>
            <p className="text-gray-300 mt-2">{course.description}</p>
            <ul className="mt-4 space-y-2">
              {course.resources.map((resource, index) => (
                <li key={index} className="text-teal-300">{resource}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <div className="mt-8 p-6 border rounded-lg bg-gray-800">
          <h2 className="text-2xl font-semibold">{selectedCourse.title}</h2>
          <p className="text-gray-300 mt-2">{selectedCourse.description}</p>
          <ul className="mt-4 space-y-2">
            {selectedCourse.resources.map((resource, index) => (
              <li key={index} className="text-teal-300">{resource}</li>
            ))}
          </ul>
          <Link href={`/courses/${selectedCourse.id}`} passHref>
            <button className="mt-4 inline-block px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
              View More Details
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Library;
