import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Action from "./component/action/action";
import ContactForm from "./component/contact-form/contact-form";

import { addContact, deleteContact, editContact } from "./redux/action";

import "./app.scss";

const App = () => {
  const contactList = useSelector(state => state.contactList);
  const dispatch = useDispatch();

  const [ contactFormMode, setContactFormMode ] = useState("hidden");
  const [ selectedContactList, setSelectedContactList ] = useState([]);
  const [ contactFormWidth, setContactFormWidth ] = useState(0);

  const ref = useRef();

  const selectContact = useCallback(
    (id) => {
      let isContactAlreadySelected = selectedContactList.filter(
        selectedContact => selectedContact === id
      ).length > 0;

      if(isContactAlreadySelected){
        setSelectedContactList(selectedContactList.filter(
          selectedContact => selectedContact !== id
        ));
      } else {
        setSelectedContactList([...selectedContactList, id])
      }
    },
    [selectedContactList]
  );

  useEffect(
    ( ) => {
      setSelectedContactList([]);
    },
    [contactList]
  );

  useEffect(
    () => {
      setContactFormWidth(ref.current.offsetWidth)
    },
    [contactList]
  );

  return (
    <div className="contact-container">
      <div className="header-container">
        <h2>Contacts list</h2>
        <Action
          addContact={() => { setContactFormMode("add") }}
          deleteContact={() => {
            dispatch(deleteContact(selectedContactList));
          }}
          selectedContactList={selectedContactList}
        />
      </div>
      <ContactForm
        formWidth={contactFormWidth}
        mode={contactFormMode}
      />
      {
        contactFormMode === "hidden" && (
          <table ref={ref}>
            <thead>
              <tr className="head">
                <th></th>
                <th>
                  FIRST NAME
                </th>
                <th>
                  MIDDLE NAME
                </th>
                <th>
                  LAST NAME
                </th>
                <th>
                  MOBILE NUMBER
                </th>
                <th>
                  EMAIL ADDRESS
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                contactList.map(contact => (
                  <tr key={ contact.id }>
                    <td>
                      <input
                        checked={ selectedContactList.includes( contact.id ) }
                        onChange={ () => {}}
                        type="checkbox"
                      />
                      <label onClick={ () => { selectContact(contact.id)}}></label>
                    </td>
                    <td>{ contact.firstName }</td>
                    <td>
                      {
                        contact.middleName ?
                        contact.middleName :
                        <span style={{ opacity: 0.4 }}>N/A</span>
                      }
                    </td>
                    <td>{ contact.lastName }</td>
                    <td>{ contact.mobileNumber }</td>
                    <td>{ contact.emailAddress }</td>
                    <td>
                      <button className="edit">Edit contact</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        )
      }
    </div>
  );
}

export default App;