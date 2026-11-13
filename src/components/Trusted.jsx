import Emaar from "@/assets/images/ecf762f4b365a460d067f9f30e8dc1e60209b2a1.jpg";
import Torishima from "@/assets/images/04a38eed137bf0fcf0ec1f1bfd02ccfcc3525bfb.jpg";
import Sodic from "@/assets/images/SodicLogo.png";
import Nspo from "@/assets/images/Rectangle 23.png";

const logos = [
  { name: "Emaar Misr", src: Emaar },
  { name: "Torishima", src: Torishima },
  { name: "Sodic", src: Sodic },
  { name: "NSPO", src: Nspo },
];

export default function Trusted() {
  return (
    <section className="trusted" id="trusted" aria-label="Trusted by industry leaders">
      <div className="container">
        <h2 className="section__title trusted__title" data-reveal-left><span>TRUSTED BY INDUSTRY LEADERS</span></h2>
        <div className="trusted__carousel">
          <div className="trusted__track">
            {[...logos, ...logos].map((logo, idx) => (
              <div className="trusted__item" key={`${logo.name}-${idx}`}>
                <img src={logo.src} alt={logo.name} className="trusted__img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
