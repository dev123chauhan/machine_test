import { Container } from "react-bootstrap";
import howitworksImg from "../../assets/howitworks.png";

export default function Banner() {
  return (
    <Container fluid className="secondaryColor featuresBanner">
      <h4 className="text-center textColor fw-semibold fs-4">Home-Members</h4>
      <p className="text-center textColor fw-semibold fs-1">
        Soulsync dating Members
      </p>
      <div className="d-flex align-items-center justify-content-center">
        <img src={howitworksImg} className="" alt="" />
      </div>
    </Container>
  );
}
