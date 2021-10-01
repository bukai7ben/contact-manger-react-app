import {ADD_CONTACT, ContactsActionTypes, ContactsState, DELETE_CONTACT, UPDATE_CONTACT } from "./types";

const initialState: ContactsState  = {
    contacts: []
};

const ContactsReducer = (state = initialState, action: ContactsActionTypes) => {
    switch (action.type) {
        case ADD_CONTACT:
            return {
                ...state,
                contacts: state.contacts.concat(action.payload)
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id!== action.payload)
            };
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact => (contact.id === action.payload.id) ? action.payload : contact),
            };
        default:
            return state;

}}

export default ContactsReducer;
