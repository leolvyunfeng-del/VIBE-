import { useLanguage } from "../i18n/LanguageContext.jsx";
import ImageBlock from "./ImageBlock.jsx";
import MetricCard from "./MetricCard.jsx";

export default function CaseDetailSection({ section }) {
  const { t } = useLanguage();

  return (
    <article className="bg-white p-5 shadow-sm sm:p-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <span className="inline-flex bg-ember px-4 py-2 text-sm font-semibold text-ink">
            {t(section.label)}
          </span>
          <h2 className="mt-6 text-3xl font-semibold leading-tight text-ink">{t(section.title)}</h2>
          <div className="mt-7 space-y-6 text-base leading-8 text-stone-700">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-ink">{t("项目背景")}</h3>
              <p>{t(section.background)}</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-ink">{t("服务内容")}</h3>
              <ul className="space-y-2">
                {section.work.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                    <span>{t(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-ink">{t("核心结果")}</h3>
              <p>{t(section.result)}</p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <ImageBlock src={section.image} alt={t(section.title)} className="aspect-[16/10]" />
          <div className="grid gap-4 sm:grid-cols-3">
            {section.metrics.map((metric) => (
              <MetricCard key={`${section.title}-${metric.label}`} {...metric} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
