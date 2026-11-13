import ProjectDetailView from "@/components/ProjectDetailView";
import HeroBg from "@/assets/images/e4edf65c34ba29d2756e2f5272668a805d0d0fbd.jpg";
import InfoImg from "@/assets/images/e4edf65c34ba29d2756e2f5272668a805d0d0fbd.jpg";
import Slide1 from "@/assets/images/710b6f463f926e024026000be6be5b679fcaed90.jpg";
import Slide2 from "@/assets/images/5f8c9da2f0da6a92833cf2213706ab382cb522e9.jpg";
import Slide3 from "@/assets/images/fb0ece20fbaed7e573e6558a0827331cdc2c9554.jpg";

export default function AquaHeneish() {
  return (
    <ProjectDetailView
      title="Aqua Heneish Project"
      heroBg={HeroBg}
      infoImg={InfoImg}
      status="COMPLETED"
      location="Bagoush, Marsa Matruh"
      consultant="Hydro Engineering Consultants"
      year="2024"
      specs={["Consultant – Hydro Engineering Consultants", "Capacity – 10 Million M³/Day"]}
      description={
        <p>
          TechnoAlex Has Undertaken The Construction Of The Aqua Heneish Project In Bagoush, Executing
          Specialized Civil And Electromechanical Works. The Scope Of Work Includes Excavation, Concrete
          Structures, And Utility Networks, All Executed In Accordance With The{" "}
          <strong>Highest Quality Standards</strong> To Support The State’s Plan For National Development.
        </p>
      }
      slides={[Slide1, Slide2, Slide3]}
    />
  );
}
