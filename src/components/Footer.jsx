import { Container, Col, Row } from "react-bootstrap";
import linkdInIcon from "../assets/img/nav-icon1.svg";
import downloadIcon from "../assets/img/file-download-import-icon.svg";
import githubIcon from "../assets/img/nav-icon4.svg";
import seren from "../assets/img/seren.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={seren} alt="Logo" id="fLogo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icons-footer-only">
              <a title="Github" href="https://github.com/Serendipbrity">
                <img src={githubIcon} />
              </a>
              <a
                title="LinkdIn"
                href="https://www.linkedin.com/in/thanksfrom3rittani/"
              >
                <img src={linkdInIcon} />
              </a>
              <a href="" title="Download Resume PDF">
                <img src={downloadIcon} />
              </a>
            </div>
            <p>Copyright 2023. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
