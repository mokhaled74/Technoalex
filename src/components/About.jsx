import AboutImg from "@/assets/images/Rectangle 83.png";
import AboutImg2 from "@/assets/images/Rectangle 85.png";

export default function About() {
  return (
    <section className="about" id="about" aria-label="About us">
      <div className="about__inner container">
        <div className="about__visual" aria-hidden="true">
          <img src={AboutImg} alt="" className="about__grid-img about__grid-img--main" />
          <img src={AboutImg2} alt="" className="about__grid-img about__grid-img--small" />
          <div className="about__strip">
            <span className="about__strip-text">
              Driven by a Commitment to <span className="about__strip-green">Excellence</span>
            </span>
          </div>
        </div>
        <div className="about__copy">
          <h2 className="section__title">ABOUT US</h2>
          <h3 className="about__headline">
            Our Commitment To <span className="about__headline--green">Excellence</span> Keeps Us Ahead
          </h3>
          <p className="about__desc">
            Since 1997, Technolex has been committed to continuous development
            and keeping pace with the latest global technologies since its
            inception, more than 25 years in the field of implementing vital,
            strategic projects that serve Egypt's development plans.
          </p>
          <a href="/about" className="btn btn--green">LEARN MORE</a>
        </div>
      </div>
    </section>
  );
}