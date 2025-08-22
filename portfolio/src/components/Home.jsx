import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "./assets/hero-ai.svg"; // Download from unDraw or similar

export default function Home() {
  return (
    <>
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen flex flex-col items-center justify-center px-6 py-16">
      {/* Hero section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl w-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Hi, I'm Srichandana :)
          </h1>
          <p className="text-lg text-gray-700 font-medium mb-6">
            B.Tech AIML Student | Passionate about AI, ML & Web Development
          </p>
          <p className="text-gray-600 text-md max-w-xl leading-relaxed">
            I'm a 3rd year student who loves building web apps and exploring the
            power of intelligent systems. I'm deeply driven by ambition, but it's{" "}
            <strong>discipline</strong> and <strong>hard work</strong> that shape how I
            learn, build, and grow every day.
          </p>
          <p>My curiosity pushes me to keep learning, </p>
          <p>
            and I often take guidance from amazing AI tools like{" "}
            <a
              href="https://chat.openai.com"
              className="text-blue-600 font-semibold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ChatGPT
            </a>{" "}
            and{" "}
            <a
              href="https://www.perplexity.ai"
              className="text-purple-600 font-semibold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Perplexity.ai
            </a>
          </p>
          <p>— credit where it's due!</p>

          {/* Achievements */}
          <ul className="text-left mt-6 space-y-2 font-medium text-gray-800">
            <li>✨ Built <strong>2+ functional web applications</strong></li>
            <li>🧠 Created a <strong>basic but working ML model</strong></li>
            <li>📚 Constantly learning through <strong>hands-on practice & curiosity</strong></li>
            <li>💡 Always exploring <strong>new tech and real-world applications</strong></li>
          </ul>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="../assets/Srichandana_Resume_2025_finalUpdated_August (1).pdf"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              download
            >
              📄 Download Resume
            </a>
            <Link
              to="/contact"
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              ✉️ Contact Me
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-8 text-sm flex flex-wrap gap-6 text-blue-600 font-semibold">
            <Link to="/about" className="hover:underline">About Me</Link>
            <Link to="/experience" className="hover:underline">Experience</Link>
            <Link to="/certificates" className="hover:underline">Certificates</Link>
            <Link to="/blog" className="hover:underline">My Blogs</Link>
          </div>
        </motion.div>

        {/* Hero Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={heroImage}
            alt="AI Illustration"
            className="w-80 max-w-full"
          />
        </motion.div>
      </div>

      {/* Quote Section */}
      <div className="max-w-xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
        <blockquote className="text-xl italic text-gray-700 border-l-4 border-blue-500 pl-4">
          “Ambition is my fuel, but discipline and hard work are my engines.”
          <footer>— Guess who</footer>
        </blockquote>
      </div>

      {/* Footer */}
      <p className="mt-12 text-sm text-gray-500 text-center">
        Powered in part by{" "}
        <a
          href="https://chat.openai.com"
          className="text-blue-600 font-medium underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          ChatGPT
        </a>{" "}
        and{" "}
        <a
          href="https://perplexity.ai"
          className="text-purple-600 font-medium underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Perplexity.ai
        </a>{" "}
        — my learning companions.
      </p>
    </div>
    </>
  );
}
