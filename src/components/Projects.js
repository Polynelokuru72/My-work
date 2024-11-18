import React from "react";

const Projects = () => (
  <section id="projects" className="p-10 bg-gray-100 text-gray-800 text-center">
    <h2 className="text-4xl font-bold mb-6">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {["Project 1", "Project 2", "Project 3"].map((project, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2">{project}</h3>
          <p>A brief description of {project} with a hover effect to make it stand out.</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
