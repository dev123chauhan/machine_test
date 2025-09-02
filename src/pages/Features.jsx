import Banner from "../components/Features/Banner";
import MembersList from "../components/Features/MembersList";
import Select from "../components/Features/Select";
import DownloadApp from "../components/Home/DownloadApp";
import Members from "../components/Home/Members";
import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";
import member4 from "../assets/member4.png";
import member5 from "../assets/member5.png";
const members = [
  { img: member1, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member1, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member2, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member3, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member4, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member5, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member1, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member1, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member2, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member3, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member4, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member5, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member1, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member1, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member2, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member3, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member4, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member5, title: "Angel Hopkins", text: "Canada . 32" },
];
export default function Features() {
  return (
    <>
      <Banner />
      <Select />
      <MembersList />
      <Members members={members} containerFluid={false}  showBottomImage={true}/>
      <DownloadApp />
    </>
  );
}
