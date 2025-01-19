import { useState, useEffect } from "react";
import Welcome from "../components/Welcome";
import Connect from "../components/Connect";
import Education from "../components/Education";
import TechnicalSkills from "../components/TechnicalSkills";
import FeaturedProjects from "../components/FeaturedProjects";
import OpenSourceContributions from "../components/OpenSourceContributions";
import Awards from "../components/Awards";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="bento-grid">
        <Welcome />
        <Connect />
        <Education />
        <TechnicalSkills />
        <FeaturedProjects />
        <OpenSourceContributions />
        <Awards />
      </div>
    </div>
  );
};

export default Index;