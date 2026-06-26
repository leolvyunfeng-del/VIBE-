import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <section className="bg-porcelain px-4 py-32 text-center">
      <h1 className="text-5xl font-semibold text-ink">{t("页面不存在")}</h1>
      <p className="mx-auto mt-5 max-w-xl text-stone-600">
        {t("你访问的页面暂时没有内容，请返回首页继续浏览。")}
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded bg-ember px-6 py-3 font-semibold text-ink transition hover:bg-flame"
      >
        {t("返回首页")}
      </Link>
    </section>
  );
}
