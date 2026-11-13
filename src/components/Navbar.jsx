import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/images/Logo 1.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => { setOpen(false); setServicesOpen(false); };

  const toggleMenu = () => setOpen((o) => !o);

  const links = [
    { label: "HOME", to: "/" },
    { label: "ABOUT", to: "/about" },
    { label: "PROJECTS", to: "/projects" },
    { label: "OUR SERVICES", to: "#services", hasDropdown: true },
    { label: "CAREER", to: "/career" },
  ];

  const cta = "CONTACT US";

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`} role="banner">
      <div className="navbar__inner container">
        <div className="navbar__brand">
          <a href="#" className="navbar__logo" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
            <img src={Logo} alt="TechnoAlex" className="navbar__logo-img" />
          </a>
        </div>

        <nav className={`navbar__menu ${open ? "navbar__menu--open" : ""}`} role="navigation">
          <button className="navbar__close" aria-label="Close menu" onClick={closeMenu}>
            <span className="navbar__close-bar" />
            <span className="navbar__close-bar" />
          </button>
          <ul className="navbar__list">
            {links.map((link) => (
              <li key={link.label} className="navbar__item">
                <a
                  href={link.to}
                  className={`navbar__link ${link.hasDropdown ? "navbar__link--drop" : ""}`}
                  onClick={(e) => {
                    if (link.hasDropdown) {
                      e.preventDefault();
                      setServicesOpen((o) => !o);
                      return;
                    }
                    if (link.to.startsWith("#")) e.preventDefault();
                    closeMenu();
                  }}
                >
                  {link.label}
                  {link.hasDropdown && <span className="navbar__drop">▾</span>}
                </a>
                {link.hasDropdown && (
                  <ul className={`navbar__dropdown ${servicesOpen ? "navbar__dropdown--open" : ""}`}>
                    <li><a href="/infrastructure-projects" onClick={closeMenu}>Infrastructure Projects</a></li>
                    <li><a href="/water-pumping-stations" onClick={closeMenu}>Water Pumping Stations</a></li>
                    <li><a href="/civil-construction-works" onClick={closeMenu}>Civil &amp; Construction Works</a></li>
                    <li><a href="/irrigation-utilities" onClick={closeMenu}>Irrigation &amp; Utilities</a></li>
                    <li><a href="/development-integrated-projects" onClick={closeMenu}>Development &amp; Integrated Projects</a></li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <a href="/contact" className="navbar__cta" onClick={closeMenu}>{cta}</a>
        </nav>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>
      </div>
    </header>
  );
}