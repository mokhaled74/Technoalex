import ProjectDetailView from "@/components/ProjectDetailView";
import HeroBg from "@/assets/images/1657f158a76122e333d248ffe7344937988b845b.png";
import InfoImg from "@/assets/images/projects/05cbc2fce78bc30747c233355f1eee73b64dd821.png";
import Slide1 from "@/assets/images/projects/61e756b03973536a4ab2545a9274bb96be9d55d4.png";
import Slide2 from "@/assets/images/projects/2d96f1e5556342aeb8c80de38d090fd49bbe4820.jpg";
import Slide3 from "@/assets/images/projects/9c2e5491fd459c01aa5549c5c8ee021727484e58.png";

export default function ProjectDetails() {
  return (
    <ProjectDetailView
      title="Future Of Egypt - 300,000 Fedans Project- Station 5"
      heroBg={HeroBg}
      infoImg={InfoImg}
      status="UNDER CONSTRUCTION"
      location="Al-Dabaa Axis, Cairo"
      consultant="Hydro Engineering Consultants"
      year="2025"
      specs={["Consultant – Hydro Engineering Consultants", "Capacity – 10 Million M³/Day"]}
      description={
        <p>
          TechnoAlex Has Undertaken The Full Civil Works For Pumping Station No. 5, Which Represents A Key
          Component Of This Major Project. The Station Is Designed To Pump And Distribute Irrigation Water To
          Approximately <strong>300,000 Feddans</strong> Of Reclaimed Agricultural Land. The Scope Of Work
          Includes Excavation, Concrete Structures, And Finishing Works, All Executed In Accordance With The{" "}
          <strong>Highest Quality Standards</strong> To Support The State’s Plan For National Agricultural Expansion.
        </p>
      }
      slides={[Slide1, Slide2, Slide3]}
    />
  );
}
