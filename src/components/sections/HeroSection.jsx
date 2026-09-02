import { useEffect, useRef } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";

import HeroOrb from "../three/HeroOrb";
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
          "-=0.45"
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
            scale: 0.9,
            duration: 1.1,
          },
          "-=1"
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
        <div className="hero-copy">
          <p className="hero-kicker">
            SOFTWARE ENGINEER × AI DEVELOPER × UI/UX DESIGNER
          </p>

          <h1 className="hero-title">
            <span className="hero-title-line">
              I DESIGN
            </span>

            <span className="hero-title-line">
              DIGITAL
            </span>

            <span className="hero-title-line hero-title-accent">
              PRODUCTS.
            </span>
          </h1>

          <p className="hero-description">
            I build thoughtful digital products across software engineering,
            artificial intelligence and user experience design.
          </p>

          <div className="hero-actions">
            <a
              href="#work"
              className="btn btn-primary"
            >
              Explore Work
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
            <span>Available for opportunities</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-frame">
            <HeroOrb />

            <span className="hero-visual-label hero-label-top">
              DESIGN
            </span>

            <span className="hero-visual-label hero-label-right">
              AI
            </span>

            <span className="hero-visual-label hero-label-bottom">
              ENGINEERING
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;