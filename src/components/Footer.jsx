import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { contactChannels } from "../data/siteData.js";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-stone-200 bg-porcelain py-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-4 text-sm text-stone-500 sm:px-6 md:flex-row lg:px-8">
        <div>
          <p className="font-semibold text-ink">VIBE Russia Marketing</p>
          <p className="mt-1">© 2026 VIBE. {t("俄罗斯市场出海营销专家")}</p>
        </div>
        <div className="flex flex-col gap-1 md:text-right">
          <Link to="/contact" className="font-semibold text-ink hover:text-ember">
            {t("联系我们")}
          </Link>
          <p>{contactChannels.map((item) => `${t(item.label)}: ${item.value}`).join(" · ")}</p>
        </div>
      </div>
    </footer>
  );
}
