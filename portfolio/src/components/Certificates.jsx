import React from "react";

const certificates = [
  {
    title: "Certificate 1",
    description: "Short description about course 1.",
    link: "https://github.com/yourusername/project1",
  },
  {
    title: "Certificate 2",
    description: "Short description about course 2.",
    link: "https://colab.research.google.com/yourproject2",
  },
];

export default function Certificates() {
  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">I have done the following online courses!</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {certificates.map((certificates, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{certificates.title}</h3>
            <p className="text-gray-600 mb-4">{certificates.description}</p>
            <a
              href={certificates.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
