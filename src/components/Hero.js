import React from "react";

const Hero = () => (
  <section className="flex flex-col justify-center items-center h-screen bg-black bg-opacity-50 text-center text-white p-6 space-y-6">
    <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">Hi, I'm Pauline</h1>
    <p className="mt-4 text-xl md:text-2xl">Full-Stack Developer from Kenya, building beautiful digital experiences.</p>
    <button className="mt-8 px-8 py-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-300 animate-pulse">
      View My Work
    </button>
  </section>
);

export default Hero;
