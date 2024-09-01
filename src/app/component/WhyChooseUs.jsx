// components/WhyChooseUs.js
import React from 'react';

const WhyChooseUs = () => {
    const features = [
        {
            title: "Expert Instructors",
            description: "Learn from industry experts who are passionate about teaching and dedicated to your success.",
            icon: "👨‍🏫",  // You can replace this with an actual icon/image
        },
        {
            title: "Flexible Learning",
            description: "Access our courses anytime, anywhere, and learn at your own pace on any device.",
            icon: "📚",  // You can replace this with an actual icon/image
        },
        {
            title: "Comprehensive Curriculum",
            description: "Our courses cover everything you need to know, from foundational concepts to advanced topics.",
            icon: "🎓",  // You can replace this with an actual icon/image
        },
        {
            title: "Supportive Community",
            description: "Join a vibrant community of learners and get support whenever you need it.",
            icon: "🤝",  // You can replace this with an actual icon/image
        },
    ];

    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Gyaansaras?</h2>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                            <div className="text-6xl mb-4">{feature.icon}</div> {/* Replace with an image/icon */}
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
