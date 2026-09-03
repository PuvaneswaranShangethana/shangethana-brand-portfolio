import { useEffect, useRef } from "react";
import {
  Award,
  ExternalLink,
  Plus,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./CertificationsSection.css";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    id: "01",
    title: "Add Certification",
    issuer: "Issuing Organisation",
    year: "Year",
    credentialUrl: "",
  },
  {
    id: "02",
    title: "Add Certification",
    issuer: "Issuing Organisation",
    year: "Year",
    credentialUrl: "",
  },
];

function CertificationsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
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

    return () => context.revert();
  }, []);

  return (
    <section
      className="certifications-section"
      id="certifications"
      ref={sectionRef}
    >
      <div className="container">
        <header className="certifications-header">
          <div>
            <p className="certifications-eyebrow">
              06 / CERTIFICATIONS
            </p>

            <h2>
              CONTINUOUS
              <span> LEARNING.</span>
            </h2>
          </div>

          <p>
            Professional certifications, short courses and verified learning
            achievements can be added here as my technical journey continues.
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

                <Award
                  size={22}
                  strokeWidth={1.8}
                />
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
                >
                  Verify Credential
                  <ExternalLink size={16} />
                </a>
              ) : (
                <div className="certification-placeholder">
                  <Plus size={15} />
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