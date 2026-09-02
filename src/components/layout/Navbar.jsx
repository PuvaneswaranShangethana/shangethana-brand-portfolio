import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="Shangethana home"
        >
          SHANGETHANA<span>.</span>
        </a>

        <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <a href="#work" onClick={closeMenu}>
            Work
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a
            href="#contact"
            className="navbar-cta mobile-cta"
            onClick={closeMenu}
          >
            Let's Talk
            <ArrowUpRight size={17} />
          </a>
        </nav>

        <div className="navbar-actions">
          <a href="#contact" className="navbar-cta desktop-cta">
            Let's Talk
            <ArrowUpRight size={17} />
          </a>

          <button
            type="button"
            className="navbar-toggle"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <div className="navbar-actions">
            <ThemeToggle />

            <a href="#contact" className="navbar-cta desktop-cta">
                Let's Talk
                <ArrowUpRight size={17} />
            </a>

            <button
                type="button"
                className="navbar-toggle"
                onClick={() => setMenuOpen((current) => !current)}
                aria-label={
                menuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={menuOpen}
            >
                {menuOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;