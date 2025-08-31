import { Col, Container, Row } from "react-bootstrap";
import mobile from "../assets/mobile.png";
import googlestore from "../assets/googleplay.png";
import appstore from "../assets/appstore.png";
import heartsLeft from "../assets/Group.png";
import heartsRight from "../assets/Group 1000006496.png";

export default function DownloadApp() {
  return (
    <div className="secondaryColor py-5 position-relative overflow-hidden mb-5">
      <img
        src={heartsRight}
        alt="hearts"
        className="position-absolute heartRight"
        style={{ right: "25%", bottom: "0%", zIndex: 1 }}
      />
      <img
        src={heartsLeft}
        alt="hearts"
        className="position-absolute heartLeft"
        style={{ right: "10%", top: "0%", zIndex: 1 }}
      />
      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="">
          <Col xxl={7} xl={7} lg={7} md={6} sm={12} xs={12}>
            <h3 className="fw-bold textColor mb-2">
              Download App Our Soulsync
            </h3>
            <h1 className="fw-bold textColor mb-3">Easy Connect to Everyone</h1>
            <p className="textColor mb-5" style={{ maxWidth: "500px" }}>
              All it take is 30 seconds to download. Fast, Simple & Delightful.
              Meet genius people near you. Find meaningful connection
              effortless. Your perfect match is just a click away.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-2 gap-sm-3 justify-content-center justify-content-md-start align-items-center">
              <img
                src={appstore}
                alt="Download on App Store"
                className="img-fluid"
              />
              <img
                src={googlestore}
                alt="Get it on Google Play"
                className="img-fluid"
              />
            </div>
          </Col>
          <Col
            xxl={5}
            xl={5}
            lg={5}
            md={6}
            sm={12}
            xs={12}
            className="text-center mt-4 mt-md-0"
          >
            <img src={mobile} className="w-100" alt="Mobile App" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
