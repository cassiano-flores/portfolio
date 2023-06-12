import "./contact-circle.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ContactCircle({ url, icon, handleClick }) {
    return handleClick === undefined ? (
        <a href={`${url}`} className="contact-circle" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icon} />
        </a>
    ) : (
        <button className="contact-circle" onClick={handleClick}>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
}
