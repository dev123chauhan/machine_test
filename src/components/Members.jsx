import { Card, Col, Container, Row } from "react-bootstrap";
import howitworksImg from "../assets/howitworks.png";
import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";
import member4 from "../assets/member4.png";
import member5 from "../assets/member5.png";
export default function Members() {
  const members = [
    { img: member1, title: "Angel Hopkins", text: "Canada . 32" },
    { img: member1, title: "Angel Hopkins", text: "Canada . 32" },
    { img: member2, title: "Angel Hopkins", text: "Canada . 32" },
    { img: member3, title: "Angel Hopkins", text: "Canada . 32" },
    { img: member4, title: "Angel Hopkins", text: "Canada . 32" },
    { img: member5, title: "Angel Hopkins", text: "Canada . 32" },
  ];
  return (
    <div className="secondaryColor py-5">
      <div className="text-center">
        <h4 className="textColor fw-bold fs-3">Top Members</h4>
        <p className="display-5 textColor fw-bold">Soulsync Top Members</p>
        <img src={howitworksImg} alt="" className="mb-5" />
      </div>
      <Container fluid>
        <Row>
          {members &&
            members.map((member, index) => {
              return (
                <Col key={index} xxl={2} xl={2} lg={3} md={6} sm={12} xs={12}>
                  <Card className="p-2 shadow border-0">
                    <Card.Img src={member.img} className="w-100" alt="" />
                    <Card.Body>
                      <Card.Title className="textColor fw-bold text-center">
                        {member.title}
                      </Card.Title>
                      <Card.Text className="fw-normal textColor text-center">
                        {member.text}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}
