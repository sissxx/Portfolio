import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";

export const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);



  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 400) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }
  return (
    <header className="header" id="header">
      <nav className={scrolled ? "scrolled container" : "container"}>
        <a href="/" className="nav__logo">
          <img src={logo} alt="Logo" />
        </a>

        <div className={`nav__menu ${navbarOpen ? " show-menu" : ""}`} id="nav-menu">
          <a
            href="/"
            className={
              activeLink === "home" ? "active navbar__link" : "navbar__link"
            }
            onClick={() => onUpdateActiveLink("home")}
          >
            Home
          </a>
          <a
            href="#about"
            className={
              activeLink === "about" ? "active navbar__link" : "navbar__link"
            }
            onClick={() => onUpdateActiveLink("about")}
          >
            About
          </a>
          <a
            href="#education"
            className={
              activeLink === "education"
                ? "active navbar__link"
                : "navbar__link"
            }
            onClick={() => onUpdateActiveLink("education")}
          >
            Education
          </a>
          <a href="#certification" className={
            activeLink === "certificates" ? "active navbar__link" : "navbar__link"
            }onClick={() => onUpdateActiveLink("certificates")}
          >
            Certificates
          </a>
          <a href="#project" className={
            activeLink === "projects" ? "active navbar__link" : "navbar__link"
            }onClick={() => onUpdateActiveLink("projects")}
          >
            Projects
          </a>

          <i className="fa-regular fa-xmark nav__close" id="nav-close" onClick={closeMenu}></i>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={handleToggle}>
          <i className="fa-regular fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};
