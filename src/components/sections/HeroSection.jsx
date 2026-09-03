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
          ".hero-career-note",
          {
            opacity: 0,
            y: 18,
            duration: 0.6,
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
            duration: 0.8,
          },
          "-=0.2"
        )
        .from(
          ".hero-visual",
          {
            opacity: 0,
            scale: 0.92,
            duration: 1.1,
          },
          "-=1"
        );
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section
      className="hero-section"
      id="home"
      ref={heroRef}
    >
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="hero-kicker">
            SOFTWARE ENGINEERING × AI × PRODUCT DESIGN
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
            Software Engineering undergraduate building practical
            applications across full-stack development, artificial
            intelligence, databases and user-centred design.
          </p>

          

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-primary"
            >
              Explore Projects
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#about"
              className="btn btn-secondary"
            >
              About Me
              <ArrowDownRight size={18} />
            </a>
          </div>

          <div className="hero-meta">
            <span>Batticaloa, Sri Lanka</span>

            <span>
              Open to junior software engineering opportunities
            </span>
          </div>
        </div>

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
              PRODUCT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;