import DownloadApp from "../components/Home/DownloadApp";
import Hero from "../components/Home/Hero";
import HowDoesItWorks from "../components/Home/HowDoesItWorks";
import Members from "../components/Home/Members";
import SuccessStories from "../components/Home/SuccessStories";
import Testimonials from "../components/Home/Testimonials";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";
import member4 from "../assets/member4.png";
import member5 from "../assets/member5.png";
import howitworksImg from "../assets/howitworks.png";
const members = [
  { img: member1, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member1, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member2, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member3, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member4, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member5, title: "Angel Hopkins", text: "Canada . 32" },
];
export default function Home() {
  return (
    <>
      <Hero />
      <HowDoesItWorks />
      <Members
        members={members}
        showHeader={true}
        headerTitle="Top Members"
        headerSubtitle="Soulsync Top Members"
        headerImage={howitworksImg}
        className="secondaryColor py-5"
      />
      <Testimonials />
      <WhyChooseUs />
      <SuccessStories />
      <DownloadApp />
    </>
  );
}
