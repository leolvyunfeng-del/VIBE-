import { CheckCircle2 } from "lucide-react";
import { introPoints } from "../data/siteData.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function Intro() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-porcelain py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeader
          eyebrow="Who We Are"
          title="我们是谁"
          description="VIBE 专注于中国品牌出海俄罗斯市场，具备本地化市场洞察、优质媒介/KOL资源整合、内容策略与项目执行能力。我们为计划进入或正在深耕俄罗斯的品牌，提供从市场策略到营销落地的一体化服务，帮助品牌降低试错成本，提升市场进入效率与传播效果。"
        />

        <div className="grid gap-5">
          {introPoints.map((point) => (
            <div key={point} className="flex gap-4 border-l-2 border-ember bg-white p-5 shadow-sm">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-ember" />
              <p className="text-base leading-8 text-stone-700">{t(point)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
