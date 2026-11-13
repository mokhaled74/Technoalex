import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import { waterPumpingProjects } from "@/data/projects";
import IconWrench from "@/assets/images/d48ee2d5f3e5a16dd3f9110152a93f4e06851045.gif";

export default function WaterPumpingStations() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsHero
          title="WATER PUMPING STATIONS"
          text="We Provide Complete Electromechanical Solutions For A Wide Range Of Facilities And Environments. Ensuring Seamless Integration, Operational Efficiency, And Reliable Performance Across All Electromechanical Components."
        />
        <ProjectsGrid items={waterPumpingProjects} title="WATER PUMPING STATIONS" icon={IconWrench} />
      </main>
      <Footer />
    </>
  );
}
