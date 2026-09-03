import { useEffect, useRef } from "react";
import {
  ArrowRight,
  GraduationCap,
  Code2,
  BrainCircuit,
  Rocket,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { careerJourney } from "../../data/career";

import "./CareerJourney.css";

gsap.registerPlugin(ScrollTrigger);

const journeyIcons = {
  graduation: GraduationCap,
  code: Code2,
  ai: BrainCircuit,
  rocket: Rocket,
};

function CareerJourney() {
  const sectionRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".journey-eyebrow", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(".journey-heading-line", {
        scrollTrigger: {
          trigger: ".journey-heading",
          start: "top 82%",
        },
        opacity: 0,
        y: 70,
        stagger: 0.12,
        duration: 0.85,
        ease: "power3.out",
      });

      gsap.from(".journey-intro", {
        scrollTrigger: {
          trigger: ".journey-intro",
          start: "top 88%",
        },
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".journey-card", {
        scrollTrigger: {
          trigger: ".journey-track",
          start: "top 82%",
        },
        opacity: 0,
        y: 45,
        stagger: 0.14,
        duration: 0.8,
        ease: "power3.out",
      });

      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
            transformOrigin: "left center",
            ease: "none",
            scrollTrigger: {
              trigger: ".journey-track",
              start: "top 80%",
              end: "bottom 65%",
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      className="career-journey"
      id="journey"
      ref={sectionRef}
    >
      <div className="container">
        <header className="journey-header">
          <div className="journey-heading">
            <p className="journey-eyebrow">
              01 / CAREER JOURNEY
            </p>

            <h2>
              <span className="journey-heading-line">
                LEARN.
              </span>

              <span className="journey-heading-line">
                GROW.
              </span>

              <span className="journey-heading-line journey-heading-accent">
                BUILD.
              </span>
            </h2>
          </div>

          <div className="journey-intro">
            <p>
              I am currently a Software Engineering undergraduate. My career
              plan is to begin professionally as a Junior Software Engineer,
              progress into AI Engineering and eventually build technology
              products and businesses as an entrepreneur.
            </p>

            <div className="journey-path-summary">
              <span>Undergraduate</span>

              <ArrowRight size={15} />

              <span>Junior Software Engineer</span>

              <ArrowRight size={15} />

              <span>AI Engineer</span>

              <ArrowRight size={15} />

              <span>Entrepreneur</span>
            </div>
          </div>
        </header>

        <div className="journey-track">
          <div className="journey-track-line">
            <div
              className="journey-progress-line"
              ref={progressRef}
            />
          </div>

          <div className="journey-grid">
            {careerJourney.map((step) => {
              const Icon =
                journeyIcons[step.icon] ?? GraduationCap;

              return (
                <article
                  className={`journey-card journey-card-${step.type}`}
                  key={step.id}
                >
                  <div className="journey-card-marker">
                    <span>
                      {step.id}
                    </span>
                  </div>

                  <div className="journey-card-top">
                    <span className="journey-stage">
                      {step.stage}
                    </span>

                    <div className="journey-icon">
                      <Icon
                        size={22}
                        strokeWidth={1.8}
                      />
                    </div>
                  </div>

                  <span className="journey-status">
                    {step.status}
                  </span>

                  <h3>
                    {step.title}
                  </h3>

                  <p className="journey-description">
                    {step.description}
                  </p>

                  <div className="journey-focus">
                    <span className="journey-focus-label">
                      Focus
                    </span>

                    <div className="journey-focus-list">
                      {step.focus.map((item) => (
                        <span key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="journey-footer">
          <span>
            WHERE I AM NOW
          </span>

          <p>
            Currently completing my Software Engineering studies while
            strengthening practical development skills, building projects and
            preparing for my first professional role as a Junior Software
            Engineer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CareerJourney;