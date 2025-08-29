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
      <Container>
        <Row>
          <Col>
            <h3 className="textColor fw-bold">Simple to Use</h3>
            <p className="textColor">Soulsync is very easy to use just choose your and your partner’s gender,age,and lacation ,and you’re all set! </p>
          </Col>
            <Col>
            <h3 className="textColor fw-bold">Cool Community</h3>
            <p className="textColor">Besides being #1 dating service, we have a supportive and understanding community that’s always ready to help. </p>
            <Row className="">
                <Col>
            <h3 className="textColor fw-bold">Smart Matching</h3>
            <p className="textColor">our matching system is based on geolocation and interests. It helps you find the best people to meet or spend time with. </p>
          </Col>
            </Row>
          </Col>
          <Col>
            <img className="w-100" src={whychooseusImg} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
