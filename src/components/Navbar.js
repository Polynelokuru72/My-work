import React from "react";

const Navbar = () => (
  <nav className="fixed top-0 w-full flex justify-between items-center p-6 bg-gray-900 text-white shadow-lg z-10">
    <h1 className="text-2xl font-bold hover:text-blue-400 transition duration-300">Pauline's Portfolio</h1>
    <div className="space-x-8">
      <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
      <a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a>
      <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
    </div>
  </nav>
);

export default Navbar;
