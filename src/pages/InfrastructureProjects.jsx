import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import { infrastructureProjects } from "@/data/projects";
import HeroBg from "@/assets/images/99a09c3dcccc7952604dc571e068168239d3f6d1.webp";

export default function InfrastructureProjects() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsHero
          title="INFRASTRUCTURE PROJECTS"
          bg={HeroBg}
          text="We Design And Execute Comprehensive Infrastructure Projects That Support Sustainable Development. Each Project Is Delivered With A Strong Focus On Engineering Excellence, Safety, Long-Term Performance, And Compliance With National And International Standards."
        />
        <ProjectsGrid items={infrastructureProjects} title="INFRASTRUCTURE PROJECTS" />
      </main>
      <Footer />
    </>
  );
}
