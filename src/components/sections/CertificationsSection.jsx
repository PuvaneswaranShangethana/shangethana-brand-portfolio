import { useEffect, useRef } from "react";
import {
  Award,
  ExternalLink,
  Plus,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { certifications } from "../../data/certifications";

import "./CertificationsSection.css";

gsap.registerPlugin(ScrollTrigger);

function CertificationsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".certifications-eyebrow", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(".certifications-heading-line", {
        scrollTrigger: {
          trigger: ".certifications-heading",
          start: "top 82%",
        },
        opacity: 0,
        y: 55,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".certification-card", {
        scrollTrigger: {
          trigger: ".certifications-grid",
          start: "top 84%",
        },
        opacity: 0,
        y: 35,
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
      className="certifications-section"
      id="certifications"
      ref={sectionRef}
    >
      <div className="container">
        <header className="certifications-header">
          <div className="certifications-heading">
            <p className="certifications-eyebrow">
              06 / CERTIFICATIONS
            </p>

            <h2>
              <span className="certifications-heading-line">
                CONTINUOUS
              </span>

              <span className="certifications-heading-line certifications-heading-accent">
                LEARNING.
              </span>
            </h2>
          </div>

          <p className="certifications-intro">
            Professional certifications, short courses and verified learning
            achievements will be added here as my technical and professional
            development continues.
          </p>
        </header>

        <div className="certifications-grid">
          {certifications.map((certificate) => (
            <article
              className="certification-card"
              key={certificate.id}
            >
              <div className="certification-top">
                <span>
                  {certificate.id}
                </span>

                <div className="certification-icon">
                  <Award
                    size={21}
                    strokeWidth={1.8}
                  />
                </div>
              </div>

              <div className="certification-content">
                <h3>
                  {certificate.title}
                </h3>

                <p>
                  {certificate.issuer}
                </p>

                <span>
                  {certificate.year}
                </span>
              </div>

              {certificate.credentialUrl ? (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-link"
                >
                  Verify Credential

                  <ExternalLink
                    size={16}
                    strokeWidth={1.8}
                  />
                </a>
              ) : (
                <div className="certification-placeholder">
                  <Plus
                    size={15}
                    strokeWidth={1.8}
                  />

                  Future credential
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;