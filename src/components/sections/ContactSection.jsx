import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Send,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ContactSection.css";

gsap.registerPlugin(ScrollTrigger);

function ContactSection() {
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".contact-eyebrow", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(".contact-heading-line", {
        scrollTrigger: {
          trigger: ".contact-heading",
          start: "top 82%",
        },
        opacity: 0,
        y: 70,
        stagger: 0.12,
        duration: 0.85,
        ease: "power3.out",
      });

      gsap.from(".contact-panel", {
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 84%",
        },
        opacity: 0,
        y: 35,
        stagger: 0.12,
        duration: 0.75,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => {
      context.revert();
    };
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  }

  function validateForm() {
    const newErrors = {};

    const cleanName = formData.name.trim();
    const cleanEmail = formData.email.trim();
    const cleanMessage = formData.message.trim();

    if (!cleanName) {
      newErrors.name = "Please enter your name.";
    } else if (cleanName.length < 2) {
      newErrors.name = "Please enter a valid name.";
    }

    if (!cleanEmail) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!cleanMessage) {
      newErrors.message = "Please enter your message.";
    } else if (cleanMessage.length < 10) {
      newErrors.message =
        "Message should contain at least 10 characters.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    /*
      CHANGE THIS TO YOUR PROFESSIONAL EMAIL
    */

    const portfolioEmail =
      "YOUR_EMAIL@example.com";

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${formData.name.trim()}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\n` +
        `Email: ${formData.email.trim()}\n\n` +
        `Message:\n${formData.message.trim()}`
    );

    window.location.href =
      `mailto:${portfolioEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      className="contact-section"
      id="contact"
      ref={sectionRef}
    >
      <div className="container">
        <header className="contact-header">
          <div className="contact-heading">
            <p className="contact-eyebrow">
              08 / CONTACT
            </p>

            <h2>
              <span className="contact-heading-line">
                LET&apos;S
              </span>

              <span className="contact-heading-line">
                CONNECT &amp;
              </span>

              <span className="contact-heading-line contact-heading-accent">
                BUILD.
              </span>
            </h2>
          </div>

          <p className="contact-intro">
            Currently a Software Engineering undergraduate preparing for
            future Junior Software Engineering opportunities. Open to
            professional connections, technology discussions,
            collaborations and learning opportunities.
          </p>
        </header>

        <div className="contact-content">
          {/* =========================================
              CONTACT INFORMATION
          ========================================== */}

          <div className="contact-panel contact-details">
            <span className="contact-small-label">
              GET IN TOUCH
            </span>

            <h3>
              Have an opportunity, collaboration or idea?
            </h3>

            <p>
              Feel free to connect through email, LinkedIn or GitHub.
              Professional conversations, development opportunities and
              constructive collaborations are welcome.
            </p>

            <div className="contact-links">
              {/* EMAIL */}

              <a
                href="mailto:shangethana@gmail.com"
                className="contact-link"
                aria-label="Send Shangethana an email"
              >
                <div className="contact-link-icon">
                  <Mail
                    size={18}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <span>Email</span>

                  <strong>
                    shangethana@gmail.com
                  </strong>
                </div>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                />
              </a>

              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/shangethana11"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="Open Shangethana LinkedIn profile"
              >
                <div className="contact-link-icon contact-brand-symbol">
                  in
                </div>

                <div>
                  <span>LinkedIn</span>

                  <strong>
                    Connect professionally
                  </strong>
                </div>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                />
              </a>

              {/* GITHUB */}

              <a
                href="https://github.com/PuvaneswaranShangethana"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="Open Shangethana GitHub profile"
              >
                <div className="contact-link-icon contact-brand-symbol">
                  GH
                </div>

                <div>
                  <span>GitHub</span>

                  <strong>
                    View development work
                  </strong>
                </div>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                />
              </a>
            </div>
          </div>

          {/* =========================================
              CONTACT FORM
          ========================================== */}

          <div className="contact-panel contact-form-panel">
            <span className="contact-small-label">
              SEND A MESSAGE
            </span>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* NAME */}

              <div className="form-group">
                <label htmlFor="contact-name">
                  Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  maxLength={80}
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name
                      ? "contact-name-error"
                      : undefined
                  }
                />

                {errors.name && (
                  <span
                    id="contact-name-error"
                    className="form-error"
                    role="alert"
                  >
                    {errors.name}
                  </span>
                )}
              </div>

              {/* EMAIL */}

              <div className="form-group">
                <label htmlFor="contact-email">
                  Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  maxLength={120}
                  placeholder="name@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email
                      ? "contact-email-error"
                      : undefined
                  }
                />

                {errors.email && (
                  <span
                    id="contact-email-error"
                    className="form-error"
                    role="alert"
                  >
                    {errors.email}
                  </span>
                )}
              </div>

              {/* MESSAGE */}

              <div className="form-group">
                <label htmlFor="contact-message">
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={1500}
                  rows={6}
                  placeholder="Tell me about the opportunity, collaboration or project..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message
                      ? "contact-message-error"
                      : undefined
                  }
                />

                <div className="message-meta">
                  {errors.message ? (
                    <span
                      id="contact-message-error"
                      className="form-error"
                      role="alert"
                    >
                      {errors.message}
                    </span>
                  ) : (
                    <span />
                  )}

                  <span>
                    {formData.message.length}/1500
                  </span>
                </div>
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="contact-submit"
              >
                Send Message

                <Send
                  size={17}
                  strokeWidth={1.8}
                />
              </button>

              <p className="contact-form-note">
                This form opens your default email application. Message
                content is not stored by this portfolio website.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;