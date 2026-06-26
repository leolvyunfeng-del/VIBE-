import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function PageHero({ eyebrow, title, description, dark = false }) {
  const { t } = useLanguage();

  return (
    <section className={dark ? "bg-ink pt-28 text-white" : "bg-porcelain pt-28 text-ink"}>
      <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <Link
          to="/"
          className={`mb-8 inline-flex items-center gap-2 text-sm font-semibold ${
            dark ? "text-white/64 hover:text-white" : "text-stone-500 hover:text-ink"
          }`}
        >
          <ArrowLeft className="h-4 w-4" />
          {t("返回首页")}
        </Link>
        <p className="mb-3 text-sm font-semibold uppercase text-ember">{t(eyebrow)}</p>
        <h1 className="max-w-5xl text-4xl font-semibold leading-tight sm:text-6xl">{t(title)}</h1>
        {description ? (
          <p className={`mt-6 max-w-3xl text-lg leading-9 ${dark ? "text-white/64" : "text-stone-600"}`}>
            {t(description)}
          </p>
        ) : null}
      </div>
    </section>
  );
}
