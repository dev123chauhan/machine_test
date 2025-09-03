import { Card, Col, Container, Row } from "react-bootstrap";
import membersHeartimg from "../../assets/testimonialSlide.png";
export default function Members({
  members = [],
  showHeader = false,
  headerTitle = "Top Members",
  headerSubtitle = "Soulsync Top Members",
  headerImage = null,
  className = "",
  containerFluid = true,
  showBottomImage = false,
}) {
  return (
    <div className={className}>
      {showHeader && (
        <div className="text-center">
          <h4 className="textColor fw-bold fs-3">{headerTitle}</h4>
          <p className="display-5 textColor fw-bold">{headerSubtitle}</p>
          {headerImage && <img src={headerImage} alt="" className="mb-5" />}
        </div>
      )}
      <Container fluid={containerFluid}>
        <Row className="g-2">
          {members &&
            members.map((member, index) => {
              return (
                <Col  key={index} xxl={2} xl={2} lg={3} md={6} sm={12} xs={12}>
                  <Card  className="p-2 shadow border-0">
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
        {showBottomImage && (
          <div className="text-center  py-5">
            <img src={membersHeartimg} alt="" />
          </div>
        )}
      </Container>
    </div>
  );
}
