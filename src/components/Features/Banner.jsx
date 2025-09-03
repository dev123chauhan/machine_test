import { Container } from "react-bootstrap";
import howitworksImg from "../../assets/howitworks.png";

export default function Banner({
  BannerText = "Home-Members",
  BannerDesc = "Soulsync dating Members",
}) {
  return (
    <Container
      style={{ position: "relative" }}
      fluid
      className="secondaryColor featuresBanner d-flex flex-column align-items-center justify-content-center text-center"
    >
      <h4 className="text-center textColor fw-semibold fs-4">{BannerText}</h4>
      <p className="text-center textColor fw-semibold fs-1">{BannerDesc}</p>
      <div className="d-flex align-items-center justify-content-center">
        <img src={howitworksImg} className="" alt="" />
      </div>
    </Container>
  );
}
