import { Col, Container, Row } from "react-bootstrap";
import howitworksImg from "../../assets/howitworks.png";
import { howitworks } from "../../../data";

export default function HowDoesItWorks() {

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
