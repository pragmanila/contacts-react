import React, { useCallback } from "react";

import "./contact-form.scss";

const ContactForm = ({ mode, formWidth: width, setContactFormMode }) => {
  const cancel = useCallback((event) => {
    event.preventDefault();
    setContactFormMode("hidden");
  }, []);

  const submit = useCallback((event) => {
    event.preventDefault();
  }, []);

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
          <form onSubmit={ submit }>
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
            <div className="contact-form-action">
              <button type="submit">Save</button>
              <button onClick={ cancel }>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default ContactForm;