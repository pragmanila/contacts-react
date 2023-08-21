import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { del } from "./features/counter/contactSlice";
import ContactModal from "./components/ContactModal";

function App() {
  const contacts = useSelector((state) => state.contacts);
  const [selectedContact, setSelectedContact] = useState();
  const [isModalOpen, setModal] = useState(false);
  const dispatch = useDispatch();

  const handleModal = (id) => {
    setSelectedContact(id);
    setModal(!isModalOpen);
  };

  return (
    <div className="">
      {isModalOpen ? (
        <ContactModal handleModal={handleModal} selectedContact={selectedContact} />
      ) : (
        ""
      )}
      <div className="bg-slate-100 w-full">
        <p className="text-xl font-bold">Contacts</p>
      </div>
      <div className="">
        <button
          className="bg-teal-700 text-white py-1 px-5 rounded-md
           hover:bg-teal-800 duration-200 font-semibold"
          onClick={() => handleModal(null)}
        >
          Add
        </button>
      </div>
      <div>
        <table className="table table-auto text-start overflow-scroll w-full">
          <thead className="text-md font-mono bg-slate-100 border-2 border-blue-100">
            <tr className="p-5">
              <th>id</th>
              <th className="p-3 text-start">First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-teal-50">
            {contacts.map((contact, index) => (
              <tr
                key={index}
                className="cursor-pointer hover:bg-teal-200 duration-200"
              >
                <td>{contact.id}</td>
                <td className="p-2">{contact.first_name}</td>
                <td>{contact.middle_name}</td>
                <td>{contact.last_name}</td>
                <td>{contact.contact_no}</td>
                <td>{contact.email}</td>
                <td className="p-2 flex justify-center items-center gap-1">
                  <span
                    className="text-teal-600 hover:text-teal-700 duration-200"
                    onClick={() => handleModal(contact.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                    </svg>
                  </span>
                  <span
                    className="text-red-600 hover:text-red-700 duration-200"
                    onClick={() =>dispatch(del(contact.id))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash2-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
                    </svg>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
