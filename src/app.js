import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./component/header/header";
import ContactForm from "./component/contact-form/contact-form";
import ContactList from "./component/contact-list/contact-list";

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
      <Header
        addContact={ () => {
          setContactFormMode("add");
        } }
        deleteContact={ () => {
          dispatch(deleteContact(selectedContactList));
        } }
        selectedContactList={ selectedContactList }
      />
      <ContactForm
        formWidth={ contactFormWidth }
        mode={ contactFormMode }
      />
      {
        contactFormMode === "hidden" && (
          <ContactList
            ref={ ref }
            contactList={ contactList }
            selectContact={ selectContact }
            selectedContactList={ selectedContactList }
          />
        )
      }
    </div>
  );
}

export default App;