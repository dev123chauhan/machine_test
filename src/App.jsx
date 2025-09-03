import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Layout from "./Layout/Layout";
import NotFound from "./pages/NotFound";
import MembersDetail from "./pages/MembersDetail";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/pages" element={<MembersDetail />} />
      </Route>
    </Routes>
  );
}
