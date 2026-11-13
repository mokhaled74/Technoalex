import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsHero from "@/components/ProjectsHero";
import LatestProjects from "@/components/LatestProjects";
import Commitment from "@/components/Commitment";

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#34C759" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="3.2" />
    <path d="M5 20c0-3.5 3.1-5.5 7-5.5s7 2 7 5.5" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="5" width="16" height="16" rx="2" />
    <path d="M4 10h16M8 3v4M16 3v4" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
  </svg>
);

function Gallery({ slides }) {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [dir, setDir] = useState("next");
  const [dragStart, setDragStart] = useState(null);
  const move = (step) => {
    setPrevIndex(index);
    setDir(step > 0 ? "next" : "prev");
    setIndex((i) => (i + step + slides.length) % slides.length);
  };
  const order = (i) => [slides[(i + slides.length - 1) % slides.length], slides[i], slides[(i + 1) % slides.length]];
  const current = order(index);
  const previous = order(prevIndex);

  const dragStartX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);
  const handleStart = (e) => setDragStart(dragStartX(e));
  const handleEnd = (e) => {
    if (dragStart === null) return;
    const x = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const delta = x - dragStart;
    if (Math.abs(delta) > 50) move(delta < 0 ? 1 : -1);
    setDragStart(null);
  };

  return (
    <section className="pd-gallery" aria-label="Project photos">
      <div
        className="pd-gallery__track"
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
      >
        {current.map((src, slot) => (
          <div key={slot} className={`pd-gallery__slide pd-gallery__slide--${slot === 1 ? "active" : "side"}`}>
            {prevIndex !== index && (
              <img key={`out-${prevIndex}-${slot}`} src={previous[slot]} alt="" draggable={false} className={`pd-gallery__img--out-${dir}`} />
            )}
            <img key={`in-${index}-${slot}`} src={src} alt={slot === 1 ? `Project photo ${index + 1}` : ""} draggable={false} className={`pd-gallery__img--in-${dir}`} />
          </div>
        ))}
        <button type="button" className="pd-gallery__nav pd-gallery__nav--prev" onClick={() => move(-1)} aria-label="Previous photo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button type="button" className="pd-gallery__nav pd-gallery__nav--next" onClick={() => move(1)} aria-label="Next photo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default function ProjectDetailView({ title, heroBg, infoImg, status = "UNDER CONSTRUCTION", location, consultant, year, specs = [], description, slides }) {
  return (
    <>
      <Navbar />
      <main>
        <ProjectsHero title={title} bg={heroBg} text={null} compact />

        <section className="pd-info" aria-labelledby="pd-info-title">
          <div className="pd-info__visual">
            <img src={infoImg} alt={`Aerial view of ${title}`} />
          </div>
          <div className="pd-info__copy">
            <h2 className="pd-info__title" id="pd-info-title">{title}</h2>
            <div className="pd-info__meta">
              <span className="pd-info__pill">{status}</span>
              <span className="pd-info__meta-item">
                <PinIcon />
                {location}
              </span>
              <span className="pd-info__meta-item">
                <UserIcon />
                {consultant}
              </span>
              <span className="pd-info__meta-item">
                <CalendarIcon />
                {year}
              </span>
            </div>
            {specs.map((s) => (
              <p key={s} className="pd-info__spec">{s}</p>
            ))}
            <div className="pd-info__desc">{description}</div>
          </div>
        </section>

        <Gallery slides={slides} />
        <LatestProjects />
        <Commitment />
      </main>
      <Footer />
    </>
  );
}
