import HeroVideo from "@/assets/images/Techno Alex Landing Page Video-1.mp4";
import HeroArrow from "@/assets/images/Subtract.png";

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Hero">
      <video className="hero__video" autoPlay muted loop playsInline preload="auto" poster="" aria-hidden="true">
        <source src={HeroVideo} type="video/mp4" />
      </video>
      <div className="hero__scrim" />
      <div className="hero__content container">
        <img src={HeroArrow} alt="" className="hero__arrow" aria-hidden="true" />
        <span className="hero__eyebrow">SERVING OUR CLIENTS</span>
            <h1 className="hero__title">FOR OVER <span className="hero__title--green">25 YEARS</span></h1>
            <p className="hero__desc">
              Established in 1997, TechnoAlex is a pioneering general contracting
              company with more than 25 years of experience in implementing vital
              national construction and infrastructure projects.
            </p>
      </div>
    </section>
  );
}