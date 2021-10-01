import ContactCard from "../components/ContactCard";
import Contact from "../models/contact";
import {connect} from "react-redux";
import {StoreState} from "../store/store";
import {FC} from "react";

const mapStateToProps = (state: StoreState) => ({
    contacts: state.ContactsReducer.contacts
})

interface Props {
    contacts: Contact[],
    searchValue:string
}

const CardsList: FC<Props> = ({ contacts,searchValue }) => {
    const contactList = contacts.map((contact: Contact) =>(
        contact.name.toLowerCase().includes(searchValue.toLowerCase())||
        contact.email.toLowerCase().includes(searchValue.toLowerCase())||
        contact.phone.toLowerCase().includes(searchValue)?
        <li key={contact.id}><ContactCard {...contact} /></li>:null)
    );

    return (
        <div>
            <ul className="card-list">{contactList}</ul>
        </div>
    )
}

export default connect(mapStateToProps)(CardsList)
