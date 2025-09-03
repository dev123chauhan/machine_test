import { Col, Container, Row } from "react-bootstrap";
import hero from "../../assets/hero-image.png";
export default function Hero() {
  return (
    <Container fluid className="px-5 py-2 secondaryColor">
      <Row>
        <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className="py-5 order-2 order-md-1">
          <h1 className="textColor fw-semibold display-1 mb-5">
            New Places, Unforgettable dating.
          </h1>
          <Row className="align-items-center">
            <Col>
              <p className="textColor fs-5">
                Still looking for your significant other? Loven is the place for
                you! Join us now to meet single men and women worldwide.
              </p>
            </Col>
          </Row>
        </Col>
        <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} className="order-1 order-md-2">
          <img src={hero} className="w-100" alt="" />
        </Col>
      </Row>
    </Container>
  );
}
