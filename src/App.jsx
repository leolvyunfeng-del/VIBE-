import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import ScrollToHash from "./components/ScrollToHash.jsx";
import CaseDetailPage from "./pages/CaseDetailPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import MarketDetailPage from "./pages/MarketDetailPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ServiceDetailPage from "./pages/ServiceDetailPage.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-porcelain text-ink">
      <ScrollToHash />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/market/:slug" element={<MarketDetailPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/cases/:slug" element={<CaseDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
