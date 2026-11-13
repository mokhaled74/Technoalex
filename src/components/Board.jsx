import Portrait1 from "@/assets/images/about/9318479792f03f7a79374152296a27cb517a4f29.png";
import Portrait2 from "@/assets/images/about/e2f76bdb7fb7b88074ea19a3e5603c797a4d62ec.png";
import Portrait3 from "@/assets/images/about/7d754666e30d45d56eae0d524363eabd0ef80d60.png";
import Portrait4 from "@/assets/images/about/e74558212fb92af2c08b82acf180caea17f8675c.jpg";
import Portrait5 from "@/assets/images/about/22939e10f91b67cc3daab5c4b0585930170f411d.png";

const members = [
  { name: "Eng. Hazem M. Zawarah", role: "Chairman Of Boards Directors", img: Portrait1 },
  { name: "Eng. Mohamed A. Talaat", role: "Vice Chairman & Managing Director", img: Portrait2 },
  { name: "Eng. Sayed Ameen", role: "General Manager", img: Portrait3 },
  { name: "Eng. Zeyad Moh. Talaat", role: "Board Member", img: Portrait4 },
  { name: "Eng. Seif Hazem Zawarah", role: "Board Member", img: Portrait5 },
];

export default function Board() {
  return (
    <section className="about-board" aria-labelledby="about-board-title">
      <div className="container">
        <div className="about-board__header">
          <div className="about-board__head" data-reveal-left>
            <h2 className="about-board__title" id="about-board-title">BOARD OF DIRECTOR</h2>
            <p className="about-board__sub">Meet the Experts Driving Our Success</p>
          </div>
          <div className="about-board__intro">
            <p>Our Board of Directors combines experience, Vision, and Innovation to guide Techno Alex's growth.</p>
            <p>Their leadership ensures seamless teamwork, strategic direction, and a commitment to delivering exceptional results in every project.</p>
          </div>
        </div>
        <div className="about-board__grid">
          {members.map((member) => (
            <article className="about-member" key={member.name}>
              <img src={member.img} alt={member.name} className="about-member__img" />
              <div className="about-member__info" data-reveal-left>
                <div>
                  <h3 className="about-member__name">{member.name}</h3>
                  <p className="about-member__role">{member.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
