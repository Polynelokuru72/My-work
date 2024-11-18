import React from "react";

const Contact = () => (
  <section id="contact" className="p-10 bg-gray-900 text-white text-center shadow-lg border-t-4 border-blue-500">
    <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
    <p className="mb-4">I'd love to hear from you. Drop a message below!</p>
    <form className="space-y-4 max-w-md mx-auto">
      <input type="text" placeholder="Name" className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400" />
      <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400" />
      <textarea placeholder="Message" className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400"></textarea>
      <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;
