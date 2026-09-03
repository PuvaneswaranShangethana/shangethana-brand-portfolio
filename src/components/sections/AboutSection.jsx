import { useEffect, useRef } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  PenTool,
  Rocket,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./AboutSection.css";

gsap.registerPlugin(ScrollTrigger);

const disciplines = [
  {
    id: "01",
    icon: Code2,
    title: "Software Engineering",
    text:
      "Building practical web, mobile and desktop applications while strengthening frontend, backend, database and software engineering fundamentals.",
  },
  {
    id: "02",
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    text:
      "Developing knowledge in Python, machine learning, intelligent APIs and AI-enabled application features as I work toward a future AI Engineering career.",
  },
  {
    id: "03",
    icon: PenTool,
    title: "Design & UX",
    text:
      "Combining software development with UI/UX and computer graphics knowledge to create digital products that are functional, usable and visually clear.",
  },
  {
    id: "04",
    icon: Rocket,
    title: "Product Thinking",
    text:
      "Looking beyond implementation toward problem solving, product development and a long-term ambition to build useful technology products and businesses.",
  },
];

function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".about-label", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(".about-heading-line", {
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 82%",
        },
        opacity: 0,
        y: 70,
        rotateX: -8,
        stagger: 0.12,
        duration: 0.85,
        ease: "power3.out",
      });

      gsap.from(".about-description", {
        scrollTrigger: {
          trigger: ".about-story",
          start: "top 84%",
        },
        opacity: 0,
        y: 26,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".about-link", {
        scrollTrigger: {
          trigger: ".about-story",
          start: "top 78%",
        },
        opacity: 0,
        y: 16,
        duration: 0.6,
        delay: 0.15,
        ease: "power3.out",
      });

      gsap.from(".discipline-card", {
        scrollTrigger: {
          trigger: ".disciplines-grid",
          start: "top 84%",
        },
        opacity: 0,
        y: 42,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      className="about-section"
      id="about"
      ref={sectionRef}
    >
      <div className="container">
        <div className="about-top">
          <div className="about-heading">
            <p className="about-label">
              02 / ABOUT
            </p>

            <h2>
              <span className="about-heading-line">
                ENGINEERING
              </span>

              <span className="about-heading-line">
                MEETS
              </span>

              <span className="about-heading-line about-heading-accent">
                CREATIVITY.
              </span>
            </h2>
          </div>

          <div className="about-story">
            <p className="about-description">
              I am Shangethana Puvaneswaran, a Software Engineering
              undergraduate building practical experience across full-stack
              development, databases, artificial intelligence and user
              experience design.
            </p>

            <p className="about-description">
              My current focus is strengthening the technical and practical
              foundations needed to begin my professional career as a Junior
              Software Engineer while continuing to develop my knowledge in AI
              and intelligent application development.
            </p>

            <p className="about-description">
              My planned career path is to begin professionally as a Junior
              Software Engineer, progress into AI Engineering and eventually
              move toward entrepreneurship by building useful technology
              products and solutions.
            </p>

            <a
              href="#journey"
              className="about-link"
            >
              Explore my career journey
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        <div className="about-divider" />

        <div className="about-focus-header">
          <div>
            <span>
              HOW I AM GROWING
            </span>

            <h3>
              Four areas shaping my professional development.
            </h3>
          </div>

          <p>
            These areas represent the combination of engineering, AI, design
            and product thinking that I am developing during my undergraduate
            journey and through practical projects.
          </p>
        </div>

        <div className="disciplines-grid">
          {disciplines.map((discipline) => {
            const Icon = discipline.icon;

            return (
              <article
                className="discipline-card"
                key={discipline.id}
              >
                <div className="discipline-card-top">
                  <span className="discipline-number">
                    {discipline.id}
                  </span>

                  <div className="discipline-icon">
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

                <div className="discipline-content">
                  <h3>
                    {discipline.title}
                  </h3>

                  <p>
                    {discipline.text}
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

export default AboutSection;