import ProjectDetailView from "@/components/ProjectDetailView";
import HeroBg from "@/assets/images/projects/3935f1ac82dcc5fe9b222ebd14432738921f0ecc.png";
import InfoImg from "@/assets/images/021ee799f05a9f8ef7853be9cdce64b0e869db8a.jpg";
import Slide1 from "@/assets/images/4391f1148af509f30f39ba3b237518463b80610e.png";
import Slide2 from "@/assets/images/construction-silhouette 3.png";
import Slide3 from "@/assets/images/4fe9af139ef03466a15ff4d7d1bce8c736e3ece3.png";

export default function AbbasiyaGroundwater() {
  return (
    <ProjectDetailView
      title="Abbasiya Groundwater Drainage"
      heroBg={HeroBg}
      infoImg={InfoImg}
      status="COMPLETED"
      location="Abbasiya, Cairo"
      consultant="Hydro Engineering Consultants"
      year="2022"
      specs={["Consultant – Hydro Engineering Consultants", "Capacity – 5 Million M³/Day"]}
      description={
        <p>
          TechnoAlex Has Executed The Groundwater Drainage Works For The Abbasiya Area, Ensuring The Safe
          Disposal Of Groundwater And Protecting The Urban Environment. The Scope Of Work Includes Excavation,
          Pipe Laying, And Finishing Works, All Executed In Accordance With The{" "}
          <strong>Highest Quality Standards</strong> To Support The State’s Plan For Urban Development.
        </p>
      }
      slides={[Slide1, Slide2, Slide3]}
    />
  );
}
