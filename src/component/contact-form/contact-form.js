import React, { useCallback, useEffect, useState } from "react";
import cc from "classcat";

import "./contact-form.scss";

const validateField = (fieldName, value) => {
  switch(fieldName) {
    case "firstName":
    case "middleName":
    case "lastName":
      return (
        /[a-zA-Z]{2,}/.test(value) ||
        `Enter valid ${ fieldName.replace( /([A-Z])/g, " $1" ).toLowerCase() }.`
      );
    case "emailAddress":
      return (
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value) ||
        "Enter valid email address."
      );
    case "mobileNumber":
      return (
        /^[0-9]{11,11}$/.test(value) ||
        "Enter 11-digit mobile number."
      );
  }
};

const ContactForm = ({
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
  const [ isFormValid, setIsFormValid ] = useState(mode === "edit" ? true : false);

  const setFormField = (event) => {
    event.preventDefault();

    const fieldName = event.target.dataset.fieldname;
    const value = event.target.value;

    const validationResult = validateField(fieldName, value);

    const isFieldValid = (
      validationResult === true ||
      fieldName === "middleName" && value.length === 0
    );
    const validationMessage = (
      isFieldValid ?
      "" :
      (
        typeof validationResult === "string" ? validationResult : ""
      )
    );

    setIsFormValid(isFieldValid);

    setFormFieldValue({
      ...formFieldValue,
      [fieldName]: {
        isFieldValid,
        validationMessage,
        value
      }
    })
  };

  const submit = useCallback((event) => {
    event.preventDefault();

    if(isFormValid){
      const contact = {};

      Object.keys(formFieldValue).forEach((key) => {
        contact[key] = (
          typeof formFieldValue[key] === "string" ?
          formFieldValue[key] :
          (formFieldValue[key].value || "")
        );
      });

      saveContact(contact);
    }
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
                    className={ cc({
                      valid: formFieldValue[key].isFieldValid === true,
                      "not-valid": formFieldValue[key].isFieldValid === false
                    }) }
                    data-fieldname={ key }
                    onChange={ setFormField }
                    type="text"
                    value={
                      typeof formFieldValue[key] === "string" ?
                      formFieldValue[key] :
                      ( formFieldValue[key].value || "" )
                    }
                  />
                  {
                    (formFieldValue[key].validationMessage || "").length > 0 &&
                    <span>{ formFieldValue[key].validationMessage }</span>
                  }
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