import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function SectionHeader({ eyebrow, title, description, align = "left", dark = false }) {
  const { t } = useLanguage();
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-3 text-sm font-semibold uppercase text-ember">{t(eyebrow)}</p>
      <h2 className={`text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-ink"}`}>
        {t(title)}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 sm:text-lg ${dark ? "text-white/62" : "text-stone-600"}`}>
          {t(description)}
        </p>
      ) : null}
    </div>
  );
}
