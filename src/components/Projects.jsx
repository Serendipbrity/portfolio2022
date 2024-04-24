import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from '../assets/img/Gators.png';
// import projImg2 from '../assets/img/BelizeFS.png';
import projImg3 from '../assets/img/MindFlip.png';
import projImg2 from '../assets/img/healing-handsAbout.png';
import 'animate.css';
import THREE from '../assets/img/Three.png';
import giveorg from '../assets/img/giveorg.png';
import quickattendance from '../assets/img/quickattendance.png';
import TrackVisibility from 'react-on-screen';
// import galaxy from '../assets/img/galaxy_space.mov';


const Projects = () => {
  const projects = [
    {
      title: "Gators Newsletter",
      description: "Elementary School Website",
      imgUrl: projImg1,
      projUrl: "https://serendipbrity.github.io/Gators-Newsletter/",
      gRepo: "https://github.com/Serendipbrity/Gators-Newsletter",
      id: "proj1-img"
    },
    {
      title: "Healing Hands",
      description: "Massage Therapy Website",
      imgUrl: projImg2,
      projUrl: "https://serendipbrity.github.io/healing-hands/",
      gRepo: "https://github.com/Serendipbrity/healing-hands",
      id: "proj2-img" 
    },
    {
      title: "MindFlip",
      description: "Flash Card Game",
      imgUrl: projImg3,
      projUrl: "https://mindflip-88d53dabf742.herokuapp.com/",
      gRepo: "https://github.com/Serendipbrity/MindFlip",
      id: "proj3-img"
    },
    {
      title: "Three",
      description: "Three.js Demo",
      imgUrl: THREE,
      projUrl: "https://serendipbrity.github.io/three/",
      gRepo: "https://serendipbrity.github.io/three/",
      id: "proj4-img"
    },
    {
      title: "Give.org",
      description: "Charity Website",
      imgUrl: giveorg,
      projUrl: "https://give.org/",
      gRepo: "https://give.org/",
      id: "proj5-img"
    },
    {
      title: "Quick Attendance",
      description: "Quickly Take Attandance",
      imgUrl: quickattendance,
      projUrl: "https://github.com/Serendipbrity/QuickAttendance",
      gRepo: "https://github.com/Serendipbrity/QuickAttendance",
      id: "proj6-img"
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
      {/* <video autoPlay loop muted >
        <source src='../assets/img/galaxy_space.mov' type='video/mp4' />
      </video> */}
    </section>
  );
};

export default Projects;