import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import ThemeToggle from "../ui/ThemeToggle";
import "./Navbar.css";

const navigationItems = [
  {
    label: "About",
    href: "#about",
    sectionId: "about",
  },
  {
    label: "Journey",
    href: "#journey",
    sectionId: "journey",
  },
  {
    label: "Skills",
    href: "#skills",
    sectionId: "skills",
  },
  {
    label: "Projects",
    href: "#projects",
    sectionId: "projects",
  },
  {
    label: "Contact",
    href: "#contact",
    sectionId: "contact",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* ================================================
     NAVBAR SCROLL BACKGROUND
  ================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* ================================================
     ACTIVE SECTION DETECTION
  ================================================= */

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "skills",
      "projects",
      "journey",
      "contact",
    ];

    const sections = sectionIds
      .map((id) =>
        document.getElementById(id)
      )
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visibleEntries.length > 0) {
          setActiveSection(
            visibleEntries[0].target.id
          );
        }
      },
      {
        rootMargin:
          "-25% 0px -55% 0px",
        threshold: [
          0,
          0.15,
          0.3,
          0.5,
        ],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* ================================================
     MOBILE BODY SCROLL LOCK
  ================================================= */

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add(
        "nav-menu-open"
      );
    } else {
      document.body.classList.remove(
        "nav-menu-open"
      );
    }

    return () => {
      document.body.classList.remove(
        "nav-menu-open"
      );
    };
  }, [menuOpen]);

  /* ================================================
     ESC KEY CLOSE
  ================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.key === "Escape" &&
        menuOpen
      ) {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${
        scrolled
          ? "navbar-scrolled"
          : ""
      }`}
    >
      <div className="container navbar-inner">
        {/* BRAND */}

        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="Shangethana portfolio home"
        >
          SHANGETHANA
          <span>.</span>
        </a>

        {/* NAVIGATION */}

        <nav
          id="portfolio-navigation"
          className={`navbar-menu ${
            menuOpen ? "open" : ""
          }`}
          aria-label="Main navigation"
        >
          {navigationItems.map(
            (item) => (
              <a
                key={item.sectionId}
                href={item.href}
                onClick={closeMenu}
                className={
                  activeSection ===
                  item.sectionId
                    ? "active"
                    : ""
                }
              >
                {item.label}
              </a>
            )
          )}

          <a
            href="#contact"
            className="navbar-cta mobile-cta"
            onClick={closeMenu}
          >
            Let's Talk

            <ArrowUpRight
              size={17}
              strokeWidth={2}
            />
          </a>
        </nav>

        {/* ACTIONS */}

        <div className="navbar-actions">
          <ThemeToggle />

          <a
            href="#contact"
            className="navbar-cta desktop-cta"
          >
            Let's Talk

            <ArrowUpRight
              size={17}
              strokeWidth={2}
            />
          </a>

          <button
            type="button"
            className="navbar-toggle"
            onClick={() =>
              setMenuOpen(
                (current) => !current
              )
            }
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="portfolio-navigation"
          >
            {menuOpen ? (
              <X
                size={20}
                strokeWidth={2}
              />
            ) : (
              <Menu
                size={20}
                strokeWidth={2}
              />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;