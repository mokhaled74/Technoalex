import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisionStats from "@/components/VisionStats";
import Projects from "@/components/Projects";
import Trusted from "@/components/Trusted";
import LatestProjects from "@/components/LatestProjects";
import WhatWeOffer from "@/components/WhatWeOffer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionStats topPadding={false} />
        <Projects />
        <Trusted />
        <LatestProjects />
        <WhatWeOffer />
      </main>
      <Footer />
    </>
  );
}
