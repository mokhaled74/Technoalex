const offices = [
  {
    name: "Head Office",
    lines: ["Building No. 1 - 50 St.,", "Behind Ali Bin Abi Talib Mosque", "Smouha - Alexandria, EG"],
    map: "https://www.google.com/maps?q=Smouha%2C+Alexandria%2C+Egypt&output=embed",
  },
  {
    name: "Branch Office",
    lines: ["6 October, 8th District - Block 3 -", "Building 251 - Zayed Entrance 4 -", "Sheikh Zayed, Cairo, EG"],
    map: "https://www.google.com/maps?q=Sheikh+Zayed%2C+Cairo%2C+Egypt&output=embed",
  },
];

export default function ContactInfo() {
  return (
    <section className="contact-info" aria-labelledby="contact-info-title">
      <div className="container">
        <div className="contact-info__head" data-reveal-left>
          <h2 className="contact-info__title" id="contact-info-title"><span>CONTACT US</span></h2>
          <p className="contact-info__sub">Please Feel Free To Contact Us If You Have A Question</p>
        </div>

        <div className="contact-info__email">
          <span className="contact-info__label">Email:</span>
          <a className="contact-info__value" href="mailto:Info@Technoalex.Com">Info@Technoalex.Com</a>
        </div>

        <div className="contact-info__actions">
          <a href="mailto:Info@Technoalex.Com" className="btn btn--green">EMAIL US</a>
          <a href="/supplier-register" className="btn btn--green">SUPPLIER REGISTER</a>
        </div>

        <div className="contact-info__offices">
          {offices.map((office) => (
            <div className="contact-info__office" key={office.name}>
              <h3 className="contact-info__office-name">Address:</h3>
              <p className="contact-info__office-lines">
                {office.name} - {office.lines[0]}
                <br />
                {office.lines[1]}
                <br />
                {office.lines[2]}
              </p>
              <iframe
                className="contact-info__map"
                src={office.map}
                title={`${office.name} map`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
