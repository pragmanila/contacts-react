import React, { useCallback, useState } from "react";

import "./contact-form.scss";

const ContactForm = ({
  contactList,
  cancel,
  mode,
  formWidth: width,
  saveContact,
  selectedContact = {
    id: "",
    firstName: "",
    middleName: "",
    lastName: "",
    mobileNumber: "",
    emailAddress: ""
  },
  setContactFormMode
}) => {
  const [ formFieldValue, setFormFieldValue ] = useState({ ...selectedContact });

  const setFormField = (event) => {
    event.preventDefault();

    const fieldName = event.target.dataset.fieldname;
    const value = event.target.value;

    setFormFieldValue({
      ...formFieldValue,
      [fieldName]: value
    })
  };

  const submit = useCallback((event) => {
    event.preventDefault();

    saveContact(formFieldValue);
  }, [formFieldValue]);

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
            {
              Object.keys(formFieldValue).map((key) => (
                key !== "id" &&
                <label key={ key }>
                  {
                    (
                      ( ) => {
                        const label = key.replace( /([A-Z])/g, " $1" );
                        return label.charAt(0).toUpperCase() + label.slice(1);
                      }
                    )( )
                  }
                  <input
                    data-fieldname={ key }
                    onChange={ setFormField }
                    type="text"
                    value={ formFieldValue[key] }
                  />
                </label>
              ))
            }
            <div className="contact-form-action">
              <button
                className="save"
                type="submit"
              >
                Save
              </button>
              <button
                className="cancel"
                onClick={ cancel }
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default ContactForm;