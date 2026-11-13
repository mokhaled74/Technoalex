import IconGear from "@/assets/images/742ed5c3085fdc0c46af5a87f1118bdf5313f0c4.gif";
import IconSpray from "@/assets/images/a92c2cb56c93086fadd8f4ffb98662e1913698f5.gif";
import IconHelmet from "@/assets/images/18906e55072e31eebf42f773cecc2a2e6268f991.gif";
import IconWrench from "@/assets/images/d48ee2d5f3e5a16dd3f9110152a93f4e06851045.gif";
import IconTeam from "@/assets/images/7e87c316e55cc7765f6d8d710ea4137c9d37af98.gif";

const services = [
  { name: "INFRASTRUCTURE PROJECTS", icon: IconGear, href: "/infrastructure-projects" },
  { name: "WATER PUMPING STATIONS", icon: IconWrench, href: "/water-pumping-stations" },
  { name: "CIVIL & CONSTRUCTION WORKS", icon: IconHelmet, href: "/civil-construction-works" },
  { name: "IRRIGATION & UTILITIES", icon: IconSpray, href: "/irrigation-utilities" },
  { name: "DEVELOPMENT & INTEGRATED PROJECTS", icon: IconTeam, href: "/development-integrated-projects" },
];

export default function WhatWeOffer() {
  return (
    <section className="offer" id="services" aria-label="What we offer">
      <div className="offer__bg" aria-hidden="true" />
      <div className="container">
        <h2 className="section__title section__title--white section__title--center">WHAT WE OFFER</h2>
        <div className="offer__grid">
          {services.map((s) => (
            <a className="offer-card" href={s.href} key={s.name}>
              <span className="offer-card__icon">
                <img src={s.icon} alt="" />
              </span>
              <h3 className="offer-card__name">{s.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}