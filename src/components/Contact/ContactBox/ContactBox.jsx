import ContactItem from "../ContactItem/ContactItem"
import { Email, Phone, Marker, Github } from "../../../assets/icons/Icons"

import "./ContactBox.scss"

const ContactBox = () => {
    return (
        <div className="contact-box">
            <ContactItem
                className="email"
                icon={<Email />}
                hrefValue="mailto:fabien.pinna@gmail.com"
                textValue="fabien.pinna@gmail.com"
            />
            <ContactItem
                className="phone"
                icon={<Phone />}
                hrefValue="tel:+33616412047"
                textValue="0616412047"
            />
            <ContactItem
                className="github"
                icon={<Github />}
                hrefValue="https://github.com/Fabien-Pinna"
                textValue="Fabien-Pinna"
            />
            <ContactItem
                className="marker"
                icon={<Marker />}
                hrefValue="https://www.google.com/maps/place/Vaucluse"
                textValue="Vaucluse - France"
            />

        </div>
    )
}

export default ContactBox