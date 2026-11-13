import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import { irrigationProjects } from "@/data/projects";
import HeroBg from "@/assets/images/157959f3398cfef07ce8ecf52cfc1c992049d965.webp";
import IconSpray from "@/assets/images/a92c2cb56c93086fadd8f4ffb98662e1913698f5.gif";

const text =
  "Developing Advanced Irrigation And Utility Systems Designed To Optimize Water Use " +
  "And Support Agricultural And Landscape Sustainability. Each Solution Is Engineered To " +
  "Maximize Efficiency, Reduce Waste, And Provide Reliable Long-Term Performance " +
  "Across Each Project.";

export default function IrrigationUtilities() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsHero title="IRRIGATION & UTILITIES" bg={HeroBg} text={text} />
        <ProjectsGrid items={irrigationProjects} title="IRRIGATION & UTILITIES" icon={IconSpray} />
      </main>
      <Footer />
    </>
  );
}
