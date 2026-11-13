import ProjectDetailView from "@/components/ProjectDetailView";
import HeroBg from "@/assets/images/projects/ad570fefc6ad3d4032cdd63f6794f7b3defc0326.jpg";

export default function MainIrrigationLines() {
  return (
    <ProjectDetailView
      title="Main Irrigation Lines For Supplying Center Pivot Irrigation Systems- 300,000 Fedans Project"
      heroBg={HeroBg}
      infoImg={HeroBg}
      status="UNDER CONSTRUCTION"
      location="New Delta, Egypt"
      consultant="Hydro Engineering Consultants"
      year="2025"
      specs={["Consultant – Hydro Engineering Consultants", "Capacity – 10 Million M³/Day"]}
      description={
        <p>
          TechnoAlex Has Undertaken The Installation Of Main Irrigation Lines For Supplying Center Pivot
          Irrigation Systems, Serving Approximately <strong>300,000 Feddans</strong> Of Reclaimed Agricultural
          Land. The Scope Of Work Includes Excavation, Pipe Laying, And Testing, All Executed In Accordance
          With The <strong>Highest Quality Standards</strong> To Support The State’s Plan For National
          Agricultural Expansion.
        </p>
      }
      slides={[HeroBg, HeroBg, HeroBg]}
    />
  );
}
