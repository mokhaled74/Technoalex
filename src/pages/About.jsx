import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import VisionStats from "@/components/VisionStats";
import OurVision from "@/components/OurVision";
import CoreValues from "@/components/CoreValues";
import OurMessage from "@/components/OurMessage";
import Board from "@/components/Board";
import Commitment from "@/components/Commitment";

const aboutStats = [
  { value: "+100", label: "Clients", desc: "Building strong partnerships grounded in trust" },
  { value: "+25", label: "Years", desc: "Earning trust through efficient execution" },
  { value: "+300", label: "Projects", desc: "Assigned to deliver major national projects" },
  { value: "+500", label: "Workers", desc: "Clear strategy guides TechnoAlex to success" },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <VisionStats stats={aboutStats} intro="Our Goal Is Beyond Delivering Projects, We Aim To Create Sustainable Value For Our Clients, Employees, And Community. By Executing National Projects With Precision, Innovation, And Trust, We Contribute To Egypt's Development Journey And Build A Lasting Impact For Future Generations." />
        <OurVision />
        <CoreValues />
        <OurMessage />
        <Board />
        <Commitment />
      </main>
      <Footer />
    </>
  );
}
