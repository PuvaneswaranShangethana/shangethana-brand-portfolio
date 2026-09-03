import { useEffect, useRef } from "react";
import {
  Braces,
  BrainCircuit,
  Database,
  Layers3,
  Wrench,
  Sparkles,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./SkillsSection.css";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    id: "01",
    title: "Used in Projects",
    status: "used",
    icon: Layers3,
    description:
      "Technologies and tools I have already applied in academic, personal or development projects.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Python",
      "FastAPI",
      "Flutter",
      "Dart",
      "C#",
      "PHP",
      "MySQL",
      "SQL Server",
      "Firebase",
      "REST APIs",
      "Git",
      "GitHub",
      "Figma",
    ],
  },

  {
    id: "02",
    title: "Currently Learning",
    status: "learning",
    icon: BrainCircuit,
    description:
      "Areas I am actively strengthening as I prepare for software engineering and future AI-focused roles.",
    skills: [
      "Advanced React",
      "Node.js",
      "Express.js",
      "Machine Learning",
      "scikit-learn",
      "AI API Integration",
      "Gemini AI",
      "Software Testing",
      "Clean Code",
      "System Design",
      "Secure Web Development",
    ],
  },

  {
    id: "03",
    title: "Next to Explore",
    status: "future",
    icon: Sparkles,
    description:
      "Technologies and engineering areas I plan to explore as my career progresses toward AI engineering.",
    skills: [
      "TypeScript",
      "Next.js",
      "Docker",
      "Cloud Platforms",
      "CI/CD",
      "Deep Learning",
      "LLM Applications",
      "MLOps",
      "Advanced System Architecture",
    ],
  },
];

const technicalAreas = [
  {
    icon: Braces,
    title: "Programming",
    items: "JavaScript, Python, C#, Dart, PHP",
  },
  {
    icon: Layers3,
    title: "Application Development",
    items: "React, Flutter, FastAPI, Node.js",
  },
  {
    icon: Database,
    title: "Data & Backend",
    items: "MySQL, SQL Server, Firebase, REST APIs",
  },
  {
    icon: BrainCircuit,
    title: "AI Development",
    items: "Python, scikit-learn, Gemini AI, AI APIs",
  },
  {
    icon: Wrench,
    title: "Tools",
    items: "Git, GitHub, VS Code, Visual Studio, Postman, Figma",
  },
];

function SkillsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".skills-eyebrow", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(".skills-heading-line", {
        scrollTrigger: {
          trigger: ".skills-heading",
          start: "top 82%",
        },
        opacity: 0,
        y: 70,
        stagger: 0.12,
        duration: 0.85,
        ease: "power3.out",
      });

      gsap.from(".skill-group", {
        scrollTrigger: {
          trigger: ".skills-groups",
          start: "top 84%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.75,
        ease: "power3.out",
      });

      gsap.from(".technical-area", {
        scrollTrigger: {
          trigger: ".technical-areas",
          start: "top 86%",
        },
        opacity: 0,
        y: 28,
        stagger: 0.08,
        duration: 0.65,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      className="skills-section"
      id="skills"
      ref={sectionRef}
    >
      <div className="container">
        <header className="skills-header">
          <div className="skills-heading">
            <p className="skills-eyebrow">
              03 / SKILLS &amp; LEARNING
            </p>

            <h2>
              <span className="skills-heading-line">
                LEARNING.
              </span>

              <span className="skills-heading-line">
                BUILDING.
              </span>

              <span className="skills-heading-line skills-heading-accent">
                EVOLVING.
              </span>
            </h2>
          </div>

          <div className="skills-intro">
            <p>
              My technical skills are continuously developing through
              coursework, hands-on projects and independent learning. This
              section reflects where each technology currently fits in my
              learning journey.
            </p>

            <span>
              No percentages. No exaggerated skill ratings. Just practical
              experience and continuous development.
            </span>
          </div>
        </header>

        <div className="skills-groups">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                className={`skill-group skill-group-${group.status}`}
                key={group.id}
              >
                <div className="skill-group-top">
                  <div>
                    <span className="skill-group-number">
                      {group.id}
                    </span>

                    <span className={`skill-status ${group.status}`}>
                      {group.title}
                    </span>
                  </div>

                  <div className="skill-group-icon">
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

                <p className="skill-group-description">
                  {group.description}
                </p>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="skills-divider" />

        <div className="technical-header">
          <div>
            <span>TECHNICAL AREAS</span>

            <h3>
              Technologies grouped by how I use them.
            </h3>
          </div>

          <p>
            These groups make the portfolio easy to update later as new
            frameworks, programming languages and AI technologies are added.
          </p>
        </div>

        <div className="technical-areas">
          {technicalAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article
                className="technical-area"
                key={area.title}
              >
                <div className="technical-area-icon">
                  <Icon
                    size={20}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <h4>
                    {area.title}
                  </h4>

                  <p>
                    {area.items}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;