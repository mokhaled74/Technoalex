import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import VisionStats from "@/components/VisionStats";
import ContactInfo from "@/components/ContactInfo";
import WhatWeOffer from "@/components/WhatWeOffer";
import LatestProjects from "@/components/LatestProjects";

const contactStats = [
  { value: "+100", label: "Clients", desc: "Building strong partnerships grounded in trust" },
  { value: "+25", label: "Years", desc: "Earning trust through efficient execution" },
  { value: "+300", label: "Projects", desc: "Assigned to deliver major national projects" },
  { value: "+500", label: "Workers", desc: "Clear strategy guides TechnoAlex to success" },
];

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <VisionStats stats={contactStats} intro="Our Goal Is Beyond Delivering Projects, We Aim To Create Sustainable Value For Our Clients, Employees, And Community. By Executing National Projects With Precision, Innovation, And Trust, We Contribute To Egypt's Development Journey And Build A Lasting Impact For Future Generations." />
        <ContactInfo />
        <WhatWeOffer />
        <LatestProjects padded />
      </main>
      <Footer />
    </>
  );
}
