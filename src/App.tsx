import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HireMe from "./pages/HireMe";
import Portfolio from "./pages/Portfolio";
import CV from "./pages/CV";
import Certifications from "./pages/Certifications";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hire-me" element={<HireMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>

      <Footer />
    </div>
  );
}