import { Box } from "@mui/material";
import Hero from "../components/homepage/Hero";
import Projects from "../components/homepage/Projects";
import Skills from "../components/homepage/Skills";
import HomepageAbout from "../components/homepage/HomepageAbout";

export default function Home() {
  return (
    <div
      className="my-16 space-y-28"
    >
      <Hero />
      <Projects />
      <Skills />
      <HomepageAbout />
    </div>
  );
}
