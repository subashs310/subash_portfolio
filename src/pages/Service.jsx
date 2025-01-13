import React from "react";

const Service = () => {
  return (
    <section className="py-20 bg-gray">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-blue-500 text-white rounded-lg shadow-md hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-bold mb-2">Web Development</h3>
            <p className="text-sm">
              Creating websites and web applications using technologies like HTML, CSS, JavaScript, and various web frameworks.
              We ensure responsive design and optimal user experience across devices.
              Our services also include integrating APIs and backend services for dynamic content management.
            </p>
          </div>
          <div className="p-6 bg-purple-500 text-white rounded-lg shadow-md hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-bold mb-2">Database Management</h3>
            <p className="text-sm">
              Designing, implementing, and managing databases to store and retrieve data efficiently.
              We work with relational and non-relational databases like MySQL, PostgreSQL, and MongoDB.
              Our solutions ensure data integrity, security, and performance optimization for large-scale systems.
            </p>
          </div>
          <div className="p-6 bg-yellow-500 text-white rounded-lg shadow-md hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h3 className="text-2xl font-bold mb-2">Software Developer</h3>
            <p className="text-sm">
              Planning and designing the overall structure and architecture of software systems.
              We follow best practices in software engineering to create scalable and maintainable applications.
              Our expertise spans desktop, web, and cloud-based systems, ensuring robust and efficient solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
