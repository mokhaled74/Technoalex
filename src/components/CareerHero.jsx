import HeroBg from "@/assets/images/about/c7531659663cf41f72e367eb09c134ad09075579.png";

export default function CareerHero() {
  return (
    <section className="projects-hero" aria-labelledby="career-hero-title">
      <img src={HeroBg} alt="" className="projects-hero__bg" />
      <div className="projects-hero__scrim" />
      <div className="projects-hero__inner container">
        <div className="projects-hero__head" data-reveal-left>
          <h1 className="projects-hero__title" id="career-hero-title">CAREER</h1>
          <p className="projects-hero__text">Ready To Start Your Career With Us?</p>
        </div>
      </div>
    </section>
  );
}
