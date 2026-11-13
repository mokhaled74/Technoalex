import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Career from "@/pages/Career";
import Contact from "@/pages/Contact";
import SupplierRegister from "@/pages/SupplierRegister";
import InfrastructureProjects from "@/pages/InfrastructureProjects";
import WaterPumpingStations from "@/pages/WaterPumpingStations";
import CivilWorks from "@/pages/CivilWorks";
import IrrigationUtilities from "@/pages/IrrigationUtilities";
import DevelopmentProjects from "@/pages/DevelopmentProjects";
import ProjectDetails from "@/pages/ProjectDetails";
import MasrElgdeda from "@/pages/MasrElgdeda";
import AbbasiyaGroundwater from "@/pages/AbbasiyaGroundwater";
import MohamedNaguib from "@/pages/MohamedNaguib";
import Octagon from "@/pages/Octagon";
import MainIrrigationLines from "@/pages/MainIrrigationLines";
import NewDeltaStation6 from "@/pages/NewDeltaStation6";
import MostakbalMisr from "@/pages/MostakbalMisr";
import NewDeltaStation3 from "@/pages/NewDeltaStation3";
import AquaHeneish from "@/pages/AquaHeneish";

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    const watch = () =>
      document
        .querySelectorAll("[data-reveal-left]:not(.is-visible)")
        .forEach((el) => io.observe(el));
    const checkFallback = () =>
      document
        .querySelectorAll("[data-reveal-left]:not(.is-visible)")
        .forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.85) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
    watch();
    checkFallback();
    window.addEventListener("scroll", checkFallback, { passive: true });
    window.addEventListener("resize", checkFallback);
    const mo = new MutationObserver(() => {
      watch();
      checkFallback();
    });
    mo.observe(document.getElementById("root"), { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", checkFallback);
      window.removeEventListener("resize", checkFallback);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/career" element={<Career />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/supplier-register" element={<SupplierRegister />} />
      <Route path="/infrastructure-projects" element={<InfrastructureProjects />} />
      <Route path="/water-pumping-stations" element={<WaterPumpingStations />} />
      <Route path="/civil-construction-works" element={<CivilWorks />} />
      <Route path="/irrigation-utilities" element={<IrrigationUtilities />} />
      <Route path="/development-integrated-projects" element={<DevelopmentProjects />} />
      <Route path="/projects/future-of-egypt-station-5" element={<ProjectDetails />} />
      <Route path="/projects/masr-elgdeda-development" element={<MasrElgdeda />} />
      <Route path="/projects/abbasiya-groundwater-drainage" element={<AbbasiyaGroundwater />} />
      <Route path="/projects/mohamed-naguib-military-base" element={<MohamedNaguib />} />
      <Route path="/projects/the-octagon-ministry-of-defense-complex" element={<Octagon />} />
      <Route path="/projects/main-irrigation-lines-center-pivot" element={<MainIrrigationLines />} />
      <Route path="/projects/new-delta-pumping-station-6" element={<NewDeltaStation6 />} />
      <Route path="/projects/mostakbal-misr-booster-pump-stations" element={<MostakbalMisr />} />
      <Route path="/projects/new-delta-pumping-station-3" element={<NewDeltaStation3 />} />
      <Route path="/projects/aqua-heneish-project" element={<AquaHeneish />} />
    </Routes>
  );
}
