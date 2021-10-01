import {ADD_CONTACT, ContactsActionTypes, DELETE_CONTACT, UPDATE_CONTACT } from "./types";
import Contact from "../../models/contact";

export const addContact = (contact: Contact): ContactsActionTypes => {
    return { type: ADD_CONTACT ,payload: contact};
};

export const deleteContact = (contactId: string): ContactsActionTypes => {
    return { type: DELETE_CONTACT ,payload: contactId};
};

export const updateContact = (contact: Contact): ContactsActionTypes => {
    return { type: UPDATE_CONTACT ,payload: contact};
};
