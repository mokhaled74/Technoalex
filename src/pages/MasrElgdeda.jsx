import ProjectDetailView from "@/components/ProjectDetailView";
import HeroBg from "@/assets/images/ff6771a94e6177659459cc80c851d6d78986d602.png";
import InfoImg from "@/assets/images/0fa6aa02edd8d81ed4e849f208ea2cb9c8e85f70.jpg";
import Slide1 from "@/assets/images/3217e71541a62400260616ee97dd03b408791368.png";
import Slide2 from "@/assets/images/ff6771a94e6177659459cc80c851d6d78986d602.png";
import Slide3 from "@/assets/images/0fa6aa02edd8d81ed4e849f208ea2cb9c8e85f70.jpg";

export default function MasrElgdeda() {
  return (
    <ProjectDetailView
      title="Masr Elgdeda Development"
      heroBg={HeroBg}
      infoImg={InfoImg}
      status="COMPLETED"
      location="Masr El Gdeda, Cairo"
      consultant="Engineering Authority"
      year="2020"
      specs={["Consultant – Dar Al-Handasah"]}
      description={
        <p>
          Implementation Of A Groundwater Drainage Network With Diameters Of 700 Mm And 800 Mm, Ensuring The
          Safe Disposal Of Groundwater. TechnoAlex Took Part In A Comprehensive Infrastructure Development
          Project In Masr El Gdeda, Executing Specialized Works Aimed At Improving The Efficiency Of Sewage
          Networks And Preserving The Urban Environment.
        </p>
      }
      slides={[Slide1, Slide2, Slide3]}
    />
  );
}
