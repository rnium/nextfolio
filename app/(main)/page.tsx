import { Box } from "@mui/material";
import Hero from "../components/homepage/Hero";
import Projects from "../components/homepage/Projects";
import Skills from "../components/homepage/Skills";
import About from "../components/homepage/About";
import Contact from "../components/homepage/Contact";

export default function Home() {
  return (
    <div
      className="max-sm:my-10 my-16 space-y-28"
    >
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}
