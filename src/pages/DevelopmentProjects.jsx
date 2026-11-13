import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import { developmentProjects } from "@/data/projects";
import HeroBg from "@/assets/images/b857fb24471a3ec4391359b40dfd2f569034dd7a.jpg";
import IconTeam from "@/assets/images/7e87c316e55cc7765f6d8d710ea4137c9d37af98.gif";

const text =
  "We Offer Comprehensive Development Services, Managing Integrated Projects That Combine " +
  "Infrastructure, Construction, And Utilities. Our Approach Ensures Seamless Coordination Across " +
  "Disciplines, Delivering Cohesive, Functional Developments. These Projects Are Executed With A " +
  "Strategic Focus On Value Creation, Sustainability, And Long-Term Community Impact.";

export default function DevelopmentProjects() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsHero title="DEVELOPMENT & INTEGRATED PROJECTS" bg={HeroBg} text={text} />
        <ProjectsGrid
          items={developmentProjects}
          title="DEVELOPMENT & INTEGRATED PROJECTS"
          icon={IconTeam}
        />
      </main>
      <Footer />
    </>
  );
}
