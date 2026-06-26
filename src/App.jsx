import Advantages from "./components/Advantages.jsx";
import Cases from "./components/Cases.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Intro from "./components/Intro.jsx";
import Market from "./components/Market.jsx";
import Methodology from "./components/Methodology.jsx";
import Navbar from "./components/Navbar.jsx";
import Services from "./components/Services.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-porcelain text-ink">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Market />
        <Services />
        <Methodology />
        <Cases />
        <Advantages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
