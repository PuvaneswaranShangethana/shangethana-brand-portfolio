import { useEffect, useRef } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

import gsap from "gsap";

import HeroPortrait3D from "../three/HeroPortrait3D";
import "./HeroSection.css";

function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".hero-kicker", {
          opacity: 0,
          y: 18,
          duration: 0.6,
        })

        .from(
          ".hero-title-line",
          {
            opacity: 0,
            y: 90,
            rotateX: -12,
            stagger: 0.12,
            duration: 0.9,
          },
          "-=0.2"
        )

        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 22,
            duration: 0.7,
          },
          "-=0.4"
        )

        .from(
          ".hero-actions",
          {
            opacity: 0,
            y: 18,
            duration: 0.6,
          },
          "-=0.4"
        )

        .from(
          ".hero-meta",
          {
            opacity: 0,
            y: 12,
            duration: 0.7,
          },
          "-=0.25"
        )

        .from(
          ".hero-visual",
          {
            opacity: 0,
            scale: 0.92,
            x: 35,
            duration: 1.05,
          },
          "-=0.9"
        );
    }, heroRef);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      className="hero-section"
      id="home"
      ref={heroRef}
    >
      <div className="container hero-layout">
        {/* =========================================
            HERO CONTENT
        ========================================== */}

        <div className="hero-copy">
          <p className="hero-kicker">
            SOFTWARE ENGINEERING UNDERGRADUATE
            {" • "}
            AI LEARNER
            {" • "}
            UI/UX DESIGNER
          </p>

          <h1 className="hero-title">
            <span className="hero-title-line">
              I BUILD
            </span>

            <span className="hero-title-line">
              DIGITAL
            </span>

            <span className="hero-title-line hero-title-accent">
              SOLUTIONS.
            </span>
          </h1>

          <p className="hero-description">
            I am a Software Engineering undergraduate building practical
            experience through academic and personal projects in full-stack
            development, databases, artificial intelligence and user-centred
            design.
          </p>

          {/* =========================================
              ACTION BUTTONS
          ========================================== */}

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-primary"
            >
              Explore Projects

              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
              />
            </a>

            <a
              href="#about"
              className="btn btn-secondary"
            >
              About Me

              <ArrowDownRight
                size={18}
                strokeWidth={1.8}
              />
            </a>
          </div>

          {/* =========================================
              META
          ========================================== */}

          <div className="hero-meta">
            <span>
              Batticaloa, Sri Lanka
            </span>

            <span>
              Preparing for Junior Software Engineering opportunities
            </span>
          </div>
        </div>

        {/* =========================================
            3D PORTRAIT
        ========================================== */}

        <div className="hero-visual">
          <div className="hero-visual-frame">
            <HeroPortrait3D />

            <span className="hero-visual-label hero-label-top">
              SOFTWARE
            </span>

            <span className="hero-visual-label hero-label-right">
              AI
            </span>

            <span className="hero-visual-label hero-label-bottom">
              DESIGN
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;