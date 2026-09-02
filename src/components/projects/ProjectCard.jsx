import { ArrowUpRight } from "lucide-react";
import "./ProjectCard.css";

function ProjectCard({
  number,
  title,
  category,
  status,
  description,
  technologies,
  image,
  github,
  featured = false,
}) {
  return (
    <article
      className={`project-card ${
        featured ? "featured" : ""
      }`}
    >
      <div className="project-visual">
        {image ? (
          <img
            src={image}
            alt={`${title} project`}
          />
        ) : (
          <div className="project-placeholder">
            <span>{number}</span>
            <strong>{title}</strong>
          </div>
        )}

        <span className="project-number">
          {number}
        </span>
      </div>

      <div className="project-content">
        <div className="project-heading">
          <div className="project-heading-content">
            <p className="project-category">
              {category}
            </p>

            <span
              className={`project-status ${
                status.includes("Academic")
                  ? "academic"
                  : status.includes("Development")
                  ? "development"
                  : "progress"
              }`}
            >
              <span className="project-status-dot" />
              {status}
            </span>

            <h3>{title}</h3>
          </div>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github"
              aria-label={`Open ${title} GitHub repository`}
            >
              <ArrowUpRight size={20} />
            </a>
          )}
        </div>

        <p className="project-description">
          {description}
        </p>

        <div className="project-tech">
          {technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            GitHub Repository
            <ArrowUpRight size={17} />
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;