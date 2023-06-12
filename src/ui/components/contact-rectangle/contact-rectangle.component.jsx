import "./contact-rectangle.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ContactRectangle({ url, displayText, icon }) {
    const domain = displayText.split("/")[0];
    const path = displayText.split("/")[1] !== undefined ? `/${displayText.split("/")[1]}` : undefined;

    return (
        <div className="contact-rectangle-container">
            <div className="contact-rectangle-icon">
                <FontAwesomeIcon icon={icon} />
            </div>

            <div className="contact-rectangle-link">
                <a href={`${url}`} target="_blank" rel="noopener noreferrer">
                    <div>{`${domain}`}</div>
                    {path !== undefined ? <div>{`${path}`}</div> : <></>}
                </a>
            </div>
        </div>
    );
}
