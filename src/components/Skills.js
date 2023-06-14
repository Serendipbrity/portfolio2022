import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import Projects from "./Projects";
import HTML from "../assets/img/HTML5_Badge.svg.png";
import CSS from "../assets/img/CSS3.svg.png";
import Git from "../assets/img/Git.svg.png";
import OOP from "../assets/img/OOP.svg.png";
import Express from "../assets/img/Express.svg.png";
import Node from "../assets/img/Node.js.svg.png";
import Github from "../assets/img/Github.svg.png";
import Javascript from "../assets/img/Javascript.svg.png";
import React from "../assets/img/React.svg.png";
import MongoDB from "../assets/img/MongoDB.svg.png";
import Bootstrap from "../assets/img/Bootstrap.svg.png";
import Sass from "../assets/img/Sass.svg.png";
import API from "../assets/img/API.svg.png";
import Mongoose from "../assets/img/Mongoose.svg.png";
import GraphQL from "../assets/img/GraphQL.svg.png";

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
                        <img src={HTML} alt="Image"></img>
                                                      <h5>HTML</h5>
                                                      </Col>
                                                  <Col>
                        <img src={CSS} alt="Image"></img>
                                                      <h5>CSS</h5>
                                                  </Col>
                                                  <Col>
                        <img src={Git} alt="Image"></img>
                                                      <h5>Git</h5>
                                                      </Col>
                                                  <Col>
                        <img src={OOP} alt="Image"></img>
                                                      <h5>OOP</h5>
                                                      </Col>
                       </Row>
                </Carousel.Item>
                <Carousel.Item className="item">
                                              <Row>
                                                  <Col>
                        <img src={Express} alt="Image"></img>
                                                      <h5>Express</h5>
                                                      </Col>
                                                  <Col>
                        <img src={Mongoose} alt="Image"></img>
                                                      <h5>Mongoose</h5>
                                                  </Col>
                                                  <Col>
                        <img src={Bootstrap} alt="Image"></img>
                                                      <h5>Bootstrap</h5>
                                                      </Col>
                                                  <Col>
                        <img src={React} alt="Image"></img>
                                                      <h5>React</h5>
                                                      </Col>
                       </Row>
                </Carousel.Item>
                <Carousel.Item className="item">
                                              <Row>
                                                  <Col>
                        <img src={MongoDB} alt="Image"></img>
                                                      <h5>MongoDB</h5>
                                                      </Col>
                                                  <Col>
                        <img src={Github} alt="Image"></img>
                                                      <h5>Github</h5>
                                                  </Col>
                                                  <Col>
                        <img src={GraphQL} alt="Image"></img>
                                                      <h5>GraphQL</h5>
                                                      </Col>
                                                  <Col>
                        <img src={Javascript} alt="Image"></img>
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
                        <img src={API} alt="Image"></img>
                                                      <h5>APIs</h5>
                                                  </Col>
                                                  <Col>
                        <img src={Node} alt="Image"></img>
                                                      <h5>Node</h5>
                                                      </Col>
                                                  <Col>
                        <img src={Sass} alt="Image"></img>
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
