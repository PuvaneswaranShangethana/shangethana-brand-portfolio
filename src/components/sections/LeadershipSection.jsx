import { useEffect, useRef } from "react";
import {
  Award,
  CalendarDays,
  HeartHandshake,
  Users,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  leadershipRoles,
  campusActivities,
  socialImpact,
} from "../../data/activities";

import "./LeadershipSection.css";

gsap.registerPlugin(ScrollTrigger);

const activityIcons = {
  users: Users,
  award: Award,
  calendar: CalendarDays,
  heart: HeartHandshake,
};

function ActivityCard({
  id,
  icon,
  title,
  type,
  description,
  period,
  organisation,
}) {
  const Icon =
    activityIcons[icon] ?? Users;

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
            My development extends beyond technical learning through
            leadership, campus participation and community service. These
            experiences support communication, teamwork, organisation,
            responsibility and future entrepreneurial growth.
          </p>
        </header>

        <div className="leadership-content">
          {/* =================================================
              LEADERSHIP
          ================================================= */}

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
                Roles that strengthen communication, coordination,
                responsibility and organisational experience.
              </p>
            </div>

            <div className="activity-grid">
              {leadershipRoles.map((item) => (
                <ActivityCard
                  key={`leadership-${item.id}`}
                  {...item}
                />
              ))}
            </div>
          </section>

          {/* =================================================
              CAMPUS ACTIVITIES
          ================================================= */}

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
                Participation beyond classroom learning through academic,
                professional and student-development activities.
              </p>
            </div>

            <div className="activity-grid">
              {campusActivities.map((item) => (
                <ActivityCard
                  key={`campus-${item.id}`}
                  {...item}
                />
              ))}
            </div>
          </section>

          {/* =================================================
              COMMUNITY & SOCIAL IMPACT
          ================================================= */}

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
                  key={`social-${item.id}`}
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