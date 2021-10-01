import Contact from "../../models/contact";

export const ADD_CONTACT = "add_contact"
export const DELETE_CONTACT = "delete_contact"
export const UPDATE_CONTACT = "update_contact"
export const SEARCH_CONTACT = "search_contact"

export interface AddContactAction {
    type: typeof ADD_CONTACT;
    payload: Contact;
}

export interface DeleteContactAction {
    type: typeof DELETE_CONTACT;
    payload: string;
}
export interface UpdateContactAction {
    type: typeof UPDATE_CONTACT;
    payload: Contact;
}

export interface ContactsState {
    contacts : Contact[];
}

export type ContactsActionTypes = AddContactAction | DeleteContactAction | UpdateContactAction ;