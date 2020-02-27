import React from "react";

import "./app.scss";

const contactList = [
  {
    id: "quaxi71a",
    firstName: "Aubrey",
    lastName: "Terry",
    mobileNumber: "09591736637",
    emailAddress: "aubreyterry@gmail.com"
  },
  {
    id: "cqc3tmbxc",
    firstName: "Kara",
    lastName: "Lawrence",
    mobileNumber: "09693943668",
    emailAddress: "karalawrence@gmail.com"
  },
  {
    id: "6e3gtfyzs",
    firstName: "Raquel",
    lastName: "Wright",
    mobileNumber: "09177324640",
    emailAddress: "raquelwright@gmail.com"
  },
  {
    id: "lpwx12ww",
    firstName: "Lola",
    lastName: "Garrett",
    mobileNumber: "09453244072",
    emailAddress: "lolagarrett@gmail.com"
  },
];

const App = () => {
  return (
    <div className="contact-container">
      <div className="header-container">
        <h2>Contacts list</h2>
      </div>
      <table>
        <thead>
          <tr className="head">
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
          </tr>
        </thead>
        <tbody>
          {
            contactList.map(contact => (
              <tr key={ contact.id }>
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
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;