import ProjectCard from "../projects/ProjectCard";
import {
  academicProjects,
  productProjects,
} from "../../data/projects";

import "./ProjectsSection.css";

function ProjectsSection() {
  return (
    <section
      className="projects-section"
      id="projects"
    >
      <div className="container">
        <header className="projects-header">
          <div>
            <p className="projects-eyebrow">
              04 / PROJECTS
            </p>

            <h2>
              BUILDING THROUGH
              <br />

              <span>
                LEARNING &amp; PRODUCT THINKING.
              </span>
            </h2>
          </div>

          <p className="projects-intro">
            A collection of academic software projects and product-focused
            work demonstrating my development across software engineering,
            AI, databases and digital product development.
          </p>
        </header>

        <div className="projects-group">
          <div className="projects-group-header">
            <div>
              <span className="projects-group-index">
                A
              </span>

              <h3>
                Academic Projects
              </h3>
            </div>

            <p>
              Projects developed through academic coursework to apply software
              engineering concepts in practical systems.
            </p>
          </div>

          <div className="projects-grid academic-projects">
            {academicProjects.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
        </div>

        <div className="projects-group product-projects-group">
          <div className="projects-group-header product-group-header">
            <div>
              <span className="projects-group-index">
                P
              </span>

              <h3>
                Product Development
              </h3>
            </div>

            <p>
              Projects being developed beyond their original academic scope
              toward broader, real-world and potentially commercial use.
            </p>
          </div>

          <div className="projects-grid product-projects">
            {productProjects.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;