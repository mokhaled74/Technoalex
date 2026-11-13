import HeroBg from "@/assets/images/about/c7531659663cf41f72e367eb09c134ad09075579.png";

export default function ContactHero({ title = "CONTACT US" }) {
  return (
    <section className="projects-hero" aria-labelledby="contact-hero-title">
      <img src={HeroBg} alt="" className="projects-hero__bg" />
      <div className="projects-hero__scrim" />
      <div className="projects-hero__inner container">
        <div className="projects-hero__head" data-reveal-left>
          <h1 className="projects-hero__title" id="contact-hero-title">{title}</h1>
        </div>
      </div>
    </section>
  );
}
