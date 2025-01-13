import React from "react";

const Project = () => {
    return (
      <section className="py-20 ">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* E-Commerce Platform (Amazonia Clone) */}
            <div className="p-8 bg-indigo-600 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:bg-indigo-700">
              <h3 className="text-2xl font-semibold text-white mb-4">User-Friendly E-Commerce Website (Amazonia Clone)</h3>
              <p className="text-gray-200 mb-4">A fully functional e-commerce platform built with React.js, JavaScript, and CSS, providing a seamless shopping experience.</p>
              <a href="https://github.com/yourusername/ecommerce-platform" className="text-yellow-300 hover:text-white transition-all duration-300">View on GitHub</a>
            </div>

            {/* Interactive Weather App */}
            <div className="p-8 bg-teal-500 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:bg-teal-600">
              <h3 className="text-2xl font-semibold text-white mb-4">Interactive Weather App</h3>
              <p className="text-gray-200 mb-4">A weather app that fetches real-time data using an API, offering an intuitive and responsive interface.</p>
              <a href="https://github.com/yourusername/weather-app" className="text-yellow-300 hover:text-white transition-all duration-300">View on GitHub</a>
            </div>

            {/* College Website */}
            <div className="p-8 bg-purple-600 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:bg-purple-700">
              <h3 className="text-2xl font-semibold text-white mb-4">College Website</h3>
              <p className="text-gray-200 mb-4">A dynamic website developed using React.js for a college, featuring a modern design and user-friendly layout.</p>
              <a href="https://github.com/yourusername/college-website" className="text-yellow-300 hover:text-white transition-all duration-300">View on GitHub</a>
            </div>

          </div>
        </div>
      </section>
    );
};

export default Project;
