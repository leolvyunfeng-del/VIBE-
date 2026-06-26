import Contact from "../components/Contact.jsx";
import PageHero from "../components/PageHero.jsx";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="预约项目沟通"
        description="留下你的品牌、品类和目标，我们会根据俄罗斯市场渠道生态，给出更清晰的进入市场建议。"
        dark
      />
      <Contact />
    </>
  );
}
