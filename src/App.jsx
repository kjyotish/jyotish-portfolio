import "./App.css";
import Header from "./components/Header";
import HeroIllustration from "./components/HeroIllustration";
import RecentProjectAdd from "./components/RecentProjectAdd";
import Skill from "./components/Skill";
import CaseStudySection from "./components/CaseStudy";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import AddPortfolio from "./components/AddPortfolio";

import { Routes, Route, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <div id="Home">
      {/* ✅ Show Header only when NOT on /contact or /portfolio */}
      {location.pathname !== "/contact" &&
        location.pathname !== "/portfolio" && <Header />}

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div>
              <div style={{ backgroundColor: "#2E2E2E" }}>
                <HeroIllustration />
              </div>
              <RecentProjectAdd />
              <Skill />
              <CaseStudySection />
              <Footer />
            </div>
          }
        />

        {/* Contact Page (with fresh state always) */}
        <Route path="/contact" element={<ContactSection key={Date.now()} />} />

        {/* Portfolio Page (with fresh state always) */}
        <Route path="/portfolio" element={<AddPortfolio key={Date.now()} />} />
      </Routes>
    </div>
  );
}

function App() {
  return <Layout />; // ✅ no Router here, only in main.jsx
}

export default App;
