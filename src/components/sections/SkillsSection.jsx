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

import {
  skillGroups,
  technicalAreas,
} from "../../data/skills";

import "./SkillsSection.css";

gsap.registerPlugin(ScrollTrigger);

const skillIcons = {
  used: Layers3,
  learning: BrainCircuit,
  future: Sparkles,
};

const technicalIcons = {
  code: Braces,
  layers: Layers3,
  database: Database,
  ai: BrainCircuit,
  tools: Wrench,
};

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

      gsap.from(".skills-intro", {
        scrollTrigger: {
          trigger: ".skills-intro",
          start: "top 86%",
        },
        opacity: 0,
        y: 24,
        duration: 0.7,
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
        {/* =================================================
            HEADER
        ================================================= */}

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
              academic work, practical projects and independent learning.
              This section reflects how each technology currently fits
              within my learning journey.
            </p>

            <span>
              Technologies are grouped by practical use and current learning
              stage rather than percentage-based skill ratings.
            </span>
          </div>
        </header>

        {/* =================================================
            SKILL GROUPS
        ================================================= */}

        <div className="skills-groups">
          {skillGroups.map((group) => {
            const Icon =
              skillIcons[group.status] ?? Layers3;

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

                    <span
                      className={`skill-status ${group.status}`}
                    >
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

        {/* =================================================
            TECHNICAL AREAS
        ================================================= */}

        <div className="technical-header">
          <div>
            <span>
              TECHNICAL AREAS
            </span>

            <h3>
              Technologies grouped by how I use them.
            </h3>
          </div>

          <p>
            This structure makes the portfolio easier to update as new
            programming languages, frameworks, development tools and AI
            technologies are added in the future.
          </p>
        </div>

        <div className="technical-areas">
          {technicalAreas.map((area) => {
            const Icon =
              technicalIcons[area.icon] ?? Braces;

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