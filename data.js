import user from "./src/assets/user.png";
import profile from "./src/assets/profile.png";
import match from "./src/assets/match.png";
import dating from "./src/assets/dating.png";
import member1 from "./src/assets/member1.png";
import member2 from "./src/assets/member2.png";
import member3 from "./src/assets/member3.png";
import member4 from "./src/assets/member4.png";
import member5 from "./src/assets/member5.png";
import imagepostformate from "./src/assets/imagepostformate.png";
import coupleofmonth from "./src/assets/coupleofmonth.png";
import mediaforblogarticle from "./src/assets/mediaforblogarticle.png";
export const navItems = [
  { label: "Home", type: "link", path: "/" },
  { label: "Features", type: "link", path: "/features" },
  {
    label: "Community",
    type: "dropdown",
    items: [
      { label: "Members", path: "/members" },
      { label: "Members Details", path: "/members-details" },
      { label: "Stories", path: "/stories" },
      { label: "Groups", path: "/groups" },
      { label: "Active Groups", path: "/active-groups" },
      { label: "Login", path: "/login" },
      { label: "Sign Up", path: "/signup" },
    ],
  },
  { label: "Blog", type: "link", path: "/blog" },
  { label: "Pages", type: "link", path: "/pages" },
  { label: "Contact", type: "link", path: "/contact" },
];

export const rightNavItems = [
  { label: "Sign in", type: "link", path: "/signin" },
  { label: "Help", type: "link", path: "/help" },
  { label: "Register", type: "button", path: "/register" },
];

export const recentNews = [
  {
    id: 1,
    name: "Samantha Lee",
    status: "Active",
    image: user,
  },
  {
    id: 2,
    name: "Samantha Lee",
    status: "1 Hours Ago",
    image: user,
  },
  {
    id: 3,
    name: "Samantha Lee",
    status: "3 Hours Ago",
    image: user,
  },
];

export const howitworks = [
  {
    img: profile,
    title: "Create A Profile",
    text: "Learn from them and try to make it to this bored. this will forsure boost you visibility and increase your chances to find you loved one.",
  },
  {
    img: match,
    title: "Find Matches",
    text: "Learn from them and try to make it to this bored. this will forsure boost you visibility and increase your chances to find you loved one.",
  },
  {
    img: dating,
    title: "Start Dating",
    text: "Learn from them and try to make it to this bored. this will forsure boost you visibility and increase your chances to find you loved one.",
  },
];

export const members = [
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
  { img: member1, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member1, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member2, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member3, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member4, title: "Angel Hopkins", text: "Canada . 32" },
  { img: member5, title: "Angel Hopkins", text: "Canada . 32" },
];

export const successStories = [
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
export   const userInfo = [
    { label: "Name", value: "Teszt Elecking" },
    { label: "Gender", value: "Female" },
    { label: "Between Age", value: "32" },
    { label: "Education", value: "Graduate Degree" },
    { label: "Marital Status", value: "Single" },
    { label: "Date of Birth", value: "31/07/1998" },
    { label: "Work As", value: "Designer" },
    { label: "City", value: "Canada, North America" },
  ];

  export  const formData = [
    {
      type: "select",
      placeholder: "I Am a",
      options: ["Man", "Woman", "Other"]
    },
    {
      type: "select",
      placeholder: "Looking For",
      options: ["Man", "Woman", "Both"]
    },
    {
      type: "select",
      placeholder: "Choose Your Country",
      options: [
        "United States",
        "United Kingdom", 
        "Canada",
        "Australia",
        "India",
        "Germany",
        "France",
        "Other"
      ]
    },
    {
      type: "select",
      placeholder: "Choose Your Interests",
      options: [
        "Travel",
        "Music",
        "Sports",
        "Movies",
        "Reading",
        "Cooking",
        "Fitness",
        "Art & Culture",
        "Gaming",
        "Outdoor Activities"
      ]
    }
  ];