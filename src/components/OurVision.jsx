import VisionImg from "@/assets/images/Rectangle 87.png";

export default function OurVision() {
  return (
    <section className="projects" aria-labelledby="about-vision-title">
      <div className="projects__inner">
        <div className="projects__copy" style={{ "--projects-bg": `url(${VisionImg})` }}>
          <div className="projects__text" data-reveal-left>
            <h2 className="projects__title" id="about-vision-title">OUR VISION</h2>
            <p className="projects__desc">
              Our Vision Is To Become The Leading Choice And Trusted Partner When It Comes To The
              Construction And Infrastructure Sector In Egypt And The Region, By Delivering Innovative
              And Sustainable Engineering Solutions That Create Significant Impact And Contribute To
              Building A Better Future For Generations To Come.
            </p>
          </div>
        </div>
        <div className="projects__media">
          <img src={VisionImg} alt="TechnoAlex construction site" className="projects__img" />
        </div>
      </div>
    </section>
  );
}
