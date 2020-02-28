import React from "react";

import "./contact-form.scss";

const ContactForm = ({ mode, formWidth: width }) => {
  return (
    mode !== "hidden" && (
      <div
        className="contact-form-container"
        style={{ width }}
      >
        <div className="contact-form">
          <div className="header-container">
            <h2>Add contact</h2>
          </div>
          <form onSubmit={() => {}}>
          <label>
            First name
            <input type="text"/>
          </label>
          <label>
            Middle name
            <input type="text"/>
          </label>
          <label>
            Last name
            <input type="text"/>
          </label>
          <label>
            Mobile number
            <input type="text"/>
          </label>
          <label>
            Email address
            <input type="text"/>
          </label>
          </form>
        </div>
      </div>
    )
  );
};

export default ContactForm;