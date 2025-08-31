import { Button, Card, Col, Container, Row } from "react-bootstrap";
import howitworksImg from "../assets/howitworks.png";
import imagepostformate from "../assets/imagepostformate.png";
import coupleofmonth from "../assets/coupleofmonth.png";
import mediaforblogarticle from "../assets/mediaforblogarticle.png";
export default function SuccessStories() {
  const successStories = [
    {
      img: imagepostformate,
      title: "Image Post Formate",
      text: "Lorem ipsum dolor sit amet consectetur. Volutpat nam lectus in amet nisi nisi morbi gravida fames. Velit vulputate pellentesque sagittis maecenas viverra. Pulvinar leo integer risus penatibus egestas platea ornare tellus morbi. In lectus integer rutrum sed purus.",
    },
    {
      img: coupleofmonth,
      title: "Couple Of Month",
      text: "Lorem ipsum dolor sit amet consectetur. Volutpat nam lectus in amet nisi nisi morbi gravida fames. Velit vulputate pellentesque sagittis maecenas viverra. Pulvinar leo integer risus penatibus egestas platea ornare tellus morbi. In lectus integer rutrum sed purus.",
    },
    {
      img: mediaforblogarticle,
      title: "Media For Blog Article",
      text: "Lorem ipsum dolor sit amet consectetur. Volutpat nam lectus in amet nisi nisi morbi gravida fames. Velit vulputate pellentesque sagittis maecenas viverra. Pulvinar leo integer risus penatibus egestas platea ornare tellus morbi. In lectus integer rutrum sed purus.",
    },
  ];
  return (
    <>
      <div className="text-center py-5">
        <h4 className="primaryColor fw-bold fs-3">
          Love in Faith Success Stories
        </h4>
        <p className="display-5 textColor fw-bold">Stories From The Hearts</p>
        <img src={howitworksImg} alt="" className="mb-5" />
      </div>
      <Container className="mb-5">
        <Row>
          {successStories &&
            successStories.map((item, index) => {
              return (
                <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12} key={index} className="g-4">
                  <Card className="p-3 cardColor">
                    <Card.Img src={item.img} alt="" className="mb-3 w-100" />
                    <Card.Body>
                      <Card.Title className="textColor fw-bold mb-3">
                        {item.title}
                      </Card.Title>
                      <Card.Text className="textColor">{item.text}</Card.Text>
                    <Button>Read More</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
}
