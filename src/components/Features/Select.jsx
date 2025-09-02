import { Col, Container, Row, Form, Button } from "react-bootstrap";

export default function Select() {
  const selectData = [
    {
      type: 'select',
      options: ['Male'],
      ariaLabel: 'Gender select'
    },
    {
      type: 'select', 
      options: ['Female'],
      ariaLabel: 'Gender select'
    },
    {
      type: 'select',
      options: ['18'],
      ariaLabel: 'Age select'
    },
    {
      type: 'select',
      options: ['India'],
      ariaLabel: 'Country select'
    },
    {
      type: 'button',
      text: 'Search'
    }
  ];

  return (
    <Container className="pt-5 pb-3">
      <Row>
        {selectData.map((item, index) => (
          <Col className="g-2" xxl={2} xl={2} lg={2} md={3} sm={12} xs={12} key={index}>
            {item.type === 'select' ? (
              <Form.Select aria-label={item.ariaLabel}>
                {item.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={optionIndex + 1}>
                    {option}
                  </option>
                ))}
              </Form.Select>
            ) : (
              <Button className="w-100">{item.text}</Button>
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
}