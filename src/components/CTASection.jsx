import { ArrowRight, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function CTASection({
  title = "获取俄罗斯市场方案",
  description = "告诉我们你的品牌阶段和目标市场，我们会基于俄罗斯渠道生态给出初步沟通建议。",
  secondaryTo = "/",
  secondaryLabel = "返回首页"
}) {
  const { t } = useLanguage();

  return (
    <section className="bg-ink py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold">{t(title)}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/62">{t(description)}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded bg-ember px-5 py-3 font-semibold text-ink transition hover:bg-flame"
          >
            <Send className="h-5 w-5" />
            {t("联系我们")}
          </Link>
          <a
            href={secondaryTo}
            className="inline-flex items-center justify-center gap-2 rounded border border-white/18 px-5 py-3 font-semibold text-white transition hover:bg-white/8"
          >
            {t(secondaryLabel)}
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
