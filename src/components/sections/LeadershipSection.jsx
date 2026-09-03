import { useEffect, useRef } from "react";
import {
  Award,
  CalendarDays,
  HeartHandshake,
  Users,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./LeadershipSection.css";

gsap.registerPlugin(ScrollTrigger);

const leadershipRoles = [
  {
    id: "01",
    icon: Users,
    period: "2026 / 2027",
    title: "Assistant Secretary",
    organisation: "Leo Club of ESOFT Batticaloa",
    type: "Leadership Role",
    description:
      "Supporting club administration, meeting documentation, communication, coordination and community service activities.",
  },
  {
    id: "02",
    icon: Award,
    period: "Previous Leoistic Year",
    title: "Director of Marketing",
    organisation: "Leo Club of ESOFT Batticaloa",
    type: "Leadership Role",
    description:
      "Contributed to marketing, publicity, communication and promotion of club initiatives and service activities.",
  },
];

const campusActivities = [
  {
    id: "01",
    icon: CalendarDays,
    title: "Campus Events & Activities",
    type: "Campus Participation",
    description:
      "Participation in academic, professional, technology and student-development activities organised through campus life.",
  },
  {
    id: "02",
    icon: Users,
    title: "Presentations & Group Activities",
    type: "Professional Development",
    description:
      "Participation in presentations, academic teamwork and collaborative activities supporting communication and professional growth.",
  },
];

const socialImpact = [
  {
    id: "01",
    icon: HeartHandshake,
    title: "Leo Club Social Service Projects",
    type: "Community Service",
    description:
      "Participation in community service activities through the Leo Club of ESOFT Batticaloa, contributing to social and environmental initiatives.",
  },
  {
    id: "02",
    icon: HeartHandshake,
    title: "Coast Shield 365",
    type: "Environmental Service",
    description:
      "Participation in an ongoing beach-cleanup initiative focused on environmental responsibility and cleaner coastal communities.",
  },
];

function ActivityCard({
  id,
  icon: Icon,
  title,
  type,
  description,
  period,
  organisation,
}) {
  return (
    <article className="activity-card">
      <div className="activity-card-top">
        <span className="activity-index">
          {id}
        </span>

        <div className="activity-icon">
          <Icon
            size={21}
            strokeWidth={1.8}
          />
        </div>
      </div>

      <div className="activity-content">
        <span className="activity-type">
          {type}
        </span>

        {period && (
          <span className="activity-period">
            {period}
          </span>
        )}

        <h3>
          {title}
        </h3>

        {organisation && (
          <strong>
            {organisation}
          </strong>
        )}

        <p>
          {description}
        </p>
      </div>
    </article>
  );
}

function LeadershipSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".leadership-eyebrow", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(".leadership-heading-line", {
        scrollTrigger: {
          trigger: ".leadership-heading",
          start: "top 82%",
        },
        opacity: 0,
        y: 65,
        stagger: 0.12,
        duration: 0.85,
        ease: "power3.out",
      });

      gsap.from(".activity-card", {
        scrollTrigger: {
          trigger: ".leadership-content",
          start: "top 84%",
        },
        opacity: 0,
        y: 36,
        stagger: 0.08,
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
      className="leadership-section"
      id="leadership"
      ref={sectionRef}
    >
      <div className="container">
        <header className="leadership-header">
          <div className="leadership-heading">
            <p className="leadership-eyebrow">
              07 / BEYOND CODE
            </p>

            <h2>
              <span className="leadership-heading-line">
                LEAD.
              </span>

              <span className="leadership-heading-line">
                PARTICIPATE.
              </span>

              <span className="leadership-heading-line leadership-heading-accent">
                CONTRIBUTE.
              </span>
            </h2>
          </div>

          <p className="leadership-intro">
            My development extends beyond technical work through leadership,
            campus participation and community service. These experiences help
            strengthen communication, organisation, teamwork and social
            responsibility.
          </p>
        </header>

        <div className="leadership-content">
          {/* Leadership */}
          <section className="activity-group">
            <div className="activity-group-header">
              <div>
                <span>
                  A
                </span>

                <h3>
                  Leadership
                </h3>
              </div>

              <p>
                Roles that support communication, coordination, responsibility
                and organisational growth.
              </p>
            </div>

            <div className="activity-grid">
              {leadershipRoles.map((item) => (
                <ActivityCard
                  key={item.id}
                  {...item}
                />
              ))}
            </div>
          </section>

          {/* Campus activities */}
          <section className="activity-group">
            <div className="activity-group-header">
              <div>
                <span>
                  B
                </span>

                <h3>
                  Campus Activities
                </h3>
              </div>

              <p>
                Participation beyond classroom learning through academic and
                student-development activities.
              </p>
            </div>

            <div className="activity-grid">
              {campusActivities.map((item) => (
                <ActivityCard
                  key={item.id}
                  {...item}
                />
              ))}
            </div>
          </section>

          {/* Social impact */}
          <section className="activity-group social-impact-group">
            <div className="activity-group-header">
              <div>
                <span>
                  C
                </span>

                <h3>
                  Community &amp; Social Impact
                </h3>
              </div>

              <p>
                Service activities reflecting community involvement,
                environmental awareness and social responsibility.
              </p>
            </div>

            <div className="activity-grid">
              {socialImpact.map((item) => (
                <ActivityCard
                  key={item.id}
                  {...item}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default LeadershipSection;