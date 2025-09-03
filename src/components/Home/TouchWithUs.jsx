import { Col, Container, Row } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export default function TouchWithUs() {
  return (
    <div className="border-top border-bottom py-4 mb-5">
    <Container>
      <Row className="g-4">
        <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
          <FaPhoneAlt size={25} className="textColor" />
          <span className="textColor"> +91 123456789</span>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
          <IoIosMail size={25} className="textColor" />
          <span className="textColor"> soulsyc@example.com</span>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
          <FaLocationDot size={25} className="textColor" />
          <span className="textColor"> Beverley, New York 224 USA</span>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
