import React from "react";

const experiences = [
  {
    title: "Experience 1",
    description: "Short description about project 1.",
    link: "https://github.com/yourusername/project1",
    date: "Jan 2023",
  },
  {
    title: "Experience 2",
    description: "Short description about project 2.",
    link: "https://colab.research.google.com/yourproject2",
    date: "Oct 2023",
  },
];

export default function Experiences() {
  return (
    <div className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">My Experience</h2>
      <div className="relative border-l-4 border-blue-200 pl-8">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 relative group">
            {/* Timeline dot */}
            <span className="absolute left-[-14px] top-3 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-lg"></span>
            
            {/* Date */}
            <span className="absolute -left-28 top-3 text-sm text-gray-500 font-semibold">
              {exp.date}
            </span>

            {/* Card */}
            <div className="bg-white p-6 rounded-2xl shadow-lg transform transition duration-300 group-hover:scale-105 group-hover:shadow-blue-200">
              <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
              <p className="text-gray-600 mb-4">{exp.description}</p>
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Know More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
