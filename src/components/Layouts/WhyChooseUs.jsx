import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faBusinessTime,
  faAtom,
  faBandage,
} from "@fortawesome/free-solid-svg-icons";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="why-choose-us-section">
      {/* First Container */}
      <Container className="mt-5">
        <h2
          className="text-center aos-init"
          style={{ color: "#f26f35" }}
          data-aos="fade-up"
        >
          <b>
            Why
            <img
              src="/logo.png"
              alt="Logo"
              style={{ maxHeight: "50px", verticalAlign: "middle" }}
            />
          </b>
        </h2>
      </Container>

      {/* Second Container */}
      <Container className="mt-5">
        {/* First Row */}
        <Row>
          {/* Left Column */}
          <Col md={6} className="why">
            <h3
              style={{ color: "#f26f35" }}
              data-aos="fade-up"
              className="aos-init"
            >
              <FontAwesomeIcon icon={faRobot} className="me-2" />
              We are Result-driven Agency
            </h3>
            <p data-aos="fade-up" className="aos-init">
              Everything that affects the end-user is a part of our design
              process, and we incorporate our philosophy into our work. We aim
              to provide excellent services &amp; solutions to our customers at
              competitive pricing.
            </p>
          </Col>

          {/* Right Column */}
          <Col md={6} className="why">
            <h3
              style={{ color: "#f26f35" }}
              data-aos="fade-down"
              className="aos-init"
            >
              <FontAwesomeIcon icon={faBusinessTime} className="me-2" />
              Provide Value for your Customers' time
            </h3>
            <p data-aos="fade-down" className="aos-init">
              Everything that affects the end-user is a part of our design
              process, and we incorporate our philosophy into our work. We aim
              to provide excellent services &amp; solutions to our customers at
              competitive pricing.
            </p>
          </Col>
        </Row>

        {/* Second Row */}
        <Row className="mt-4">
          {/* Left Column */}
          <Col md={6} className="why">
            <h3
              style={{ color: "#f26f35" }}
              data-aos="fade-up"
              className="aos-init"
            >
              <FontAwesomeIcon icon={faAtom} className="me-2" />
              Innovative Approach
            </h3>
            <p data-aos="fade-up" className="aos-init">
              Our expertise in industry proven Design Thinking, Agile and Lean
              approaches puts us in a position to understand your challenges
              better and provide you with innovative solutions.
            </p>
          </Col>

          {/* Right Column */}
          <Col md={6} className="why">
            <h3
              style={{ color: "#f26f35" }}
              data-aos="fade-down"
              className="aos-init"
            >
              <FontAwesomeIcon icon={faBandage} className="me-2" />
              Enable Brand Loyalty
            </h3>
            <p data-aos="fade-down" className="aos-init">
              Our UI/UX designers are experts in providing designs enabling IT
              solutions that are so compelling that they make your target
              customers keep coming back to you.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
