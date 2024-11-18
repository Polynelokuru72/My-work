// App.js
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("C:\Users\Pauline\Desktop\React\polyne\IMG_20240921_102414_636.jpg")` }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
