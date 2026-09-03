import {
  ArrowUp,
  ArrowUpRight,
} from "lucide-react";

import "./Footer.css";

function Footer() {
  const currentYear =
    new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          {/* BRAND */}

          <div className="footer-brand">
            <a
              href="#home"
              className="footer-logo"
              aria-label="Back to portfolio home"
            >
              SHANGETHANA
              <span>.</span>
            </a>

            <p>
              Software Engineering undergraduate building practical
              experience today for a future career in Software Engineering,
              Artificial Intelligence and technology entrepreneurship.
            </p>

            <div className="footer-career-path">
              <span>
                Undergraduate
              </span>

              <b>→</b>

              <span>
                Junior Software Engineer
              </span>

              <b>→</b>

              <span>
                AI Engineer
              </span>

              <b>→</b>

              <span>
                Entrepreneur
              </span>
            </div>
          </div>

          {/* NAVIGATION */}

          <div className="footer-navigation">
            <div>
              <span className="footer-column-label">
                NAVIGATE
              </span>

              <a href="#about">
                About
              </a>

              <a href="#skills">
                Skills
              </a>

              <a href="#projects">
                Projects
              </a>

              <a href="#journey">
                Journey
              </a>

              <a href="#education">
                Education
              </a>

              <a href="#contact">
                Contact
              </a>
            </div>

            <div>
              <span className="footer-column-label">
                CONNECT
              </span>

              <a
                href="https://www.linkedin.com/in/shangethana11"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                />
              </a>

              <a
                href="https://github.com/PuvaneswaranShangethana"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                />
              </a>

              <a
                href="mailto:YOUR_EMAIL@example.com"
              >
                Email

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="footer-bottom">
          <div>
            <p>
              © {currentYear} Shangethana Puvaneswaran.
            </p>

            <span>
              Built with React • Designed &amp; developed as a personal
              portfolio.
            </span>
          </div>

          <a
            href="#home"
            className="footer-top"
            aria-label="Back to top"
          >
            Back to top

            <ArrowUp
              size={15}
              strokeWidth={1.8}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;