import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from "./action-type";

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id
});

export const editContact = (contact) => ({
  type: EDIT_CONTACT,
  payload: contact
});