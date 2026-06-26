import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function MetricCard({ value, label, source, dark = false }) {
  const { t } = useLanguage();

  return (
    <div className={dark ? "border border-white/14 bg-white/[0.06] p-5" : "bg-white p-5 shadow-sm"}>
      <p className="text-4xl font-bold leading-none text-ember sm:text-5xl">{value}</p>
      <p className={dark ? "mt-3 text-sm text-white/72" : "mt-3 text-sm text-stone-700"}>{t(label)}</p>
      {source ? (
        <p className={dark ? "mt-3 text-xs text-white/38" : "mt-3 text-xs text-stone-400"}>{t(source)}</p>
      ) : null}
    </div>
  );
}
