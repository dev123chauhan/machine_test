import Contacts from "../components/Contacts";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowDoesItWorks from "../components/HowDoesItWorks";
import Members from "../components/Members";
import SuccessStories from "../components/SuccessStories";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Contacts />
      <Header />
      <Hero />
      <HowDoesItWorks />
      <Members />
      <Testimonials />
      <WhyChooseUs />
      <SuccessStories />
    </>
  );
}
