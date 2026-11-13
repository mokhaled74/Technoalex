import ProjectDetailView from "@/components/ProjectDetailView";
import HeroBg from "@/assets/images/projects/967bd4331a7cb7e35ecfcde8e41f76659b32beba.jpg";
import InfoImg from "@/assets/images/c405e865e81c58d736e9075b402ee4bd77152b80.jpg";
import Slide1 from "@/assets/images/construction-silhouette 3.png";
import Slide2 from "@/assets/images/3a8e00996eeff6be9d1d0160741984b978e00fc2.png";
import Slide3 from "@/assets/images/projects/967bd4331a7cb7e35ecfcde8e41f76659b32beba.jpg";

export default function NewDeltaStation6() {
  return (
    <ProjectDetailView
      title="New Delta Project – Pumping Station 6"
      heroBg={HeroBg}
      infoImg={InfoImg}
      status="UNDER CONSTRUCTION"
      location="New Delta, Egypt"
      consultant="Hydro Engineering Consultants"
      year="2025"
      specs={["Consultant – Hydro Engineering Consultants", "Capacity – 10 Million M³/Day"]}
      description={
        <p>
          TechnoAlex Has Undertaken The Civil And Electromechanical Works For Pumping Station No. 6 Of The New
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
