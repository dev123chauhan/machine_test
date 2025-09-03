import { Card, Col, Container, Row } from "react-bootstrap";

export default function MySelfSummary() {
  return (
    <Container className="mb-5">
      <Row>
        <Col>
          <Card className="filterSearchMemberCard">
            <Card.Header className="h5 textColor fw-bold py-4">
              Myself Summary
            </Card.Header>
            <Card.Body>
              <Card.Text className="textColor fw-normal">
                Lorem ipsum dolor sit amet consectetur. Semper varius gravida
                gravida interdum faucibus. Posuere consectetur cras enim odio.
                Sit lacus id sed adipiscing et est molestie. Quis nisi pulvinar
                metus ac ipsum aenean magna pharetra sem.
              </Card.Text>
              <Card.Text className="textColor fw-normal">
                Lorem ipsum dolor sit amet consectetur. Semper varius gravida
                gravida interdum faucibus. Posuere consectetur cras enim odio.
                Sit lacus id sed adipiscing et est molestie. Quis nisi pulvinar
                metus ac ipsum aenean magna pharetra sem. Lorem ipsum dolor sit
                amet consectetur. Semper varius gravida gravida interdum
                faucibus. Posuere consectetur cras enim odio. Sit lacus id sed
                adipiscing et est molestie. Quis nisi pulvinar metus ac ipsum
                aenean magna pharetra sem.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
