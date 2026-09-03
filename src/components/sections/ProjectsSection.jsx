import ProjectCard from "../projects/ProjectCard";
import "./ProjectsSection.css";

const academicProjects = [
  {
    number: "01",

    title: "SafeSphere AI",

    category:
      "AI • MOBILE • IoT • SOFTWARE ENGINEERING",

    projectType:
      "AI-Driven Personal Safety System",

    applicationType:
      "Mobile Application + Web Admin Platform",

    origin:
      "Academic Project",

    status:
      "In Development",

    description:
      "An AI-driven personal safety system combining a Flutter mobile application, web-based administration, real-time location features, SOS functionality, risk prediction and IoT-supported safety components.",

    technologies: [
      "Flutter",
      "React",
      "Python",
      "FastAPI",
      "Firebase",
      "scikit-learn",
      "ESP32",
    ],

    github: "",

    featured: true,

    variant: "academic",
  },

  {
    number: "02",

    title: "YathraDepotX",

    category:
      "FULL-STACK • TRANSPORT MANAGEMENT",

    projectType:
      "Public Transport Depot Management System",

    applicationType:
      "Full-Stack Web Application",

    origin:
      "Academic Project",

    status:
      "Academic Project",

    description:
      "A full-stack academic system designed to manage public transport depot operations including routes, vehicles, drivers, schedules and related administrative workflows.",

    technologies: [
      "React",
      "JavaScript",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST API",
    ],

    github:
      "https://github.com/PuvaneswaranShangethana/YathraDepotX",

    variant: "academic",
  },

  {
    number: "03",

    title: "SmartMed Pharmacy",

    category:
      "DESKTOP • DATABASE • HEALTHCARE",

    projectType:
      "Pharmacy Management System",

    applicationType:
      "C# Windows Desktop Application",

    origin:
      "Academic Project",

    status:
      "Academic Project",

    description:
      "An academic pharmacy management application supporting customer accounts, medicine search, shopping cart functionality, prescription handling, ordering and SQL Server database integration.",

    technologies: [
      "C#",
      "WinForms",
      "SQL Server",
      "ADO.NET",
      "OOP",
    ],

    github:
      "https://github.com/PuvaneswaranShangethana/SmartMedPharmacy",

    variant: "academic",
  },
];

const productProjects = [
  {
    number: "04",

    title: "VoyantraAI",

    category:
      "AI • FULL-STACK • PRODUCT DEVELOPMENT",

    projectType:
      "AI-Powered Sri Lankan Travel Platform",

    applicationType:
      "Full-Stack AI Web Application",

    origin:
      "Academic Origin",

    status:
      "Evolving into Public Product",

    description:
      "Originally developed as an academic AI travel platform and currently being expanded toward a public-facing product with improved user experience, production deployment, intelligent travel assistance and broader real-world functionality.",

    technologies: [
      "React",
      "Python",
      "FastAPI",
      "MySQL",
      "Gemini AI",
      "Firebase",
      "REST API",
    ],

    github: "",

    featured: true,

    variant: "product",
  },
];

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
            A collection of academic software
            projects and product-focused work
            demonstrating my development across
            software engineering, AI, databases
            and digital product development.
          </p>
        </header>

        {/* =========================================
            ACADEMIC PROJECTS
        ========================================== */}

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
              Projects developed through academic
              coursework to apply software
              engineering concepts in practical
              systems.
            </p>
          </div>

          <div className="projects-grid academic-projects">
            {academicProjects.map(
              (project) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                />
              )
            )}
          </div>
        </div>

        {/* =========================================
            PRODUCT DEVELOPMENT
        ========================================== */}

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
              Projects being developed beyond
              their original academic scope toward
              broader, real-world and potentially
              commercial use.
            </p>
          </div>

          <div className="projects-grid product-projects">
            {productProjects.map(
              (project) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;