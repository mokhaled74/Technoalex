import { useState } from "react";
import ApplyModal from "@/components/ApplyModal";

const roles = [
  { title: "Senior Technical Civil Engineer", location: "(Cairo, Egypt)" },
  { title: "Senior Site Civil Engineer", location: "(Cairo, Egypt)" },
  { title: "Senior Mechanical Site Engineer", location: "(Alexandria, Egypt)" },
];

export default function OpenRoles() {
  const [activeRole, setActiveRole] = useState(null);

  return (
    <section className="roles" aria-labelledby="roles-title">
      <div className="container">
        <div className="roles__head" data-reveal-left>
          <h2 className="roles__title" id="roles-title">OPEN ROLES</h2>
          <p className="roles__sub">Ready to Start Your Career with Us?</p>
        </div>
        <div className="roles__grid">
          {roles.map((role) => (
            <article className="role-card" key={role.title}>
              <h3 className="role-card__title">{role.title}</h3>
              <p className="role-card__location">{role.location}</p>
              <button
                type="button"
                className="btn btn--green role-card__btn"
                onClick={() => setActiveRole(role)}
              >
                APPLY NOW
              </button>
            </article>
          ))}
        </div>
      </div>
      <ApplyModal role={activeRole} onClose={() => setActiveRole(null)} />
    </section>
  );
}
