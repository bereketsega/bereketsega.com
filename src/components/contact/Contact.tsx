import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaArrowRight } from 'react-icons/fa';
import { ContactType } from '../../types/Contact';
import { contacts } from '../../data/Data';

const Contact = () => {
    return (
        <div className="contactComponent">
            <pre className="command">
                <FaArrowRight
                    size=".6rem"
                    className="commandArrow"
                ></FaArrowRight>{' '}
                <span className="tilde">~</span> whois -u bereket --contact
            </pre>
            <div className="outputWrapper">
                <div className="contactWrapper">
                    {contacts.map((contact) => (
                        <ContactOutput
                            {...contact}
                            key={contact.id}
                        ></ContactOutput>
                    ))}
                </div>
            </div>
            <div className="footer">
                Made with ❤️ by Bereket Sega &copy; {new Date().getFullYear()}.
                All Rights Reserved.
            </div>
        </div>
    );
};

/**
 * ContactOutput is a component that displays the contact data
 *
 * @param props the contact data to be displayed
 * @returns a div containing the contact data
 */
const ContactOutput = (props: ContactType) => {
    return (
        <div className="contactInfoWrapper">
            <div className="contactLinkWrapper">
                <a
                    className="contactLink"
                    href={props.link}
                    target="_blank"
                    rel="noreferrer"
                    title="contact link"
                >
                    <FontAwesomeIcon
                        icon={props.icon}
                        size="lg"
                        color={props.hexColor}
                    />
                    <div className="contactTextWrapper">
                        <p className="contactName">{props.name}</p>
                    </div>
                </a>
            </div>
        </div>
    );
};
export default Contact;
