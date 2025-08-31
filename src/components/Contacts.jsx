import { Container, Row, Col, Nav } from "react-bootstrap";
import {  FaFacebookF, FaFacebookMessenger, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export default function Contacts() {
  return (
    <>
      <Container fluid className="secondaryColor px-4 py-2">
        <Row className="align-items-center text-center text-md-start">
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-2 gap-md-4 mb-2 mb-md-0"
          >
            <Nav className="flex-column flex-md-row">
              <Nav.Link className="textColor fw-normal d-flex align-items-center gap-1 fw-semibold">
              <FaPhoneAlt size={18}/> +91 123456789
              </Nav.Link>
              <Nav.Link className="textColor fw-normal d-flex align-items-center gap-1 fw-semibold">
                <FaLocationDot size={18} /> Beverley, New York 224 USA
              </Nav.Link>
            </Nav>
          </Col>

          <Col
            xs={12}
            md={6}
            className="d-flex flex-row align-items-center justify-content-center justify-content-md-end gap-2"
          >
            <span className="fw-normal textColor fw-semibold">Find us on :</span>
            <Nav className="d-flex flex-row gap-4 ms-2">
              <Nav.Link className="fw-normal textColor p-0">
                <FaFacebookF size={20} />
              </Nav.Link>
              <Nav.Link className="fw-normal textColor p-0">
                <RiInstagramFill size={20} />
              </Nav.Link>
              <Nav.Link className="fw-normal textColor p-0">
                <FaFacebookMessenger size={20} />
              </Nav.Link>
              <Nav.Link className="fw-normal textColor p-0">
                <FaXTwitter size={20} />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
      <div className="border-bottom"></div>
    </>
  );
}
