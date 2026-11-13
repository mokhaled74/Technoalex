import ProjectDetailView from "@/components/ProjectDetailView";
import HeroBg from "@/assets/images/fb80c7a2b5743656539258dc42f8202580317e03.png";
import InfoImg from "@/assets/images/projects/4d2d4ecd88f9304ab27b2ea15eaac3cc2fefb893.png";
import Slide1 from "@/assets/images/3126e8682a828bb0740ea58043158e8e5aaf45ec.jpg";
import Slide2 from "@/assets/images/f6307a1810f03e41ea1a21762de2467130e18830.png";
import Slide3 from "@/assets/images/c99fa76c2bd5bda39a3a58e20bfc0bac9d8cfebd.png";

export default function MostakbalMisr() {
  return (
    <ProjectDetailView
      title="Mostakbal Misr – 17 Booster Pump Stations"
      heroBg={HeroBg}
      infoImg={InfoImg}
      status="UNDER CONSTRUCTION"
      location="Mostakbal Misr, Egypt"
      consultant="Hydro Engineering Consultants"
      year="2025"
      specs={["Consultant – Hydro Engineering Consultants", "Capacity – 10 Million M³/Day"]}
      description={
        <p>
          TechnoAlex Has Undertaken The Construction Of 17 Booster Pump Stations For The Mostakbal Misr
          Project, Ensuring The Efficient Distribution Of Irrigation Water. The Scope Of Work Includes
          Excavation, Concrete Structures, And Electromechanical Works, All Executed In Accordance With The{" "}
          <strong>Highest Quality Standards</strong> To Support The State’s Plan For National Agricultural
          Expansion.
        </p>
      }
      slides={[Slide1, Slide2, Slide3]}
    />
  );
}
