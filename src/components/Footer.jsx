import Logo from "@/assets/images/Logo 1.png";

export default function Footer() {
  return (
    <footer className="footer" id="contact" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={Logo} alt="TechnoAlex" className="footer__logo" />
          <address className="footer__address">
            Building No.1 - 50 St, Behind Ali Bin Abi Talib Mosque Smoouha - Alexandria.
          </address>
          <div className="footer__socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.5 21v-7h2.3l.4-2.7h-2.7V9.5c0-.8.2-1.3 1.4-1.3h1.4V5.8c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3v2.3H8.8V14h2.4v7h2.3z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.5 8.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6zM4.9 9.8h3.2V19H4.9V9.8zM9.8 9.8h3.1v1.3h.04c.43-.8 1.5-1.6 3.1-1.6 3.3 0 3.9 2.2 3.9 5v4.5h-3.2v-4c0-.95 0-2.2-1.3-2.2-1.3 0-1.5 1-1.5 2.1V19H9.8V9.8z" />
              </svg>
            </a>
          </div>
        </div>
        <nav className="footer__cols">
          <div className="footer__col">
            <h3 className="footer__title">Pages</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/career">Career</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__title">Our Services</h3>
            <ul>
              <li><a href="/infrastructure-projects">Infrastructure Projects</a></li>
              <li><a href="/water-pumping-stations">Electromechanical Works</a></li>
              <li><a href="/civil-construction-works">Civil &amp; Construction Works</a></li>
              <li><a href="/irrigation-utilities">Irrigation &amp; Utilities</a></li>
              <li><a href="/development-integrated-projects">Development &amp; Integrated Projects</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  );
}