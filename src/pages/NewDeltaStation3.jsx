import ProjectDetailView from "@/components/ProjectDetailView";
import HeroBg from "@/assets/images/f14bbed2a7af7b812ee231ccba75c8030387db9d.webp";
import InfoImg from "@/assets/images/157959f3398cfef07ce8ecf52cfc1c992049d965.jpg";
import Slide1 from "@/assets/images/bc26ef6df827e84b3bf21900ff16380f8d2ab4b5.png";
import Slide2 from "@/assets/images/ea43f685e20cbd40eed1dd5d9a5fa9e196c5a7ce.png";
import Slide3 from "@/assets/images/f14bbed2a7af7b812ee231ccba75c8030387db9d.webp";

export default function NewDeltaStation3() {
  return (
    <ProjectDetailView
      title="New Delta Project – Pumping Station 3"
      heroBg={HeroBg}
      infoImg={InfoImg}
      status="UNDER CONSTRUCTION"
      location="New Delta, Egypt"
      consultant="Hydro Engineering Consultants"
      year="2025"
      specs={["Consultant – Hydro Engineering Consultants", "Capacity – 10 Million M³/Day"]}
      description={
        <p>
          TechnoAlex Has Undertaken The Civil And Electromechanical Works For Pumping Station No. 3 Of The New
          Delta Project, Serving Reclaimed Agricultural Land. The Scope Of Work Includes Excavation, Concrete
          Structures, And Utility Networks, All Executed In Accordance With The{" "}
          <strong>Highest Quality Standards</strong> To Support The State’s Plan For National Agricultural
          Expansion.
        </p>
      }
      slides={[Slide1, Slide2, Slide3]}
    />
  );
}
