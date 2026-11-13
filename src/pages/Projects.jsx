import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import WhatWeOffer from "@/components/WhatWeOffer";

export default function Projects() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsHero />
        <ProjectsGrid />
        <WhatWeOffer />
      </main>
      <Footer />
    </>
  );
}
