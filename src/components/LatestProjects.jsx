import Img1 from "@/assets/images/projects/05cbc2fce78bc30747c233355f1eee73b64dd821.png";
import Img2 from "@/assets/images/projects/4d2d4ecd88f9304ab27b2ea15eaac3cc2fefb893.png";
import Img3 from "@/assets/images/projects/981842c098ccdc8e1e462351a9a0e95fb8dccf36.jpg";
import Img4 from "@/assets/images/projects/6c6f6392456aa1e14f3e082b77ab18d5e912c2e9.jpg";
import ArrowGif from "@/assets/images/2cf6fc493d1cc09bd3fe5532afb74c340d582fa8.gif";

const projects = [
  { name: "Future Of Egypt - 300,000 Fedans Project- Pumping Station 5", img: Img1, href: "/projects/future-of-egypt-station-5" },
  { name: "Mostakbal Misr – 17 Booster Pump Stations", img: Img2, href: "/projects/mostakbal-misr-booster-pump-stations" },
  { name: "Aqua Heneish Project", img: Img3, href: "/projects/aqua-heneish-project" },
  { name: "The Octagon Ministry Of Defense Complex", img: Img4, href: "/projects/the-octagon-ministry-of-defense-complex" },
];

export default function LatestProjects({ padded = false }) {
  return (
    <section className={`latest${padded ? " latest--padded" : ""}`} id="projects-list" aria-label="Our latest projects">
      <div className="container">
        <div className="latest__head">
          <h2 className="section__title">OUR LATEST PROJECTS</h2>
          <a href="/projects" className="btn btn--outline latest__browse latest__browse--desktop">Browse All Projects</a>
        </div>
        <div className="latest__grid">
          {projects.map((p) => (
            <article className="project-card" key={p.name}>
              <img src={p.img} alt={p.name} className="project-card__img" />
              <div className="project-card__overlay" />
              <a href={p.href || "/projects"} className="project-card__arrow" aria-label={`View ${p.name}`}>
                <img src={ArrowGif} alt="" className="project-card__arrow-icon" />
              </a>
              <div className="project-card__body">
                <h3 className="project-card__name">{p.name}</h3>
                <a href={p.href || "/projects"} className="project-card__link">View More</a>
              </div>
            </article>
          ))}
        </div>
        <div className="latest__browse-wrap">
          <a href="/projects" className="btn btn--outline latest__browse latest__browse--mobile">Browse All Projects</a>
        </div>
      </div>
    </section>
  );
}