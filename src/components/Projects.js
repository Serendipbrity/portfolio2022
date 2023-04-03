import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from '../assets/img/Gators.png';
import projImg2 from '../assets/img/BelizeFS.png';
import projImg3 from '../assets/img/GameSaver.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {
  const projects = [
    {
      title: "Gators Newsletter",
      description: "Elementary School Website",
      imgUrl: projImg1,
      projUrl: "https://serendipbrity.github.io/Gators-Newsletter/",
      gRepo: "https://github.com/Serendipbrity/Gators-Newsletter"
    },
    {
      title: "Belize National Fire Service",
      description: "Organize Fire Station Info",
      imgUrl: projImg2,
      projUrl: "https://belize-fire-dept.herokuapp.com/",
      gRepo: "https://github.com/ppepin34/fire-dept",
    },
    {
      title: "Game Saver",
      description: "**Under Contruction**",
      imgUrl: projImg3,
      projUrl: "https://safe-river-91585.herokuapp.com/",
      gRepo: "https://github.com/Serendipbrity/ChickenDinner",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce" : ''}>
                  <h2>Projects</h2>
                  <p>I enjoy creating projects that solve real world problems. I love finding ways to make life, in general, more efficient.</p>
                </div>}
                </TrackVisibility>
                <Row>
                    {projects.map((project, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                {...project}
                            />
                             )
                        })
                    }
                  </Row>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};