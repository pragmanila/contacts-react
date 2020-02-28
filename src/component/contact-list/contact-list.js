import React, { forwardRef } from "react";

const ContactList = forwardRef((
	{
    contactList,
    selectContact,
    selectedContactList
  },
  ref
) => (
	<table ref={ ref }>
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
                checked={ selectedContactList.includes(contact.id) }
                type="checkbox"
              />
              <label onClick={ () => { selectContact(contact.id) } }/>
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
));

ContactList.displayName = "ContactList"

export default ContactList;