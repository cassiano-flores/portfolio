import React from "react";
import "./home.style.css";
import emailjs from "@emailjs/browser";
import { ContactCircle, ProjectCard, ContactRectangle } from "../../components";
import { faEnvelope, faAngleDoubleDown, faPrint } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TITLES, URLS, PROJECTS, EMAIL_CONFIGS, DISPLAY_TEXT } from "../../../constants";
import Typed from "react-typed";

export function HomeScreen() {
    function scrollSection() {
        const nextSection = document.querySelector(".second-section");
        nextSection.scrollIntoView({ behavior: "smooth" });
    }

    function scrollContact() {
        const nextSection = document.querySelector(".third-section");
        nextSection.scrollIntoView({ behavior: "smooth" });
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(EMAIL_CONFIGS.serviceId, EMAIL_CONFIGS.templateId, e.target, EMAIL_CONFIGS.publicKey).then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
    }

    return (
        <div className="container">
            {/* Welcome */}
            <section className="first-section">
                <div className="overlay"></div>
                <h1>Cassiano Flores</h1>

                <Typed className="fs-h2" strings={TITLES} typeSpeed={100} backSpeed={80} backDelay={2000} showCursor shuffle loop />

                <div className="fs--contact-container">
                    <ContactCircle url={URLS.github} icon={faGithub} />
                    <ContactCircle url={URLS.linkedin} icon={faLinkedin} />
                    <ContactCircle url={URLS.instagram} icon={faInstagram} />
                    <ContactCircle icon={faEnvelope} handleClick={scrollContact} openInNewTab={false} />
                </div>

                <FontAwesomeIcon className="scroll-button" icon={faAngleDoubleDown} onClick={scrollSection} />
            </section>

            {/* Projects */}
            <section className="second-section">
                <h1>Projects</h1>

                <div className="ss--project-container">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={index} image={project.image} description={project.description} url={project.url} />
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section className="third-section">
                <h1>Contact me</h1>

                <div className="ts--container">
                    <form className="ts--form-contact-container" onSubmit={sendEmail}>
                        <label className="form-name-email">
                            <input type="text" placeholder="Name" name="name" />
                            <input type="email" placeholder="Email Address" name="email" />
                        </label>

                        <label className="form-subject">
                            <input type="text" placeholder="Subject" name="subject" />
                        </label>

                        <label className="form-message">
                            <textarea type="text" id="" cols="30" rows="6" placeholder="Your message" name="message" />
                        </label>

                        <label className="form-button">
                            <input type="submit" value="Send Message" />
                        </label>
                    </form>

                    <div className="ts--contact-container">
                        <div className="final-contact-container">
                            <ContactRectangle url={URLS.github} displayText={DISPLAY_TEXT.github} icon={faGithub} />
                            <ContactRectangle url={URLS.linkedin} displayText={DISPLAY_TEXT.linkedin} icon={faLinkedin} />
                        </div>

                        <div className="final-contact-container">
                            <ContactRectangle url={URLS.instagram} displayText={DISPLAY_TEXT.instagram} icon={faInstagram} />
                            <ContactRectangle url={URLS.resume} displayText={DISPLAY_TEXT.resume} icon={faPrint} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
