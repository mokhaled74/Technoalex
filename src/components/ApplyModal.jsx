import { useEffect } from "react";

export default function ApplyModal({ role, onClose }) {
  useEffect(() => {
    if (!role) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [role, onClose]);

  if (!role) return null;

  return (
    <div
      className="apply-modal"
      role="dialog"
      aria-modal="true"
      aria-label={`Apply for ${role.title}`}
      onClick={onClose}
    >
      <div className="apply-modal__card" onClick={(e) => e.stopPropagation()}>
        <button className="apply-modal__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h2 className="apply-modal__title">{role.title}</h2>
        <form className="apply-modal__form" onSubmit={(e) => e.preventDefault()}>
          <label className="apply-modal__row">
            <span className="apply-modal__label">Full Name</span>
            <input className="apply-modal__input" type="text" placeholder="Enter Your Full name" required />
          </label>
          <label className="apply-modal__row">
            <span className="apply-modal__label">Email</span>
            <input className="apply-modal__input" type="email" placeholder="Enter Your Email Address" required />
          </label>
          <label className="apply-modal__row">
            <span className="apply-modal__label">Phone Number</span>
            <input className="apply-modal__input" type="tel" placeholder="Enter Your Phone Number" required />
          </label>
          <label className="apply-modal__row">
            <span className="apply-modal__label">Address</span>
            <input className="apply-modal__input" type="text" placeholder="Enter Your Address" required />
          </label>
          <label className="apply-modal__row">
            <span className="apply-modal__label">CV Attachment</span>
            <span className="apply-modal__file">
              <input className="apply-modal__file-input" type="file" aria-label="Choose CV file" />
              <span className="apply-modal__file-text">Choose File</span>
            </span>
          </label>
          <button type="submit" className="btn btn--green apply-modal__submit">Apply Now</button>
        </form>
      </div>
    </div>
  );
}
