import './ContactItem.scss'

const ContactItem = ({ className, icon, hrefValue, textValue }) => {
    return (
        <>
            <div className={`contact-item ${className}`}>
                {icon}
                <a className="link"
                    href={hrefValue}
                >
                    {textValue}
                </a>
            </div>


        </>
    )
}

export default ContactItem