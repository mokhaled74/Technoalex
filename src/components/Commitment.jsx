import CommitBg from "@/assets/images/about/e4bf34440211a3734baaea5f15ce1e2485ab81d7.jpg";

export default function Commitment() {
  return (
    <section className="about-commit" aria-labelledby="about-commit-title">
      <img src={CommitBg} alt="" className="about-commit__bg" />
      <div className="about-commit__scrim" />
      <div className="about-commit__inner container">
        <h2 className="about-commit__title" id="about-commit-title">
          OUR COMMITMENT TO <span>EXCELLENCE</span>
          <br />
          KEEPS US AHEAD
        </h2>
        <a href="/contact" className="btn btn--green about-commit__btn">CONTACT US</a>
      </div>
    </section>
  );
}