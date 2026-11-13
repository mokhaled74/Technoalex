import HeroBg from "@/assets/images/about/c7531659663cf41f72e367eb09c134ad09075579.png";

const story =
  "TechnoAlex is a general contracting company specialized in infrastructure established in 1997. " +
  "Since its foundation, the company has gone through continuous stages of growth and development, " +
  "evolving to become a distinguished leader in its fields of expertise. Over the years, TechnoAlex " +
  "has built a strong reputation for reliability, precision, and commitment to excellence.";

export default function AboutHero({ title }) {
  return (
    <section className="about-hero" aria-labelledby="about-hero-story-title">
      <img src={HeroBg} alt="" className="about-hero__bg" />
      <div className="about-hero__scrim" />
      <div className="about-hero__inner container">
        {title && <h1 className="about-hero__headline">{title}</h1>}
        <h2 className="about-hero__story-title" id="about-hero-story-title">Our Story</h2>
        <p className="about-hero__story">{story}</p>
      </div>
    </section>
  );
}
