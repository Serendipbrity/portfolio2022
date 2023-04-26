import { Col, Container, Row } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projUrl, gRepo, id }) => {
  return (
    <>
    <Col sm={6} md={4} className='fullCol'>
      <div className="proj-imgbx">
        <a href={projUrl}>
            <img src={imgUrl} id={id} />
          <div className="proj-txtx">
            <h3>{title} </h3>
            <span>{description}</span>
          </div>
        </a>
      
        </div>
        <a id="gRepo" href={gRepo} className='glow'>
          Github Repo
        </a>
    </Col>
      </>
  );
};
