import React from "react";

import "./contact-form.scss";

const ContactForm = ({ mode, formWidth: width }) => {
  return (
    mode !== "hidden" && (
      <div className="contact-form" style={{ width }}>
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
    )
  );
};

export default ContactForm;