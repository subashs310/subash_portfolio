import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faSass,
  faGit,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";

const Skill = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        {/* Left side: Text content */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <p className="text-gray-600">
            With a strong foundation in web development, I possess a blend of
            creative and technical skills to deliver high-quality solutions. My
            expertise includes crafting user-centric websites with an emphasis
            on both aesthetics and functionality. I continuously strive to
            expand my skill set, staying up to date with the latest trends and
            technologies in the ever-evolving field of web development.
          </p>
        </div>

        {/* Right side: Icons */}
        <div
          className={`w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-8 transition-transform duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          {/* Skill Icons */}
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300"
            >
              <FontAwesomeIcon
                icon={skill.icon}
                size="3x"
                className={`text-${skill.color}`}
              />
              <span className="mt-2 text-gray-700 font-semibold">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const skills = [
  { icon: faHtml5, color: "orange-600", label: "HTML" },
  { icon: faCss3Alt, color: "blue-600", label: "CSS" },
  { icon: faJs, color: "yellow-500", label: "JavaScript" },
  { icon: faReact, color: "blue-500", label: "React.js" },
  { icon: faReact, color: "cyan-500", label: "React Native" },
  { icon: faSass, color: "pink-500", label: "Sass" },
  { icon: faPython, color: "green-500", label: "Python" },
  { icon: faDatabase, color: "indigo-500", label: "MySQL" },
  { icon: faGit, color: "orange-500", label: "Git" },
  { icon: faServer, color: "gray-700", label: "CI/CD" },
];

export default Skill;
