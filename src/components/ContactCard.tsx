import Contact from "../models/contact";
import {FC, useState} from "react";
import {Dispatch} from "redux";
import {deleteContact, updateContact} from "../store/contacts/actions";
import {connect} from "react-redux";
import AddContact from "./AddContact";


const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        deleteContact: (contactId: string) => dispatch(deleteContact(contactId)),
        updateContact: (contact: Contact) => dispatch(updateContact(contact))
    }
}

let editOrClose = true

type Props = {
    deleteContact: (contactId: string) => void;
    updateContact: (contact: Contact) => void
} & Contact

const ContactCard: FC<Props> = ({name, phone, email, id, deleteContact, updateContact}) => {
    const [isShowContactForm, setShowContactForm] = useState<boolean>(false)
    const handleOnUpdate = (contact: Omit<Contact, "id">) => {
        const updatedContact: Contact = {...contact, id}
        updateContact(updatedContact);
    }
    return (
        (
            <>
                <div className='contact-card'>
                    <div className='card-inputs'>
                        <h1>{name}</h1>
                        <h5>{phone}</h5>
                        <h5>{email}</h5>
                    </div>
                    <div className='card-buttons'>
                        <button onClick={() => deleteContact(id)}>Delete</button>
                        <button onClick={() => {
                            setShowContactForm(!isShowContactForm)
                            editOrClose = !editOrClose
                        }}>{editOrClose ? 'Edit' : 'Close'}</button>
                    </div>
                </div>
                {isShowContactForm && <AddContact updateContact={handleOnUpdate} contact={({name, phone, email, id})}/>}
            </>
        )
    )
}

export default connect(null, mapDispatchToProps)(ContactCard)


