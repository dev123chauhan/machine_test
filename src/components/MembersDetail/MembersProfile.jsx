import { Container, Row, Col, Nav } from "react-bootstrap";
import tesimonialImg from "../../assets/testimonialImg.png";
import { FaLocationDot } from "react-icons/fa6";

export default function MembersProfile() {
  return (
    <Container  style={{ marginTop: "-10%", zIndex: 10, position: "relative" }}>
      <Row className="align-items-center">
        <Col md={4} className="d-flex justify-content-center mb-4 mb-md-0">
          <img src={tesimonialImg} alt="Profile" className=""/>
        </Col>

        <Col md={8}>
          <Row className="mb-5 justify-content-end">
            <Col xs={2} className="">
              <h4 className="textColor fw-semibold mb-0">121</h4>
              <p className="primaryColor mb-0">Followers</p>
            </Col>
            <Col xs={2} className="">
              <h4 className="textColor fw-semibold mb-0">133</h4>
              <p className="primaryColor mb-0">Following</p>
            </Col>
          </Row>

          <div className="mb-3">
            <h2 className="textColor fw-semibold mb-2">Teszt Elecking</h2>
            <p className="primaryColor mb-2">Active 2 Minutes Ago</p>
            <p className="textColor mb-0">
              <FaLocationDot className="me-2" />
              Canada, North America
            </p>
          </div>

          <Nav
            variant="pills"
            className="custom-tabs d-flex justify-content-around py-2"
          >
            <Nav.Item>
              <Nav.Link eventKey="info" active>
                Information
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="activity">Activity</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="friends">Friends</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="posts">Posts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="media">Media</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="more">More</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}
