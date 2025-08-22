
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import profileImg from "./assets/profile.jpg"; // Ensure you have an image in your project

export default function About() {
  const skills = [
    "HTML/CSS",
    "Tailwind CSS",
    "React",
    "MySQL",
    "Web Development",
    "Java",
    "Python",
    "scikit-learn",
  ];

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-2">About Me</h2>
        
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Profile image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-blue-500"
        >
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h3 className="text-2xl font-semibold mb-4">Profiles</h3>
          <div className="flex flex-wrap gap-6 text-blue-600 text-lg">
            <a
              href="https://github.com/srichandanak"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/Srichandana Kondapaturi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://leetcode.com/srichandana_k"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <FaCode /> LeetCode
            </a>
          </div>

          <h3 className="text-2xl font-semibold mt-10 mb-4">Skills</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-r from-blue-200 to-blue-500 text-white px-4 py-2 rounded-xl shadow-md transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
          
        </motion.div>
        
      </div>
      <div>
        <p> </p><br />
      </div>
      <div>
        <p className="text-gray-700 text-lg leading-relaxed">
          I'm a 2nd year B.Tech AIML student driven by an intense passion for crafting meaningful web applications and intelligent systems that solve real-world problems. For me, coding isn’t just a skill — it's a canvas where logic meets creativity.
        <br /><br />
          My ambition is sky-high, but it’s <span className="font-semibold text-blue-600">discipline</span> and <span className="font-semibold text-blue-600">hard work</span> that fuel my daily pursuit of excellence. I believe these are not just habits — they're my core superpowers.
        <br /><br />
          I'm constantly experimenting at the intersection of AI and software, turning complex ideas into real, scalable solutions. Whether it's building responsive web apps or training smart ML models, I strive to grow through every bug, build, and breakthrough.
        <br /><br />
          Every project I take on reflects my strong values, my obsession with clean and impactful code, and a relentless desire to learn, iterate, and lead. I’m not just learning tech — I’m shaping the future I want to build with it.
        </p>

      </div>
      

    </div>
  );
}
