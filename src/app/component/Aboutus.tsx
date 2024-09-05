const AboutUs = () => {
    return (
      <section className="about-us-container py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-teal-800 mb-4 text-center">
            About Us
          </h2>
          <p className="text-xl text-gray-700 mb-6 text-center">
            We are passionate about delivering high-quality educational resources that
            help you achieve your learning goals. Our mission is to provide modern
            courses tailored to the needs of today's learners.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-teal-700 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                Our mission is to empower individuals with the knowledge and skills needed to excel in their careers. We strive to create a learning environment that is both engaging and effective, utilizing cutting-edge technology and industry expertise.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-teal-700 mb-2">Our Vision</h3>
              <p className="text-gray-600">
                We envision a future where every learner has access to the best educational resources and opportunities. Our vision is to be a leading provider of online education, continually innovating to meet the evolving needs of our users.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <h3 className="text-2xl font-semibold text-teal-700 mb-2">Join Us on Our Journey</h3>
            <p className="text-gray-600 mb-4">
              Whether you're looking to advance your skills or start a new career, we're here to support you every step of the way. Explore our courses and become part of our learning community today.
            </p>
            <a href="#courses" className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700 transition-colors duration-300">
              Explore Courses
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  