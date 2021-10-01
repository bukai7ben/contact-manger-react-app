import React, {FC} from 'react'
import {v4 as uuidv4} from 'uuid';
import Contact from '../models/contact';
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {addContact} from "../store/contacts/actions";

export const EMPTY_STRING = "";

type ContactForm = Pick<Contact, "name" | "phone" | "email">

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addContact: (contact: Contact) => dispatch(addContact(contact))
    }
}

interface Props {
    addContact: (contact: Contact) => void;
    updateContact?: (contact: Omit<Contact, "id">) => void;
    contact?: Contact;
}

const AddContact: FC<Props> = ({addContact, updateContact, contact}) => {

    const addContactDefaultValues = {name: EMPTY_STRING, email: EMPTY_STRING, phone: EMPTY_STRING}

    const getDefaultValues = (): ContactForm => contact ? contact : addContactDefaultValues;

    const {register, handleSubmit, reset, formState: {errors}} = useForm<ContactForm>({
        defaultValues: getDefaultValues()
    })

    const onSubmit = (formData: ContactForm) => updateContact ? updateContact(formData) : (reset() , addContact({
        ...formData,
        id: uuidv4()
    }));

    return (

        <form className="contact-inputs">
            <input type="text" className="input" placeholder="Name" {...register("name", {required: true})}/>
            {errors.name && <span className='errors'>Name is required</span>}
            <input type="phone" className="input" placeholder="Phone" {...register("phone", {
                required: "Phone number is required",
                pattern: {
                    value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                    message: "Enter a valid phone number",
                },
            })} />
            {errors.phone && <span className='errors'>{errors.phone.message}</span>}
            <input type="email" className="input" placeholder="Email" {...register("email", {
                required: "E-mail is required",
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Enter a valid e-mail address",
                },
            })} />
            {errors.email && <span className='errors'>{errors.email.message}</span>}
            <button onClick={handleSubmit(onSubmit)}>Save</button>
        </form>

    )
}

export default connect(null, mapDispatchToProps)(AddContact)