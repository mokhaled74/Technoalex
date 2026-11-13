import ProjectImg from "@/assets/images/Rectangle 86.png";

export default function Projects() {
  return (
    <section className="projects" id="projects" aria-label="Our projects">
      <div className="projects__inner">
        <div className="projects__copy" style={{ "--projects-bg": `url(${ProjectImg})` }}>
          <div className="projects__text" data-reveal-left>
            <h2 className="projects__title">OUR PROJECTS</h2>
            <p className="projects__desc">
              We Aim At Delivering The Quality That We Believe Our Clients Deserve, Providing High-
              Quality Engineering And Contracting Services In The Fields Of Infrastructure And Major
              National Projects, By Executing National Projects With Precision, Innovation, And Trust.
            </p>
          </div>
          <a href="/projects" className="btn btn--green">EXPLORE MORE</a>
        </div>
        <div className="projects__media">
          <img src={ProjectImg} alt="Concrete infrastructure project" className="projects__img" />
        </div>
      </div>
    </section>
  );
}