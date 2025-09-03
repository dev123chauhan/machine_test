import { members } from "../../data";
import Banner from "../components/Features/Banner";
import MembersList from "../components/Features/MembersList";
import Select from "../components/Features/Select";
import DownloadApp from "../components/Home/DownloadApp";
import Members from "../components/Home/Members";
export default function Features() {
  

  return (
    <>
      <Banner />
      <Select />
      <MembersList />
      <Members  members={members} containerFluid={false}  showBottomImage={true}/>
      <DownloadApp />
    </>
  );
}
