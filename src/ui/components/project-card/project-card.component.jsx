import "./project-card.style.css";

export function ProjectCard({ image, description, url }) {
    return (
        <div className="project-card-container">
            <a href={`${url}`} className="project-card" target="_blank" rel="noopener noreferrer">
                <img src={require(`../../../assets/images/${image}`)} alt="Project repository" />
            </a>

            <div className="project-card-description">
                <h3>{description}</h3>
            </div>
        </div>
    );
}
