import Banner from "../components/Features/Banner";
import BasicInformation from "../components/MembersDetail/BasicInformation";
import MembersProfile from "../components/MembersDetail/MembersProfile";
import MySelfSummary from "../components/MembersDetail/MySelfSummary";
export default function MembersDetail() {
  return (
    <div>
      <Banner
        BannerText="Home-Teszt Elecking"
        BannerDesc="Member Single Profile"
      />
      <MembersProfile />
      <BasicInformation />
      <MySelfSummary />
      
    </div>
  );
}
