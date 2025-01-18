import React from "react";
import { FaGithub, FaLinkedin, FaLink, FaArrowUp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import Image from "../assest/image.jpg"; // Ensure the path is correct
import About from './About';
import Contact from './Contact';
import Project from './Project';
import Service from './Service';
import Skill from './Skills';

const Portfolio = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white py-4 px-6 shadow-lg z-50">
        <motion.div
          className="flex justify-between items-center max-w-6xl mx-auto"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <div className="text-2xl font-bold cursor-pointer" onClick={() => handleScroll("home")}>
            Subash Shankar
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-6">
            {[ 
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Skills", id: "skills" },
              { label: "Projects", id: "projects" },
              { label: "Services", id: "services" },
              { label: "Contact Me", id: "contact" },
            ].map((link) => (
              <motion.a
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="text-lg font-medium cursor-pointer hover:text-blue-500 transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      </header>

      {/* Main Content */}
      <div id="home" className="relative h-screen flex items-center justify-center text-white text-center font-sans overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{ backgroundImage: `url(${Image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <div>
          <motion.h1 className="text-5xl font-bold mb-2" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            Hi, I'm Subash
          </motion.h1>
          <motion.h2 className="text-2xl font-semibold mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
            Frontend Developer
          </motion.h2>
          <motion.div className="flex justify-center space-x-6 mb-6" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} transition={{ duration: 1, delayChildren: 0.5, staggerChildren: 0.2 }}>
            <motion.a href="https://leetcode.com/u/subash_03/" target="_blank" rel="noreferrer" className="text-2xl hover:text-yellow-500 transition duration-300" whileHover={{ scale: 1.2 }}><SiLeetcode /></motion.a>
            <motion.a href="https://github.com/subashs310" target="_blank" rel="noreferrer" className="text-2xl hover:text-yellow-500 transition duration-300" whileHover={{ scale: 1.2 }}><FaGithub /></motion.a>
            <motion.a href="https://www.linkedin.com/in/subash-saks03042003/" target="_blank" rel="noreferrer" className="text-2xl hover:text-yellow-500 transition duration-300" whileHover={{ scale: 1.2 }}><FaLinkedin /></motion.a>
            <motion.a href="https://linktr.ee/subash_S" target="_blank" rel="noreferrer" className="text-2xl hover:text-yellow-500 transition duration-300" whileHover={{ scale: 1.2 }}><FaLink /></motion.a>
          </motion.div>
          <motion.a href="https://drive.google.com/file/d/1VZFkryLO7k9lmVaS_w47C-YYJ8KHgiof/view?usp=sharing" download className="px-6 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded-md text-lg transition duration-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} whileHover={{ scale: 1.1 }}>
            Download CV
          </motion.a>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="h-screen text-gray-800 text-center p-20 relative">
        <motion.div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("../assets/image.jpg")` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} />
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <About />
        </div>
      </div>

      {/* Skills, Projects, Services, Contact sections */}
      <div id="skills" className="h-screen bg-blue-100 text-gray-800 text-center p-20">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>
        <Skill />
      </div>
      <div id="projects" className="h-screen bg-gray-200 text-gray-800 text-center p-20">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <Project />
      </div>
      <div id="services" className="h-screen bg-blue-50 text-gray-800 text-center p-10">
        <h2 className="text-4xl font-bold mb-4">Services</h2>
        <Service />
      </div>
      <div id="contact" className="h-screen bg-gray-700 text-white text-center p-20">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <Contact />
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white  py-8 text-center">
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://leetcode.com/u/subash_03/" target="_blank" rel="noreferrer" className="text-2xl hover:text-yellow-500 transition duration-300"><SiLeetcode /></a>
          <a href="https://github.com/subashs310" target="_blank" rel="noreferrer" className="text-2xl hover:text-yellow-500 transition duration-300"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/subash-saks03042003/"  target="_blank" rel="noreferrer" className="text-2xl hover:text-yellow-500 transition duration-300"><FaLinkedin /></a>
          <a  href="https://linktr.ee/subash_S"  target="_blank" rel="noreferrer" className="text-2xl hover:text-yellow-500 transition duration-300"><FaLink /></a>
        </div>
        <p className="text-lg mt-3">Developed by Subash_AKS</p>
      </footer>

      {/* Scroll Up Button */}
      <div
        onClick={() => handleScroll("home")}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-blue-800 transition duration-300"
      >
        <FaArrowUp size={24} />
      </div>
    </div>
  );
};

export default Portfolio;
