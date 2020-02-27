import React from "react";

import "./app.scss";

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