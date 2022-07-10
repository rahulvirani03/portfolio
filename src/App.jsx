import { motion } from "framer-motion";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Fragment, useRef } from "react";
import { Intro } from "./Components/Intro";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";
import { Contact } from "./Components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
