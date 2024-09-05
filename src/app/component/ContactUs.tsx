"use client"
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  role: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    role: 'teacher',
    message: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white shadow-lg rounded-lg border border-green-500 relative">
      <h1 className="text-3xl font-bold text-green-800 text-center mb-6">Contact Us</h1>
      <p className="text-gray-700 text-center mb-8">
        Whether you are a teacher or a student, feel free to reach out to the GyaanSaras admin for assistance.
      </p>

      {submitted ? (
        <div className="text-center text-green-700 text-xl font-bold">
          Your message has been sent successfully! We will get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-800">Name</label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-3 border border-gray-400 rounded-md focus:outline-none focus:border-green-600 text-gray-900"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-800">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 mt-1 p-3 border border-gray-400 rounded-md focus:outline-none focus:border-green-600 text-gray-900"
                  placeholder="Your Email"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-800">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full mt-1 p-3 border border-gray-400 rounded-md focus:outline-none focus:border-green-600 text-gray-900"
            >
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-800">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full mt-1 p-3 border border-gray-400 text-gray-900 rounded-md focus:outline-none focus:border-green-600"
              placeholder="Your message here..."
            ></textarea>
          </div>

          {error && <p className="text-red-600">{error}</p>}

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md transition duration-300"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      )}

      <div className="flex justify-around items-center mt-12">
        <div className="flex items-center">
          <FaPhone className="text-green-600 mr-2" /> 
          <span className="text-gray-800 font-medium">+91-123-456-7890</span>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-green-600 mr-2" /> 
          <span className="text-gray-800 font-medium">123, GyaanSaras Campus, Delhi, India</span>
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-6">
        <a href="https://linkedin.com" className="text-green-600 text-2xl hover:text-green-700">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com" className="text-green-600 text-2xl hover:text-green-700">
          <FaInstagram />
        </a>
        <a href="https://github.com" className="text-green-600 text-2xl hover:text-green-700">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
