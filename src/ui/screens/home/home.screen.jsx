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
        <>
            <div className="container">
                {/* Welcome */}
                <section className="first-section">
                    <div className="overlay"></div>
                    <div className="name-field">
                        <h1>Cassiano</h1> <h1> Flores</h1>
                    </div>

                    <Typed
                        className="fs-h2"
                        strings={TITLES}
                        typeSpeed={100}
                        backSpeed={80}
                        backDelay={2000}
                        showCursor
                        shuffle
                        loop
                    />

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
            </div>

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

            <div id="bg-wrap">
                <svg viewBox="0 0 115 120" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
                            <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                            <stop offset="0%" stop-color="rgba(255, 0, 255, 1)"></stop>
                            <stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop>
                        </radialGradient>
                        <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
                            <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                            <stop offset="0%" stop-color="rgba(255, 255, 0, 1)"></stop>
                            <stop offset="100%" stop-color="rgba(255, 255, 0, 0)"></stop>
                        </radialGradient>
                        <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
                            <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                            <stop offset="0%" stop-color="rgba(0, 255, 255, 1)"></stop>
                            <stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop>
                        </radialGradient>
                        <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5">
                            <animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate>
                            <stop offset="0%" stop-color="rgba(0, 255, 0, 1)"></stop>
                            <stop offset="100%" stop-color="rgba(0, 255, 0, 0)"></stop>
                        </radialGradient>
                        <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5">
                            <animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate>
                            <stop offset="0%" stop-color="rgba(0,0,255, 1)"></stop>
                            <stop offset="100%" stop-color="rgba(0,0,255, 0)"></stop>
                        </radialGradient>
                        <radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5">
                            <animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite"></animate>
                            <stop offset="0%" stop-color="rgba(255,0,0, 1)"></stop>
                            <stop offset="100%" stop-color="rgba(255,0,0, 0)"></stop>
                        </radialGradient>
                    </defs>

                    <rect
                        x="13.744%"
                        y="1.18473%"
                        width="100%"
                        height="100%"
                        fill="url(#Gradient1)"
                        transform="rotate(334.41 50 50)"
                    >
                        <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate>
                        <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 50 50"
                            to="360 50 50"
                            dur="7s"
                            repeatCount="indefinite"
                        ></animateTransform>
                    </rect>
                    <rect
                        x="-2.17916%"
                        y="35.4267%"
                        width="100%"
                        height="100%"
                        fill="url(#Gradient2)"
                        transform="rotate(255.072 50 50)"
                    >
                        <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate>
                        <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate>
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="0 50 50"
                            to="360 50 50"
                            dur="12s"
                            repeatCount="indefinite"
                        ></animateTransform>
                    </rect>
                    <rect
                        x="9.00483%"
                        y="14.5733%"
                        width="100%"
                        height="100%"
                        fill="url(#Gradient3)"
                        transform="rotate(139.903 50 50)"
                    >
                        <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                        <animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            from="360 50 50"
                            to="0 50 50"
                            dur="9s"
                            repeatCount="indefinite"
                        ></animateTransform>
                    </rect>
                </svg>
            </div>
        </>
    );
}
