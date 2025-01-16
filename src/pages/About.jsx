import React from "react";
import { FaGithub, FaLinkedin, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <section className="py-20 relative bg-white-500 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white-500 to-green-500 opacity-50"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "loop" }}
      />
      <div className="container mx-auto bg-white-500 text-center space-y-6 relative z-10">
        <p className="text-lg text-white-600 max-w-3xl mx-auto">
          I am a passionate frontend developer with a strong focus on React and React Native. My journey in web development has equipped me with the ability to craft dynamic, user-friendly websites and mobile applications. With a keen eye for detail and a drive for clean, efficient code, I create seamless experiences that are both visually appealing and highly functional. I am always eager to learn and embrace new technologies to further enhance the user experience.
        </p>

        <motion.div
          className="flex justify-center space-x-6 mb-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0.5, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 1, delayChildren: 0.5, staggerChildren: 0.2 }}
        >
          <motion.a
            href="https://leetcode.com/u/subash_03/" target="_blank"
            rel="noreferrer"
            className="text-4xl hover:text-yellow-500 transition duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <SiLeetcode />
          </motion.a>
          <motion.a
            href="https://github.com/subashs310" target="_blank"
            rel="noreferrer"
            className="text-4xl hover:text-yellow-500 transition duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/subash-saks03042003/" target="_blank"
            rel="noreferrer"
            className="text-4xl hover:text-yellow-500 transition duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://linktr.ee/subash_S" target="_blank"
            rel="noreferrer"
            className="text-4xl hover:text-yellow-500 transition duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaLink />
          </motion.a>
        </motion.div>

        {/* Resume download button */}
        <a
  href="https://drive.google.com/file/d/1YrfU8o80KklZsiEXyS4eri9DzITb5MPn/view?usp=sharing"
  target="_blank"
  rel="noreferrer"
  className="block w-40 mx-auto py-2 px-4 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-700 transition duration-300"
>
  Download CV
</a>


      </div>
    </section>
  );
};

export default About;
