import "./project-card.style.css";

export function ProjectCard({ image, description, url }) {
    return (
        <div className="project-card-container">
            <a href={`${url}`} className="project-card" target="_blank" rel="noopener noreferrer">
                <img src={image} alt="Project repository" />
            </a>

            <h3>{description}</h3>
        </div>
    );
}
