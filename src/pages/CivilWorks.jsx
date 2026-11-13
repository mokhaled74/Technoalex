import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import { civilProjects } from "@/data/projects";
import HeroBg from "@/assets/images/b9e54a8ee8ec415b22f7f994f027e91c8d63f6c7.png";
import IconHelmet from "@/assets/images/18906e55072e31eebf42f773cecc2a2e6268f991.gif";

export default function CivilWorks() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsHero
          title="CIVIL & CONSTRUCTION WORKS"
          bg={HeroBg}
          text="From Initial Site Preparation To Structural Execution And Finishing. We Specialize In Delivering Industrial Structures Built On Precision, Quality Materials, And Strict Adherence To Safety And Engineering Standards. Every Project Is Managed With Efficiency, Ensuring Timely Delivery And High-Quality, Reliable Outcomes."
        />
        <ProjectsGrid items={civilProjects} title="CIVIL & CONSTRUCTION WORKS" icon={IconHelmet} />
      </main>
      <Footer />
    </>
  );
}
