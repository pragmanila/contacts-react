import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addContact, deleteContact, editContact } from "./redux/action";

import "./app.scss";

const Action = ({ addContact, deleteContact, selectedContactList }) => (
  <div className="actions">
    <button className="add" onClick={addContact}>Add a contact</button>
    {
      selectedContactList.length > 0 &&
      <button className="delete" onClick={deleteContact}>
        Delete { selectedContactList.length } contact{
          selectedContactList.length > 1 &&
          "s"
        }
      </button>
    }
  </div>
);

const ContactForm = ({ mode }) => {
  return (
    <div className="contact-form">
      {/* TODO: Create this form */}
    </div>
  );
};

const App = () => {
  const contactList = useSelector(state => state.contactList);
  const dispatch = useDispatch();

  const [ contactFormMode, setContactFormMode ] = useState("hidden");
  const [ selectedContactList, setSelectedContactList ] = useState([]);

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
      <ContactForm  mode={contactFormMode}/>
      <table>
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
    </div>
  );
}

export default App;