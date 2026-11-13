import MessageBg from "@/assets/images/about/bf02d0328596e5e8603a78b74973a3fbb449c2f2.jpg";

const paragraphs = [
  "In TechnoAlex We Firmly Believe That Our Clients Deserve The Quality That Lives Up To Their Expectations And Makes Us Worthy Of Their Trust.",
  "We Are Committed To Providing High-Quality Engineering And Contracting Services In The Fields Of Infrastructure And Major National Projects; In Addition To Our Commitment To Applying The Highest Standards Of Safe, Quality, Innovation; And Punctuality In Implementation.",
  "We Believe That Building Long-Term Partnerships With Our Clients And Partners Is One Of Our Key Pillars Of Success, Built On Credibility, Trust, And Transparency. As Well As Investing In Our Employees, Empowering Our Teams, And Adopting The Latest Technologies To Ensure Efficient And Sustainable Project Implementation.",
];

export default function OurMessage() {
  return (
    <section className="about-message" aria-labelledby="about-message-title">
      <img src={MessageBg} alt="" className="about-message__bg" />
      <div className="about-message__scrim" />
      <div className="about-message__inner container">
        <h2 className="about-message__title" id="about-message-title" data-reveal-left><span>OUR MESSAGE</span></h2>
        <div className="about-message__text">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
