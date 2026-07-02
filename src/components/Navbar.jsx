import { Link } from "react-router-dom";
import { Globe2, Menu, Send } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { navItems } from "../data/siteData.js";

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/88 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label={t("VIBE 首页")}>
          <span className="grid h-9 min-w-16 place-items-center rounded bg-ember px-3 text-sm font-black tracking-wide text-ink">
            VIBE
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.to}
              href={item.to}
              className="text-sm text-white/72 transition hover:text-white"
            >
              {t(item.label)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex h-10 items-center gap-2 rounded border border-white/15 px-3 text-sm font-semibold text-white transition hover:border-ember hover:text-ember"
            aria-label={lang === "zh" ? "Switch to English" : "切换到中文"}
          >
            <Globe2 className="h-4 w-4" />
            {lang === "zh" ? "EN" : "中文"}
          </button>

          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded bg-ember px-4 py-2 text-sm font-semibold text-ink transition hover:bg-flame md:inline-flex"
          >
            <Send className="h-4 w-4" />
            {t("联系我们")}
          </Link>

          <a
            href="/#services"
            className="grid h-10 w-10 place-items-center rounded border border-white/15 text-white md:hidden"
            aria-label={t("打开服务模块")}
          >
            <Menu className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
