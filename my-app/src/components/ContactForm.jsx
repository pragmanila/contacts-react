import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, update } from "../features/counter/contactSlice";
import { v4 as uuid } from 'uuid';

export default function ContactForm({ selectedContact}) {
  const dispatch = useDispatch();
  const unique_id = uuid();
  const small_id = unique_id.slice(0,8)

  const contacts = useSelector(state => state.contacts)
  selectedContact = contacts.find(contact => contact.id === selectedContact)

  const [contactDetails, setContactDetails] = useState(selectedContact ? selectedContact : {
    id: small_id,
    first_name: '',
    middle_name: '',
    last_name: '',
    contact_no: '',
    email: ''
  });

  const handleFirstName = (e) => {
    setContactDetails({ ...contactDetails, first_name: e.target.value });
  };
  const handleMiddleName = (e) => {
    setContactDetails({ ...contactDetails, middle_name: e.target.value });
  };
  const handleLastName = (e) => {
    setContactDetails({ ...contactDetails, last_name: e.target.value });
  };
  const handleEmail = (e) => {
    setContactDetails({ ...contactDetails, email: e.target.value });
  };
  const handleMobileNo = (e) => {
    setContactDetails({ ...contactDetails, contact_no: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!selectedContact){
        dispatch(create(contactDetails));
    }else{
        dispatch(update(contactDetails))
    }
  };
  return (
    <form
      className="flex flex-col relative justify-center items-center gap-3 
        bg-white p-5 w-full sm:h-4/6 sm:w-5/12 opacity-100"
      onSubmit={handleSubmit}
    >
      <p className="font-serif font-bold text-xl">ADD CONTACT</p>

      <div className="flex items-center w-full">
        <label
          htmlFor=""
          className="hidden sm:block w-12/12 sm:w-3/12 text-end px-2"
        >
          First Name
        </label>
        <input
          className="border-2 w-full border-teal-900 rounded-md p-1 sm:w-9/12"
          placeholder="First Name"
          type="text"
          onChange={handleFirstName}
          value={contactDetails.first_name}
        />
      </div>
      <div className="flex items-center w-full">
        <label
          htmlFor=""
          className="hidden sm:block w-12/12 sm:w-3/12 text-end px-2"
        >
          Middle Name
        </label>
        <input
          className="border-2 w-full border-teal-900 rounded-md p-1 sm:w-9/12"
          placeholder="Middle Name"
          type="text"
          onChange={handleMiddleName}
          value={contactDetails.middle_name}
        />
      </div>
      <div className="flex items-center w-full">
        <label
          htmlFor=""
          className="hidden sm:block w-12/12 sm:w-3/12 text-end px-2"
        >
          Last Name
        </label>
        <input
          className="border-2 w-full border-teal-900 rounded-md p-1 sm:w-9/12"
          placeholder="Last Name"
          type="text"
          onChange={handleLastName}
          value={contactDetails.last_name}
        />
      </div>
      <div className="flex items-center w-full">
        <label
          htmlFor=""
          className="hidden sm:block w-12/12 sm:w-3/12 text-end px-2"
        >
          Contact
        </label>
        <input
          className="border-2 w-full border-teal-900 rounded-md p-1 sm:w-9/12"
          placeholder="Contact"
          type="text"
          onChange={handleMobileNo}
          value={contactDetails.contact_no}
        />
      </div>
      <div className="flex items-center w-full">
        <label
          htmlFor=""
          className="hidden sm:block w-12/12 sm:w-3/12 text-end px-2"
        >
          Email
        </label>
        <input
          className="border-2 w-full border-teal-900 rounded-md p-1 sm:w-9/12"
          placeholder="Mobile Number"
          type="email"
          onChange={handleEmail}
          value={contactDetails.email}
        />
      </div>
      <div className="w-full">
        <button className="bg-teal-700 w-full py-1 rounded-md font-semibold text-white hover:bg-teal-950 duration-200">
          {!selectedContact ? 'ADD': 'UPDATE'}
        </button>
      </div>
    </form>
  );
}
