import React from "react";

import "./header.scss";

const Header = ({ addContact, deleteContact, selectedContactList }) => (
	<div className="header-container">
		<h2>Contacts list</h2>
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
	</div>
);

export default Header;