import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareerHero from "@/components/CareerHero";
import VisionStats from "@/components/VisionStats";
import Commitment from "@/components/Commitment";
import OpenRoles from "@/components/OpenRoles";
import WhatWeOffer from "@/components/WhatWeOffer";

const careerStats = [
  { value: "+100", label: "Clients", desc: "Building strong partnerships grounded in trust" },
  { value: "+25", label: "Years", desc: "Earning trust through efficient execution" },
  { value: "+300", label: "Projects", desc: "Assigned to deliver major national projects" },
  { value: "+500", label: "Workers", desc: "Clear strategy guides TechnoAlex to success" },
];

export default function Career() {
  return (
    <>
      <Navbar />
      <main>
        <CareerHero />
        <VisionStats stats={careerStats} intro="Our Goal Is Beyond Delivering Projects, We Aim To Create Sustainable Value For Our Clients, Employees, And Community. By Executing National Projects With Precision, Innovation, And Trust, We Contribute To Egypt's Development Journey And Build A Lasting Impact For Future Generations." />
        <Commitment />
        <OpenRoles />
        <WhatWeOffer />
      </main>
      <Footer />
    </>
  );
}
