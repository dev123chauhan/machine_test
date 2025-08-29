import { Facebook, Instagram, MapPin, MessageCircleMore, Phone, Twitter } from "lucide-react";
import { Container, Row, Col, Nav } from "react-bootstrap";

export default function Contacts() {
  return (
    <>
      <Container fluid className="secondaryColor px-4 py-2">
        <Row className="align-items-center text-center text-md-start">
          {/* Left Side - Phone & Address */}
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-2 gap-md-4 mb-2 mb-md-0"
          >
            <Nav className="flex-column flex-md-row">
              <Nav.Link className="textColor fw-normal d-flex align-items-center gap-1">
                <Phone size={18} /> +91 123456789
              </Nav.Link>
              <Nav.Link className="textColor fw-normal d-flex align-items-center gap-1">
                <MapPin size={18} /> Beverley, New York 224 USA
              </Nav.Link>
            </Nav>
          </Col>

          {/* Right Side - Social Links */}
          <Col
            xs={12}
            md={6}
            className="d-flex flex-row align-items-center justify-content-center justify-content-md-end gap-2"
          >
            <span className="fw-normal textColor">Find us on :</span>
            <Nav className="d-flex flex-row gap-2 ms-2">
              <Nav.Link className="fw-normal textColor p-0">
                <Facebook size={20} />
              </Nav.Link>
              <Nav.Link className="fw-normal textColor p-0">
                <Instagram size={20} />
              </Nav.Link>
              <Nav.Link className="fw-normal textColor p-0">
                <MessageCircleMore size={20} />
              </Nav.Link>
              <Nav.Link className="fw-normal textColor p-0">
                <Twitter size={20} />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
      <div className="border-bottom"></div>
    </>
  );
}
