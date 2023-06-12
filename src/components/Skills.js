import Carousel from "react-bootstrap/Carousel";
import { ProjectCard } from "./ProjectCard.js";
// import { Projects } from "./Projects";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import Projects from "./Projects";
// import colorSharp2 from '../assets/img/color-sharp2.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

    
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2 id="skillHead">Skills</h2>
              {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="skill-tabs"
                >
                  <Nav.Item>
                    <Nav.Link className="skillTab" eventKey="first" id='firstTab'>Front End</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="skillTab" eventKey="second">Back End</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    {/* {projects.map((project, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                {...project}
                            />
                             )
                        })
                    } */} 
                    <Carousel
                      responsive={responsive}
                      infinite="true"
                      className="skill-slider"
                    >
                                          <Carousel.Item className="item">
                                              <Row>
                                                  <Col>
                        <img src={meter1} alt="Image"></img>
                                                      <h5>HTML</h5>
                                                      </Col>
                                                  <Col>
                        <img src={meter2} alt="Image"></img>
                                                      <h5>CSS</h5>
                                                  </Col>
                                                  <Col>
                        <img src={meter1} alt="Image"></img>
                                                      <h5>Git</h5>
                                                      </Col>
                                                  <Col>
                        <img src={meter1} alt="Image"></img>
                                                      <h5>OOP</h5>
                                                      </Col>
                       </Row>
                </Carousel.Item>
                <Carousel.Item className="item">
                                              <Row>
                                                  <Col>
                        <img src={meter1} alt="Image"></img>
                                                      <h5>Express</h5>
                                                      </Col>
                                                  <Col>
                        <img src={meter2} alt="Image"></img>
                                                      <h5>Mongoose</h5>
                                                  </Col>
                                                  <Col>
                        <img src={meter1} alt="Image"></img>
                                                      <h5>Bootstrap</h5>
                                                      </Col>
                                                  <Col>
                        <img src={meter1} alt="Image"></img>
                                                      <h5>React</h5>
                                                      </Col>
                       </Row>
                </Carousel.Item>
                <Carousel.Item className="item">
                                              <Row>
                                                  <Col>
                        <img src={meter1} alt="Image"></img>
                                                      <h5>MongoDB</h5>
                                                      </Col>
                                                  <Col>
                        <img src={meter2} alt="Image"></img>
                                                      <h5>Github</h5>
                                                  </Col>
                                                  <Col>
                        <img src={meter1} alt="Image"></img>
                                                      <h5>GraphQL</h5>
                                                      </Col>
                                                  <Col>
                        <img src={meter1} alt="Image"></img>
                                                      <h5 className="longWord">Javascript</h5>
                                                      </Col>
                       </Row>
                </Carousel.Item>
                <Carousel.Item className="item">
                                              <Row>
                                                  <Col>
                        <img src={meter1} alt="Image"></img>
                                                      <h5>MVC</h5>
                                                      </Col>
                                                  <Col>
                        <img src={meter2} alt="Image"></img>
                                                      <h5>APIs</h5>
                                                  </Col>
                                                  <Col>
                        <img src={meter1} alt="Image"></img>
                                                      <h5>Node</h5>
                                                      </Col>
                                                  <Col>
                        <img src={meter1} alt="Image"></img>
                                                      <h5>Sass</h5>
                                                      </Col>
                       </Row>
                                          </Carousel.Item>
                    </Carousel>
                  {/* </Tab.Pane>
                </Tab.Content>
              </Tab.Container> */}
            </div>
          </Col>
        </Row>
      </Container>
      <Projects />
      {/* <img className="background-image-left" src={colorSharp} /> */}
      {/* <img className="background-image-right" src={colorSharp2}/> */}
    </section>
  );
};
