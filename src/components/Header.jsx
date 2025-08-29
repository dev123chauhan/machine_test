import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";
export default function Header() {
  return (
    <Navbar expand="lg" className="px-5 py-2 secondaryColor">
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link className="textColor fw-normal">Home</Nav.Link>
            <Nav.Link className="textColor fw-normal">Features</Nav.Link>
            <Nav.Link className="textColor fw-normal">Community</Nav.Link>
            <Nav.Link className="textColor fw-normal">Blog</Nav.Link>
            <Nav.Link className="textColor fw-normal">Pages</Nav.Link>
            <Nav.Link className="textColor fw-normal">Contact</Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center gap-1">
            <Nav.Link className="fw-normal textColor text-nowrap">
              Sign in
            </Nav.Link>
            <Nav.Link className="fw-normal textColor text-nowrap">
              Help
            </Nav.Link>
            <Nav.Item>
              <Button className="fw-normal">Register</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
