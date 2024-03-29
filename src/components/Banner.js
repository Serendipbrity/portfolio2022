import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import { isVisible } from "@testing-library/user-event/dist/utils";
import Me from "../assets/img/Me.jpeg";
import Me3D from "./Me3D";

export const Banner = () => {
  // which word is currently displayed on screen, start on first word
  const [loopNum, setLoopNum] = useState(0);
  // is the word being typed or being deleted, start false because you start by typing the word
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Developer"];
  // portion of word being displayed
  const [text, setText] = useState("");
  //  time passed between letters typed
  const [delta, setDelta] = useState(140 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  // time passed between words being typed out
  const period = 2000;

  // function for typing or deleting
  useEffect(() => {
    // interval in when which text would be updated
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
    // run every time text gets updated
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    // if current state is set to isDeleting then take the full text and get its substring. 1 letter less than the current number of letters. Otherwise add one letter to make text closer to full length of text
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    // set state to updatedText
    setText(updatedText);

    // determine if text is deleting or typing based on speed (deleting is faster)
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    // if the word is not deleting and the updated text equals the full text
    if (!isDeleting && updatedText === fullText) {
      // set isDeleting to true
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      // set delta back to normal pace
      setDelta(period);
      // if deleting and text is completely deleted
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      // update loop number to move on to next text
      setLoopNum(loopNum + 1);

      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner vid" id="home">
           {/* <video autoPlay loop muted >
        <source src='../assets/img/galaxy_space.mov' type='video/mp4' />
      </video> */}
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} className='intro'>
            {/* <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ''}> */}
                  <span className="tagline">Welcome to my Portfolio</span>
                 
                  <h1>
                    {`Hi I'm Brittani `}
                    <br></br>
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  {/* <p><LoremIpsum p={1} /></p> */}
                  <p>
                    {/* {" "}
                    I'm a Full Stack Web Developer. My career goals are to work with,
                    learn and grow in a single company long term. I chose this field
                    because it is challenging and offers a potential for exponential
                    growth of knowledge and skill. I enjoy and take pride in
                    overcoming challenges. I get along well with others. I enjoy
                    working in a team or solo.{" "} */}
                    Serendipity: the occurrence and development of events by chance in a happy or beneficial way.
                    "A fortunate stroke of serendip-brit-y" 
                  </p>
                  
                  {/* </div>
              }
            </TrackVisibility> */}
            <div className="intro picConnect">
            {/* <img src={Me} className='myPic' scrolling="no"></img>  */}
                <a href='#connect'>
                  Contact Me 
                  <ArrowRightCircle size={25}/>
                </a>
                </div>
          </Col>
          <Col >
            <img src={Me} alr="Header Img" className="myPic"/>
            {/* <Me3D/> */}
          </Col>
     
        </Row>
      </Container>
    </section>
  );
};