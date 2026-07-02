import Cases from "../components/Cases.jsx";
import Contact from "../components/Contact.jsx";
import Hero from "../components/Hero.jsx";
import Intro from "../components/Intro.jsx";
import Market from "../components/Market.jsx";
import Services from "../components/Services.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Market />
      <Services />
      <Cases />
      <Contact compact />
    </>
  );
}
