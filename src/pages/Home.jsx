import DownloadApp from "../components/Home/DownloadApp";
import Hero from "../components/Home/Hero";
import HowDoesItWorks from "../components/Home/HowDoesItWorks";
import Members from "../components/Home/Members";
import SuccessStories from "../components/Home/SuccessStories";
import Testimonials from "../components/Home/Testimonials";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import howitworksImg from "../assets/howitworks.png";
import { members } from "../../data";

export default function Home() {
  const limitedMembers = members.slice(0, 6);
  return (
    <>
      <Hero />
      <HowDoesItWorks />
      <Members
        members={limitedMembers}
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
