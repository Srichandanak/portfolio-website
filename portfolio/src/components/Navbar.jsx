import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-5 px-10 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold text-blue-700">My Portfolio</h1>
      <div className="space-x-6 text-lg">
        <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
        <Link to="/projects" className="text-gray-700 hover:text-blue-600 font-medium">Projects</Link>
        <Link to="/certificates" className="text-gray-700 hover:text-blue-600 font-medium">Certificates</Link>
        <Link to="/experience" className="text-gray-700 hover:text-blue-600 font-medium">Experience</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
        {/* <Link to="/blog" className="text-gray-700 hover:text-blue-600 font-medium">My Blogs</Link> */}
      </div>
    </nav>
  );
}
