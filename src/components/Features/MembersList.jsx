import { Col, Container, Form, Row } from "react-bootstrap";
import { GiWorld } from "react-icons/gi";
export default function MembersList() {
  return (
    <>
      <Container className="mb-3">
        <Row className="align-items-center g-2">
          <Col  xxl={10} xl={10} lg={10} md={10} sm={12} xs={12}>
            <GiWorld className="primaryColor" size={30}/> <span className="textColor fw-semibold">All Members = 49</span>
          </Col>
          <Col xxl={2} xl={2} lg={2} md={2} sm={12} xs={12}>
            <Form.Select  size="lg" aria-label="Default select example">
              <option   value="">Last Active</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>
    </>
  );
}
