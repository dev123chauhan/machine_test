import { Col, Container, Row } from "react-bootstrap";
import howitworksImg from "../assets/howitworks.png";
import profile from "../assets/profile.png";
import match from "../assets/match.png";
import dating from "../assets/dating.png";
export default function HowDoesItWorks() {
  const howitworks = [
    { img: profile, title: "Create A Profile", text: "Learn from them and try to make it to this bored. this will forsure boost you visibility and increase your chances to find you loved one." },
    { img: match, title: "Find Matches", text: "Learn from them and try to make it to this bored. this will forsure boost you visibility and increase your chances to find you loved one." },
    { img: dating, title: "Start Dating", text: "Learn from them and try to make it to this bored. this will forsure boost you visibility and increase your chances to find you loved one." },
  ];
  return (
    <div className="text-center py-5">
      <h4 className="primaryColor fw-bold fs-3">How Does It Work</h4>
      <p className="display-5 textColor fw-bold">Step to Find Your Soul Mate</p>
      <img src={howitworksImg} alt="" className="mb-5" />
      <Container>
        <Row>
          {howitworks &&
            howitworks.map((item, index) => {
              return (
                <Col key={index} xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
                  <img className="w-50 mb-3" src={item.img} alt="" />
                  <h4 className="textColor fw-bold  mb-4">{item.title}</h4>
                  <p className="textColor fw-normal">
                  {item.text}
                  </p>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}
