import IconQuality from "@/assets/images/about/6a1fd8abbe610214fca05eb21124e48b12447d03.png";
import IconPeople from "@/assets/images/about/8996e62096888819000bb1fa69008a2f7eae9550.png";
import IconInnovation from "@/assets/images/about/8c08c1cb3c8c3227fad9c218cd6a0e9ad92c5e8b.png";
import IconTrust from "@/assets/images/about/faf89c2d5e3ed34f5235a6877997a95cc287e40b.png";
import IconReliability from "@/assets/images/about/a70c1437f4c728bb96eda0d100dd12d23162f8dd.png";

const values = [
  { label: "QUALITY", icon: IconQuality, desc: "We Deliver Projects With The Highest Standards." },
  { label: "TRUSTWORTHINESS", icon: IconTrust, desc: "Transparency And Integrity Are The Foundation Of Our Success." },
  { label: "PEOPLE FIRST", icon: IconPeople, desc: "We Invest In Our Employees, Our True Asset." },
  { label: "RELIABILITY", icon: IconReliability, desc: "A Trusted Partner In National And Strategic Projects." },
  { label: "INNOVATION", icon: IconInnovation, desc: "We Adopt The Latest Techno-Logies To Create Forward-Looking Solutions." },
];

export default function CoreValues() {
  return (
    <section className="about-values" aria-labelledby="about-values-title">
      <div className="container">
        <h2 className="about-values__title" id="about-values-title" data-reveal-left><span>OUR CORE VALUES</span></h2>
        <div className="about-values__grid">
          {values.map((value) => (
            <article className="about-value" key={value.label}>
              <div className="about-value__media">
                <div className="about-value__icon">
                  <img src={value.icon} alt="" />
                </div>
              </div>
              <div className="about-value__text">
                <div className="about-value__label-wrap">
                  <h3 className="about-value__label">{value.label}</h3>
                </div>
                <p className="about-value__desc">{value.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
