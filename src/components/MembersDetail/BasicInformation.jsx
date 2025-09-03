import { Col, Container, Form, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { formData, userInfo } from "../../../data";

export default function BasicInformation() {
  const ageOptions = Array.from({ length: 65 }, (_, i) => i + 18);

  return (
    <Container className="py-5">
      <Row>
        <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
          <Card className="mb-2">
            <Card.Header className="h5 textColor fw-bold basicInformationCardHeader">
              Basic Information
            </Card.Header>
            <div className="d-flex mb-4">
              <Card.Body>
                {userInfo.map((item, index) => (
                  <Card.Title
                    key={`label-${index}`}
                    className="fw-normal textColor h6 mb-4"
                  >
                    {item.label}
                  </Card.Title>
                ))}
              </Card.Body>

              <Card.Body>
                {userInfo.map((item, index) => (
                  <Card.Title
                    key={`value-${index}`}
                    className="fw-normal textColor h6 mb-4"
                  >
                    {item.value}
                  </Card.Title>
                ))}
              </Card.Body>
            </div>
          </Card>
        </Col>
        <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
          <Card className="filterSearchMemberCard p-4">
            <Card.Header className="h5 textColor fw-bold">
              Filter Search Member
            </Card.Header>
            <Card.Body>
              <Card.Text className="textColor fw-normal">
                Serious Dating With LovelyMeet Your Perfect Match is Just a
                Click Away.
              </Card.Text>

              <Form>
                {formData.map((field, index) => (
                  <Form.Group key={index} className="">
                    <Form.Select
                      className="py-3 px-3 border-0 border-bottom rounded-0 custom-select"
                      defaultValue=""
                    >
                      <option  value="" disabled>
                        {field.placeholder}
                      </option>
                      {field.options.map((option, optionIndex) => (
                        <option key={optionIndex} value={option.toLowerCase()}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                ))}

                <Row className="mb-2">
                  {[18, 36].map((defaultAge, index) => (
                    <Col
                      key={index}
                      xs={6}
                      className={index === 0 ? "pe-2" : "ps-2"}
                    >
                      <Form.Select
                        className="py-2 px-3 border-0 border-bottom rounded-0"
                        defaultValue={defaultAge}
                      >
                        {ageOptions.map((age) => (
                          <option key={age} value={age}>
                            {age}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                  ))}
                </Row>

                <div className="">
                  <Button className="fw-semibold border-0">
                    Find Your Partner
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
