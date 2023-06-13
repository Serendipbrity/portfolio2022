import { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import linkdInIcon from "../assets/img/nav-icon1.svg";
import githubIcon from "../assets/img/nav-icon4.svg";
import downloadIcon from "../assets/img/file-download-import-icon.svg";
import pdf from "../assets/Resume.pdf";
import sIg from "../assets/img/sIg.svg";

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
    <Navbar expand="lg" className={`${scrolled || isOpen ? "scrolled" : ""}`} expanded={isOpen} id="imgHam">

      <Container>
        <Navbar.Brand href="#home">
          <img src={sIg} alt="logo" id="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsOpen(!isOpen)} />

        <Navbar.Collapse id="basic-navbar-nav" className={isOpen ? "expanded" : ""} >

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
          <span className="navbar-text">
            <div className="social-icon">
              <a
                className="hoverText social-icons"
                title="LinkedIn"
                data-hover="LinkedIn"
                href="https://www.linkedin.com/in/thanksfrom3rittani/"
              >
                <img src={linkdInIcon} alt="LinkedIn" />
              </a>
              <a title="Github" href="https://github.com/Serendipbrity" className="social-icons">
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a
                href={pdf}
                title="Download Resume PDF"
                download="Download Resume"
                className="social-icons">
                <img src={downloadIcon} alt="Resume"></img>
              </a>
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
