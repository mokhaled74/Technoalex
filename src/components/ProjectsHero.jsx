import HeroBg from "@/assets/images/projects/967bd4331a7cb7e35ecfcde8e41f76659b32beba.jpg";

const defaultText =
  "We Aim To Deliver The Quality Our Clients Deserve By Providing High-Quality Engineering " +
  "And Contracting Services In The Fields Of Infrastructure And Major National Projects, " +
  "Our Projects Are Executed With Precision, Innovation, And Trust, Ensuring Fast-Tracked " +
  "Implementation And Reliable On-Time Delivery.";

export default function ProjectsHero({ title = "OUR PROJECTS", text = defaultText, bg = HeroBg, compact = false }) {
  return (
    <section className={`projects-hero${compact ? " projects-hero--compact" : ""}`} aria-labelledby="projects-hero-title">
      <img src={bg} alt="" className="projects-hero__bg" />
      <div className="projects-hero__scrim" />
      <div className="projects-hero__inner container">
        <div className="projects-hero__head" data-reveal-left>
          <h1 className="projects-hero__title" id="projects-hero-title">{title}</h1>
          {text && <p className="projects-hero__text">{text}</p>}
        </div>
      </div>
    </section>
  );
}