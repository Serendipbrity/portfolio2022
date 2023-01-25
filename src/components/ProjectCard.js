import { Col, Container, Row } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projUrl, gRepo }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={projUrl}>
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h3>{title} </h3>
            <span>{description}</span>
          </div>
        </a>
        <a id="gRepo" href={gRepo}>
          Github Repo
        </a>
      </div>
    </Col>
  );
};
