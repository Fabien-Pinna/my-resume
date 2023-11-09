import Title from "../Title/Title";
import ContactBox from "./ContactBox/ContactBox";

import './Contact.scss'

const Contact = () => {
    return (
        <div className="contact">
            <Title title="Contacts" />
            <ContactBox />

        </div>
    )
}

export default Contact