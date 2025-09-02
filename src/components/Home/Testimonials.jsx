import { Col, Container, Row } from "react-bootstrap";
import howitworksImg from "../../assets/howitworks.png";
import tesimonialImg from "../../assets/testimonialImg.png";
import testmonialsSlide from "../../assets/testimonialSlide.png";
import highlight from "../../assets/highlight.png";

export default function Testimonials() {
  const designation = "{Designer}";
  return (
    <>
      <div className="text-center py-5">
        <h4 className="primaryColor fw-bold fs-3">Testimonials</h4>
        <p className="display-5 textColor fw-bold">
          Listen What are saying Our Customers
        </p>
        <img src={howitworksImg} alt="" className="mb-5" />
      </div>
      
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <Row className="g-5 mb-5">
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                <img src={highlight} alt="" className="mb-3" />
                <h3 className="textColor fw-bold">
                  Pooja Suryanvasnshi <span className="primaryColor fs-6">{designation}</span>
                </h3>
                <p className="fw-normal textColor">
                  Lorem ipsum dolor sit amet consectetur. Cras morbi vitae purus
                  praesent praesent est morbi. Amet quam integer fringilla elit
                  molestie. Eget nibh adipiscing sit nulla at nunc fames gravida. Id
                  elit libero viverra cras phasellus nulla a vel enim. Lorem ipsum
                  dolor sit amet consectetur. Cras morbi vitae purus praesent
                  praesent est morbi. Amet quam integer fringilla elit molestie.
                  Eget nibh adipiscing sit nulla at nunc fames gravida. Id elit
                  libero viverra cras phasellus nulla a vel enim.
                </p>
              </Col>
              <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
                <img src={tesimonialImg} className="w-100" alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      
      <div className="text-center mb-5">
        <img src={testmonialsSlide} alt="" />
      </div>
    </>
  );
}