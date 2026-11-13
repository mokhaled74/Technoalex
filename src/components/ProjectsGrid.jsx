import ArrowGif from "@/assets/images/2cf6fc493d1cc09bd3fe5532afb74c340d582fa8.gif";
import IconGear from "@/assets/images/742ed5c3085fdc0c46af5a87f1118bdf5313f0c4.gif";
import { allProjects } from "@/data/projects";

export default function ProjectsGrid({ items = allProjects, title, icon = IconGear }) {
  return (
    <section className="projects-page__grid" aria-label="All projects">
      <div className="container">
        {title && (
          <div className="projects-page__head" data-reveal-left>
            <div className="projects-page__icon">
              <img src={icon} alt="" />
            </div>
            <h2 className="projects-page__title">{title}</h2>
          </div>
        )}
        <div className="projects-grid">
          {items.map((p) => (
            <article className="project-card" key={p.name}>
              <img src={p.img} alt={p.name} className="project-card__img" />
              <div className="project-card__overlay" />
              <a href={p.href || "/projects"} className="project-card__arrow" aria-label={`View ${p.name}`}>
                <img src={ArrowGif} alt="" className="project-card__arrow-icon" />
              </a>
              <div className="project-card__body project-card__body--spread">
                <h3 className="project-card__name">{p.name}</h3>
                <a href={p.href || "/projects"} className="project-card__link">View More</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
