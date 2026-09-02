import ProjectCard from "../projects/ProjectCard";
import "./ProjectsSection.css";

const projects = [
  {
    number: "01",
    title: "SafeSphere AI",
    category: "AI • SOFTWARE ENGINEERING",
    status: "In Development",
    description:
      "An AI-driven personal safety platform combining mobile technology, real-time safety features, risk prediction and connected system components. Development is still in progress.",
    technologies: [
      "Python",
      "FastAPI",
      "Flutter",
      "React",
      "Firebase",
      "AI",
    ],
    github: "",
    featured: true,
  },

  {
    number: "02",
    title: "VoyantraAI",
    category: "AI • FULL-STACK DEVELOPMENT",
    status: "In Progress — Academic to Public Product",
    description:
      "Originally developed as an academic AI travel platform and currently being upgraded into a more complete public-facing product with improved usability, deployment and real-world functionality.",
    technologies: [
      "React",
      "FastAPI",
      "Python",
      "MySQL",
      "Gemini AI",
      "Firebase",
    ],
    github: "",
  },

  {
    number: "03",
    title: "YathraDepotX",
    category: "ACADEMIC • FULL-STACK DEVELOPMENT",
    status: "Academic Project",
    description:
      "An academic public transport depot management system created to demonstrate full-stack development, database integration and operational workflow management.",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST API",
    ],
    github:
      "https://github.com/PuvaneswaranShangethana/YathraDepotX",
  },

  {
    number: "04",
    title: "SmartMed Pharmacy",
    category: "ACADEMIC • SOFTWARE DEVELOPMENT",
    status: "Academic Project",
    description:
      "An academic pharmacy management system developed to demonstrate desktop application development, object-oriented programming, SQL Server integration and customer ordering workflows.",
    technologies: [
      "C#",
      "WinForms",
      "SQL Server",
      "ADO.NET",
      "OOP",
    ],
    github:
      "https://github.com/PuvaneswaranShangethana/SmartMedPharmacy",
  },
];

function ProjectsSection() {
  return (
    <section className="projects-section" id="work">
      <div className="container">
        <header className="projects-header">
          <div>
            <p className="projects-eyebrow">
              01 / SELECTED WORK
            </p>

            <h2>
              PROJECTS THAT
              <br />
              <span>DEFINE MY WORK.</span>
            </h2>
          </div>

          <p className="projects-intro">
            Selected work across artificial intelligence, software engineering
            and full-stack product development, including academic projects and
            products currently being developed for broader real-world use.
          </p>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;