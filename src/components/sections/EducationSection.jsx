import { useEffect, useRef } from "react";
import {
  GraduationCap,
  BookOpen,
  Award,
  School,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./EducationSection.css";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    id: "01",
    icon: GraduationCap,
    period: "2026 — Present",
    qualification: "BEng (Hons)",
    field: "Computer Software Engineering",
    institution: "London Metropolitan University",
    location: "via ESOFT Metro Campus",
    status: "Current",
  },
  {
    id: "02",
    icon: BookOpen,
    period: "2024 — 2026",
    qualification: "Higher National Diploma in Computing",
    field: "Software Engineering",
    institution: "ESOFT Metro Campus",
    location: "Sri Lanka",
    status: "Completed",
  },
  {
    id: "03",
    icon: Award,
    period: "2021",
    qualification: "NVQ Level 4",
    field: "Computer Graphics Designing",
    institution: "Vocational Qualification",
    location: "Sri Lanka",
    status: "Completed",
  },
  {
    id: "04",
    icon: School,
    period: "2020",
    qualification: "G.C.E. Advanced Level",
    field: "Secondary Education",
    institution: "Sri Lanka",
    location: "",
    status: "Completed",
  },
];

function EducationSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".education-eyebrow", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(".education-heading-line", {
        scrollTrigger: {
          trigger: ".education-heading",
          start: "top 82%",
        },
        opacity: 0,
        y: 60,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".education-item", {
        scrollTrigger: {
          trigger: ".education-list",
          start: "top 84%",
        },
        opacity: 0,
        y: 35,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      className="education-section"
      id="education"
      ref={sectionRef}
    >
      <div className="container">
        <header className="education-header">
          <div className="education-heading">
            <p className="education-eyebrow">
              05 / EDUCATION
            </p>

            <h2>
              <span className="education-heading-line">
                LEARNING
              </span>

              <span className="education-heading-line education-heading-accent">
                WITH PURPOSE.
              </span>
            </h2>
          </div>

          <p className="education-intro">
            My academic journey combines software engineering, computing and
            design foundations that support my long-term path toward software
            engineering, AI and entrepreneurship.
          </p>
        </header>

        <div className="education-list">
          {education.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="education-item"
                key={item.id}
              >
                <div className="education-index">
                  {item.id}
                </div>

                <div className="education-icon">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <div className="education-main">
                  <span className="education-period">
                    {item.period}
                  </span>

                  <h3>
                    {item.qualification}
                  </h3>

                  <p className="education-field">
                    {item.field}
                  </p>
                </div>

                <div className="education-meta">
                  <strong>
                    {item.institution}
                  </strong>

                  {item.location && (
                    <span>
                      {item.location}
                    </span>
                  )}

                  <span
                    className={`education-status ${
                      item.status === "Current"
                        ? "current"
                        : "completed"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;