import { Facebook, Instagram, MapPin, MessageCircleMore, Phone, Twitter } from "lucide-react";
import { Container, Nav } from "react-bootstrap";

export default function Contacts() {
  return (
    <>
      <Container fluid className="d-flex secondaryColor px-5 py-2">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
          <Nav.Link className='textColor fw-normal'><Phone /> +91 123456789</Nav.Link>
            <Nav.Link className='textColor fw-normal'><MapPin /> Beverley, New York 224 USA</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='fw-normal textColor'>Find us on :</Nav.Link>
            <Nav.Link className='fw-normal textColor'><Facebook /></Nav.Link> 
            <Nav.Link className='fw-normal textColor'><Instagram /></Nav.Link> 
            <Nav.Link className='fw-normal textColor'> <MessageCircleMore /></Nav.Link> 
            <Nav.Link className='fw-normal textColor'> <Twitter /></Nav.Link> 
          </Nav>
      </Container>
      <div className="border-bottom"></div>
      </>
  )
}
