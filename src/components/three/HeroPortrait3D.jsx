import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import profileOne from "../../assets/profile/profile-1.png";
import profileTwo from "../../assets/profile/profile-2.png";

import "./HeroPortrait3D.css";

const profileImages = [
  {
    src: profileOne,
    alt: "Shangethana Puvaneswaran portrait one",
  },
  {
    src: profileTwo,
    alt: "Shangethana Puvaneswaran portrait two",
  },
];

function HeroPortrait3D() {
  const [activeImage, setActiveImage] = useState(0);

  const wrapperRef = useRef(null);
  const portraitRef = useRef(null);
  const imageRef = useRef(null);

  /* ======================================================
     AUTOMATIC IMAGE CHANGE
  ====================================================== */

  useEffect(() => {
    const interval = window.setInterval(() => {
      const image = imageRef.current;

      if (!image) return;

      const timeline = gsap.timeline();

      timeline
        .to(image, {
          opacity: 0,
          rotateY: 70,
          scale: 0.92,
          duration: 0.55,
          ease: "power3.in",
        })

        .call(() => {
          setActiveImage((current) =>
            current === profileImages.length - 1 ? 0 : current + 1
          );
        })

        .set(image, {
          rotateY: -70,
          scale: 0.92,
        })

        .to(image, {
          opacity: 1,
          rotateY: 0,
          scale: 1,
          duration: 0.75,
          ease: "power3.out",
        });
    }, 4500);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  /* ======================================================
     MOUSE 3D TILT
  ====================================================== */

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const portrait = portraitRef.current;

    if (!wrapper || !portrait) return;

    const handleMouseMove = (event) => {
      const bounds = wrapper.getBoundingClientRect();

      const mouseX =
        (event.clientX - bounds.left) / bounds.width - 0.5;

      const mouseY =
        (event.clientY - bounds.top) / bounds.height - 0.5;

      gsap.to(portrait, {
        rotateY: mouseX * 12,
        rotateX: mouseY * -12,
        x: mouseX * 10,
        y: mouseY * 10,
        duration: 0.8,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(portrait, {
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);

      gsap.killTweensOf(portrait);
    };
  }, []);

  /* ======================================================
     INITIAL ENTRANCE ANIMATION
  ====================================================== */

  useEffect(() => {
    const portrait = portraitRef.current;

    if (!portrait) return;

    gsap.fromTo(
      portrait,
      {
        opacity: 0,
        scale: 0.88,
        rotateY: -12,
      },
      {
        opacity: 1,
        scale: 1,
        rotateY: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      className="portrait-3d-wrapper"
      ref={wrapperRef}
    >
      <div
        className="portrait-orb"
        ref={portraitRef}
      >
        {/* Background glow */}
        <div className="portrait-glow portrait-glow-one" />
        <div className="portrait-glow portrait-glow-two" />

        {/* 3D orbit rings */}
        <div className="portrait-orbit portrait-orbit-one">
          <span />
        </div>

        <div className="portrait-orbit portrait-orbit-two">
          <span />
        </div>

        {/* Portrait */}
        <div className="portrait-image-shell">
          <img
            key={activeImage}
            ref={imageRef}
            src={profileImages[activeImage].src}
            alt={profileImages[activeImage].alt}
            className="portrait-image"
            draggable="false"
          />

          <div className="portrait-image-overlay" />
          <div className="portrait-glass-highlight" />
        </div>

        {/* Image position indicator */}
        <div
          className="portrait-number"
          aria-label={`Portrait ${activeImage + 1} of ${
            profileImages.length
          }`}
        >
          0{activeImage + 1}

          <span>
            / 0{profileImages.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroPortrait3D;