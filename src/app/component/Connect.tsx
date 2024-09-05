import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Anjali Mehra',
    role: 'Engineering Mentor',
    bio: '10+ years in software engineering, specializing in AI and ML technologies.',
    avatar: 'https://i.pravatar.cc/150?img=12',
    linkedin: 'https://linkedin.com/in/anjalimehra',
    github: 'https://github.com/anjalimehra',
    email: 'anjali@gyaansaras.com',
  },
  {
    name: 'Prof. Rajesh Sharma',
    role: 'Business & Management Expert',
    bio: 'Professor of Business Management with a focus on leadership and entrepreneurship.',
    avatar: 'https://i.pravatar.cc/150?img=15',
    linkedin: 'https://linkedin.com/in/rajeshsharma',
    email: 'rajesh@gyaansaras.com',
  },
  {
    name: 'Ms. Priya Kapoor',
    role: 'Arts & Humanities Instructor',
    bio: 'Expert in literature and fine arts with a passion for teaching.',
    avatar: 'https://i.pravatar.cc/150?img=16',
    linkedin: 'https://linkedin.com/in/priyakapoorteacher',
    email: 'priya@gyaansaras.com',
  },
  {
    name: 'Mr. Arjun Verma',
    role: 'Digital Marketing Strategist',
    bio: 'Specialist in SEO, content marketing, and online growth strategies.',
    avatar: 'https://i.pravatar.cc/150?img=17',
    linkedin: 'https://linkedin.com/in/arjunverma',
    github: 'https://github.com/arjunverma',
    email: 'arjun@gyaansaras.com',
  },
  {
    name: 'Dr. Kavita Singh',
    role: 'Data Science Mentor',
    bio: 'PhD in Data Science with a focus on deep learning and big data analytics.',
    avatar: 'https://i.pravatar.cc/150?img=18',
    linkedin: 'https://linkedin.com/in/kavitasingh',
    github: 'https://github.com/kavitasingh',
    email: 'kavita@gyaansaras.com',
  },
  {
    name: 'Mr. Suresh Patel',
    role: 'Full Stack Developer',
    bio: 'Expert in web development, building scalable applications with MERN stack.',
    avatar: 'https://i.pravatar.cc/150?img=19',
    linkedin: 'https://linkedin.com/in/sureshpatel',
    github: 'https://github.com/sureshpatel',
    email: 'suresh@gyaansaras.com',
  },
  {
    name: 'Ms. Neha Gupta',
    role: 'Copywriting Specialist',
    bio: '5+ years experience in copywriting and content strategy for digital platforms.',
    avatar: 'https://i.pravatar.cc/150?img=20',
    linkedin: 'https://linkedin.com/in/nehagupta',
    email: 'neha@gyaansaras.com',
  },
  {
    name: 'Mr. Aditya Malhotra',
    role: 'Social Media Marketing Expert',
    bio: 'Helps brands grow their presence on social media platforms through targeted campaigns.',
    avatar: 'https://i.pravatar.cc/150?img=21',
    linkedin: 'https://linkedin.com/in/adityamalhotra',
    email: 'aditya@gyaansaras.com',
  },
  {
    name: 'Ms. Ritu Jain',
    role: 'Project Management Instructor',
    bio: 'PMP-certified project manager with 8+ years of experience in leading cross-functional teams.',
    avatar: 'https://i.pravatar.cc/150?img=22',
    linkedin: 'https://linkedin.com/in/ritujain',
    email: 'ritu@gyaansaras.com',
  },
  {
    name: 'Mr. Vikram Desai',
    role: 'UI/UX Design Mentor',
    bio: 'Designs intuitive user experiences with a focus on user-centered design principles.',
    avatar: 'https://i.pravatar.cc/150?img=23',
    linkedin: 'https://linkedin.com/in/vikramdesai',
    email: 'vikram@gyaansaras.com',
  },
  {
    name: 'Ms. Shruti Iyer',
    role: 'Cybersecurity Expert',
    bio: 'Provides training on cybersecurity practices and ethical hacking.',
    avatar: 'https://i.pravatar.cc/150?img=24',
    linkedin: 'https://linkedin.com/in/shrutiiyer',
    github: 'https://github.com/shrutiiyer',
    email: 'shruti@gyaansaras.com',
  }
];


const Team = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 p-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-6">Connect with Mentors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div key={member.name} className="p-6 bg-green-50 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-green-800 text-center">{member.name}</h3>
            <p className="text-gray-700 text-center">{member.role}</p>
            <p className="text-gray-600 text-center mt-2">{member.bio}</p>
            <div className="flex justify-center mt-4 space-x-4">
              {member.linkedin && (
                <a href={member.linkedin} className="text-blue-600 text-xl hover:text-blue-800">
                  <FaLinkedin />
                </a>
              )}
              {member.github && (
                <a href={member.github} className="text-gray-600 text-xl hover:text-gray-800">
                  <FaGithub />
                </a>
              )}
              {member.email && (
                <a href={`mailto:${member.email}`} className="text-green-600 text-xl hover:text-green-800">
                  <FaEnvelope />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
