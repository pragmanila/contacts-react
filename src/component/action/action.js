import React from "react";

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

export default Action;