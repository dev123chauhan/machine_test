import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import user from "../assets/user.png"

export default function Footer() {
  const [email, setEmail] = useState("");
  const recentNews = [
    {
      id: 1,
      name: "Samantha Lee",
      status: "Active",
      image: user
    },
    {
      id: 2,
      name: "Samantha Lee", 
      status: "1 Hours Ago",
      image: user
    },
    {
      id: 3,
      name: "Samantha Lee",
      status: "3 Hours Ago", 
      image: user
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <>
      <Container>
        <Row className="align-items-start">
          <Col lg={4} md={12} className="mb-4">
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <div><img src={logo} alt="" className="w-100" /></div>
              </div>

              <p className="textColor">
                Lorem ipsum dolor sit amet consectetur. Auctor eget bibendum
                facilisis libero etiam sed donec aliquam sed. Risus tortor a
                malesuada in tortor. Mauris at aliquet facilisis nisl enim
                lectus nibh. Felis felis lacus dictum tellus pharetra gravida
                duis egestas.
              </p>
            </div>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <h2 className="fw-bold textColor">Our Recent News</h2>

            <div className="d-flex flex-column gap-3">
              {recentNews.map((newsItem) => (
                <div key={newsItem.id} className="d-flex align-items-center gap-3">
                  <img
                    src={newsItem.image}
                    alt={newsItem.name}
                    className="flex-shrink-0"
                  />
                  <div>
                    <h6 className="textColor mb-1">{newsItem.name}</h6>
                    <p className="textColor mb-0">{newsItem.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <h2 className="textColor fw-bold">Our Newsletter Signup</h2>

            <p className="textColor">
              By Subscribing to our mailing list you will always be update with
              the latest news from us.
            </p>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Button type="submit" className="hover-effect">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}