import { Outlet } from "react-router-dom";
import Contacts from "./Contacts";
import Header from "./Header";
import Footer from "./Footer";
import TouchWithUs from "../components/Home/TouchWithUs";
export default function Layout() {
  return (
    <>
      <Contacts />
      <Header />
      <Outlet />
      <TouchWithUs />
      <Footer />
    </>
  );
}
