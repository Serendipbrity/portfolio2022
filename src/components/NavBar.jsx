import { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import linkdInIcon from "../assets/img/nav-icon1.svg";
import githubIcon from "../assets/img/nav-icon4.svg";
import downloadIcon from "../assets/img/file-download-import-icon.svg";
import pdf from "../assets/BrittaniCourtResume.pdf";
import sIg from "../assets/img/sIg.svg";
import igIcon from "../assets/img/igIcon.svg";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
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

  return (
    <Navbar
      expand="lg"
      className={`${scrolled || isOpen ? "scrolled" : ""}`}
      expanded={isOpen}
      id="imgHam"
    >
      <Container>
        {/* ------- Lightbulb Brand Icon-------- */}
        <Navbar.Brand href="#home">
          <img src={sIg} alt="logo" id="logo" />
        </Navbar.Brand>
        {/* ------------------------------------ */}
        {/* ---------- Show hide hamburger menu ------------------ */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setIsOpen(!isOpen)}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={isOpen ? "expanded" : ""}
        >
          {/* --------------------------- */}
          {/* ---------- Nav links for page content ------------- */}
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          {/* ------------------------------------------------ */}
         
          <span className="navbar-text">
            {/* -------------- Links for icons ------------------*/}
            <div className="social-icon">
              {/* linkdin */}
              <a
                className="hoverText social-icons"
                title="LinkedIn"
                data-hover="LinkedIn"
                href="https://www.linkedin.com/in/thanksfrom3rittani/"
              >
                <img src={linkdInIcon} alt="LinkedIn" />
              </a>
              {/* github */}
              <a
                title="Github"
                href="https://github.com/Serendipbrity"
                className="social-icons"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
                  {/* Instagram */}
                  <a
                title="Instagram"
                href="https://www.instagram.com/4serendipbrity7/"
                className="social-icons"
              >
                <img src={igIcon} alt="Instagram"></img>
              </a>
              {/* resume */}
              <a
                href={pdf}
                title="Download Resume PDF"
                download="BrittaniCourtResume"
                className="social-icons"
              >
                <img src={downloadIcon} alt="Resume"></img>
              </a>
              {/* --------------------------------------------- */}
              {/* Contact Me Button takes you to contact section */}
              <button
                className="navbar-text social-icon"
                onClick={() => console.log("connect")}
                id="navConnect"
              >
                Contact Me
              </button>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
