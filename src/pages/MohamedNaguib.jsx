import ProjectDetailView from "@/components/ProjectDetailView";
import HeroBg from "@/assets/images/15fd0d27dee0ae20d9d5910789025f6110830d05.png";
import InfoImg from "@/assets/images/3d9544f40defdf85edaea4b904587f488f286034.png";
import Slide1 from "@/assets/images/204453785013b68cd04b5a5d6efeec8a2c415af0.png";
import Slide2 from "@/assets/images/bffe2864d66e84fe0a3139fd2148e23a78ec643d.png";
import Slide3 from "@/assets/images/baab5409d243dc8749ed68d1ad569dceb72f8a79.png";

export default function MohamedNaguib() {
  return (
    <ProjectDetailView
      title="Mohamed Naguib Military Base Development"
      heroBg={HeroBg}
      infoImg={InfoImg}
      status="COMPLETED"
      location="Mohamed Naguib Military Base, Alexandria"
      consultant="Armed Forces Engineering Authority"
      year="2023"
      specs={["Consultant – Armed Forces Engineering Authority", "Capacity – 10 Million M³/Day"]}
      description={
        <p>
          TechnoAlex Took Part In The Infrastructure Development Works At Mohamed Naguib Military Base,
          Executing Specialized Civil And Electromechanical Works. The Scope Of Work Includes Excavation,
          Concrete Structures, And Utility Networks, All Executed In Accordance With The{" "}
          <strong>Highest Quality Standards</strong> To Support The Base’s Operational Readiness.
        </p>
      }
      slides={[Slide1, Slide2, Slide3]}
    />
  );
}
