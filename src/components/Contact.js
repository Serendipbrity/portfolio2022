import { Container, Row, Col } from "react-bootstrap";
import Contact3D from "./Contact3D";
// import 'anime.css';
// import TrackVisibility from 'react-on-screen';

// use state to store fields
import { useState } from "react";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  // create state to store form details
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  // submit button is initially set to "send" but when user presses send it updates to "sending"
  const [buttonText, setButtonText] = useState("Send");
  // show error if message doesn't send successfully
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    // update form detail state, leaving the rest of the form intact. Only updating fields indicated in args
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  // submit button function
  const handleSubmit = async (e) => {
    // prevent page reboot when user hits submit
    e.preventDefault();
    // Let user know their response is being submitted
    setButtonText("Sending...");
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      body: JSON.stringify(formDetails),
    });
    // change button back to send
    setButtonText("Send");
    let result = await response.json();
    // clear form after send
    setFormDetails(formInitialDetails);
    // if API call is successful
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong! Please try again later."
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} style={{ width: "500px", height: "500px" }}>
            {/* <img src={contactImg} alt="Contact Us" /> */}
            <Contact3D />
          </Col>
          <Col size={12} md={6}>
            <h2 id='getInTouch'>Get In Touch</h2>
            {/* when form is submitted  */}
            <form onSubmit={handleSubmit}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    // placeholder="First Name"
                    placeholder="/////////////////////////"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  ></input>
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    // placeholder="Last Name"
                    placeholder="/////////////////////////"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  ></input>
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    // placeholder="Email Address"
                    placeholder="/////////////////////////"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  ></input>
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    // placeholder="Phone Number"
                    placeholder="/////////////////////////"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  ></input>
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    // placeholder="Message"
                    placeholder="!!!!! DOWN FOR MAINTENANCE !!!!! Please email: bcourt95@gmail.com"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>

                  {/* text is a variable so that it can update from send to sending and back */}
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {/* display error message if message did not send */}
                {status.message && 
                  <Col>
                    {/* if message sent successfully, don't display error. Show status message so user knows what is happening */}
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
