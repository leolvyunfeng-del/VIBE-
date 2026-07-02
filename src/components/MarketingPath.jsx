import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function MarketingPath() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-stone-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="border-l-4 border-ember pl-5">
            <p className="mb-3 text-sm font-semibold uppercase text-ember">Marketing Path</p>
            <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
              {t("营销路径")}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Link
              to="/market/social-content"
              className="group border border-mist bg-porcelain p-7 shadow-sm transition hover:-translate-y-1 hover:border-ember hover:shadow-sharp"
            >
              <span className="mb-6 block h-1 w-14 bg-ember transition group-hover:w-20" />
              <p className="text-3xl font-bold text-ember">{t("社媒")}</p>
              <p className="mt-3 text-sm leading-7 text-stone-600">{t("内容、社群和达人共同影响用户决策")}</p>
            </Link>
            <Link
              to="/market/ecommerce"
              className="group border border-mist bg-porcelain p-7 shadow-sm transition hover:-translate-y-1 hover:border-ember hover:shadow-sharp"
            >
              <span className="mb-6 block h-1 w-14 bg-ember transition group-hover:w-20" />
              <p className="text-3xl font-bold text-ember">{t("电商")}</p>
              <p className="mt-3 text-sm leading-7 text-stone-600">{t("搜索、口碑和站内外投放共同驱动转化")}</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
