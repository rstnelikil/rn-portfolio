import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import RoleDetail from "./pages/RoleDetail";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/experience/:id" element={<RoleDetail />} />
      </Routes>
      <BackToTop />
    </BrowserRouter>
  );
}