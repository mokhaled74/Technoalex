import { useEffect, useRef, useState } from "react";
import StatImg1 from "@/assets/images/Rectangle 85.png";
import StatImg2 from "@/assets/images/Rectangle 86.png";
import StatImg3 from "@/assets/images/Rectangle 87.png";
import StatImg4 from "@/assets/images/Rectangle 88.png";

const images = [StatImg1, StatImg2, StatImg3, StatImg4];

const defaultStats = [
  { value: "+100", label: "Clients", desc: "Building trust with diverse clients across Egypt's construction landscape." },
  { value: "+25", label: "Years", desc: "Earning trust through consistent, high-quality project delivery." },
  { value: "+300", label: "Projects", desc: "Executing diverse projects across Egypt's construction landscape." },
  { value: "+500", label: "Workers", desc: "A dedicated team of skilled professionals committed to excellence." },
];

function CountUp({ value }) {
  const ref = useRef(null);
  const target = Number(value.replace(/\D/g, ""));
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / 1500, 1);
          setCount(Math.round(target * progress));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <h3 className="stat-card__value" ref={ref}>
      +{count}
    </h3>
  );
}

export default function VisionStats({
  id = "vision",
  heading = "TURNING VISION INTO REALITY",
  intro = "Our Goal is Beyond Delivering Projects, We Aim To Create Sustainable Value For Our Clients, Employees, And Communities By Executing National Projects With Precision, Innovation, And Trust. We Contribute To Egypt's Development Journey And Build A Lasting Impact For Future Generations.",
  stats = defaultStats,
  variant,
  topPadding = true,
}) {
  return (
    <section
      className={`vision${variant ? ` vision--${variant}` : ""}${topPadding ? "" : " vision--no-top"}`}
      id={id}
      aria-label={heading}
    >
      <div className={variant === "about" ? "container--wide" : "container"}>
        <h2 className="section__title section__title--center">{heading}</h2>
        <p className="vision__intro">{intro}</p>
        <div className="vision__grid">
          {stats.map((stat, i) => (
            <article className="stat-card" key={stat.label}>
              <div className="stat-card__media">
                <img src={stat.img ?? images[i]} alt={stat.label} className="stat-card__img" />
                <div className="stat-card__overlay" />
              </div>
              <div className="stat-card__body">
                <CountUp value={stat.value} />
                <span className="stat-card__label">{stat.label}</span>
                <p className="stat-card__desc">{stat.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
