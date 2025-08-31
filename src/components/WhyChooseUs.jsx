import howitworksImg from "../assets/howitworks.png";
import whychooseusImg from "../assets/whychooseus.png";
import { Col, Container, Row } from "react-bootstrap";
export default function WhyChooseUs() {
  return (
    <div className="secondaryColor">
      <div className="text-center py-5">
        <h4 className="textColor fw-bold fs-3">Our Website</h4>
        <p className="display-5 textColor fw-bold">Why Choose Soulsync</p>
        <img src={howitworksImg} alt="" className="mb-5" />
      </div>
      <Container className="pb-5">
        <Row className="align-items-center">
          <Col lg={8} md={12} className="pe-lg-4">
            <Row className="mb-4">
              <Col md={6} className="mb-4">
                <h3 className="textColor fw-bold mb-3">Simple to Use</h3>
                <p className="textColor">
                  Soulsync is very easy to use just choose your and your
                  partner's gender, age, and location, and you're all set!
                </p>
              </Col>

              <Col md={6} className="mb-4">
                <h3 className="textColor fw-bold mb-3">Cool Community</h3>
                <p className="textColor">
                  Besides being #1 dating service, we have a supportive and
                  understanding community that's always ready to help.
                </p>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col md={8} lg={6}>
                <h3 className="textColor fw-bold mb-3">Smart Matching</h3>
                <p className="textColor">
                  Our matching system is based on geolocation and interests. It
                  helps you find the best people to meet or spend time with.
                </p>
              </Col>
            </Row>
          </Col>

          <Col lg={4} md={12} className="text-center mt-4 mt-lg-0">
            <div className="position-relative d-inline-block">
              <img
                className="w-100 rounded mw-100"
                src={whychooseusImg}
                alt="Happy couple"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
