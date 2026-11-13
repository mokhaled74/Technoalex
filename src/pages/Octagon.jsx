import ProjectDetailView from "@/components/ProjectDetailView";
import HeroBg from "@/assets/images/projects/6c6f6392456aa1e14f3e082b77ab18d5e912c2e9.jpg";
import InfoImg from "@/assets/images/projects/6c6f6392456aa1e14f3e082b77ab18d5e912c2e9.jpg";
import Slide1 from "@/assets/images/projects/6c6f6392456aa1e14f3e082b77ab18d5e912c2e9.jpg";
import Slide2 from "@/assets/images/projects/6c6f6392456aa1e14f3e082b77ab18d5e912c2e9.jpg";
import Slide3 from "@/assets/images/projects/6c6f6392456aa1e14f3e082b77ab18d5e912c2e9.jpg";

export default function Octagon() {
  return (
    <ProjectDetailView
      title="The Octagon Ministry Of Defense Complex"
      heroBg={HeroBg}
      infoImg={InfoImg}
      status="COMPLETED"
      location="The Octagon, New Capital"
      consultant="Armed Forces Engineering Authority"
      year="2024"
      specs={["Consultant – Armed Forces Engineering Authority", "Area – 500,000 M²"]}
      description={
        <p>
          TechnoAlex Took Part In The Construction Works Of The Octagon Ministry Of Defense Complex,
          Executing Specialized Civil And Electromechanical Works. The Scope Of Work Includes Excavation,
          Concrete Structures, And Utility Networks, All Executed In Accordance With The{" "}
          <strong>Highest Quality Standards</strong> To Support The Complex’s Operational Readiness.
        </p>
      }
      slides={[Slide1, Slide2, Slide3]}
    />
  );
}
