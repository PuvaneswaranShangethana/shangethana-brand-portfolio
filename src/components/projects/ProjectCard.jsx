import {
  ArrowUpRight,
} from "lucide-react";

import "./ProjectCard.css";

function getStatusClass(status) {
  const normalized =
    status.toLowerCase();

  if (
    normalized.includes("public") ||
    normalized.includes("product")
  ) {
    return "product";
  }

  if (
    normalized.includes("development")
  ) {
    return "development";
  }

  return "academic";
}

function ProjectCard({
  number,
  title,
  category,
  projectType,
  applicationType,
  origin,
  status,
  description,
  technologies = [],
  image,
  github,
  featured = false,
  variant = "academic",
}) {
  const statusClass =
    getStatusClass(status);

  return (
    <article
      className={`
        project-card
        project-card-${variant}
        ${featured ? "featured" : ""}
      `}
    >
      <div className="project-visual">
        {image ? (
          <img
            src={image}
            alt={`${title} interface`}
            loading="lazy"
          />
        ) : (
          <div className="project-placeholder">
            <span>
              {applicationType}
            </span>

            <strong>
              {title}
            </strong>

            <small>
              {projectType}
            </small>
          </div>
        )}

        <span className="project-number">
          {number}
        </span>

        <span
          className={`project-visual-origin ${variant}`}
        >
          {origin}
        </span>
      </div>

      <div className="project-content">
        <div className="project-heading">
          <div className="project-heading-content">
            <p className="project-category">
              {category}
            </p>

            <span
              className={`project-status ${statusClass}`}
            >
              <span className="project-status-dot" />

              {status}
            </span>

            <h3>
              {title}
            </h3>
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

        <div className="project-type-info">
          <div>
            <span>
              Project Type
            </span>

            <strong>
              {projectType}
            </strong>
          </div>

          <div>
            <span>
              Application
            </span>

            <strong>
              {applicationType}
            </strong>
          </div>

          <div>
            <span>
              Origin
            </span>

            <strong>
              {origin}
            </strong>
          </div>
        </div>

        <p className="project-description">
          {description}
        </p>

        <div className="project-tech">
          {technologies.map(
            (technology) => (
              <span key={technology}>
                {technology}
              </span>
            )
          )}
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