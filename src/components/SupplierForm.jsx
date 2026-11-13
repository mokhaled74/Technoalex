const fields = [
  { label: "Name As In The Commercial Register", placeholder: "Enter Your Company Name" },
  { label: "Supplier Type", placeholder: "Choose Your Type", select: true },
  { label: "Nature Of Business", placeholder: "Enter Your Company Business" },
  { label: "Tax Card Number", placeholder: "Enter Your Company Tax Card Number" },
  { label: "Registration Number In Construction & Building", placeholder: "Enter Your Construction Registration Number" },
  { label: "Classification", placeholder: "Enter Your Company Classification" },
];

const radios = [
  { label: "Registered On The Government E-Procurement Portal", name: "eportal" },
  { label: "Registered For VAT", name: "vat" },
];

export default function SupplierForm() {
  return (
    <section className="supplier" aria-labelledby="supplier-title">
      <div className="container">
        <div className="supplier__head" data-reveal-left>
          <h2 className="supplier__title" id="supplier-title">REGISTER SUPPLIER</h2>
          <p className="supplier__sub">Enter Your Company Details In The Fields Below</p>
        </div>
        <form className="supplier__form" onSubmit={(e) => e.preventDefault()}>
          {fields.map((field) => (
            <label className="supplier__row" key={field.label}>
              <span className="supplier__label">{field.label}</span>
              {field.select ? (
                <select className="supplier__input" aria-label={field.label} required>
                  <option value="">{field.placeholder}</option>
                  <option>Individual</option>
                  <option>Company</option>
                  <option>Partnership</option>
                </select>
              ) : (
                <input className="supplier__input" type="text" placeholder={field.placeholder} required />
              )}
            </label>
          ))}
          {radios.map((radio) => (
            <fieldset className="supplier__row supplier__radios" key={radio.name}>
              <legend className="supplier__label">{radio.label}</legend>
              <span className="supplier__radio-group">
                <label>
                  <input type="radio" name={radio.name} value="yes" /> YES
                </label>
                <label>
                  <input type="radio" name={radio.name} value="no" /> NO
                </label>
              </span>
            </fieldset>
          ))}
          <label className="supplier__row">
            <span className="supplier__label">Name Of The Responsible Manager</span>
            <input className="supplier__input" type="text" placeholder="Enter The Responsible Manager Name" required />
          </label>
          <label className="supplier__row">
            <span className="supplier__label">Contact Number</span>
            <input className="supplier__input" type="tel" placeholder="Enter Available Contact Number" required />
          </label>
          <div className="supplier__submit-row">
            <button type="submit" className="btn btn--green">Register Now</button>
          </div>
        </form>
      </div>
    </section>
  );
}
