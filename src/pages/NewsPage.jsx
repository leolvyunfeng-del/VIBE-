import { ArrowUpRight, CalendarDays } from "lucide-react";
import CTASection from "../components/CTASection.jsx";
import PageHero from "../components/PageHero.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const newsItems = [
  {
    date: "2026.07",
    category: "市场观察",
    title: "俄罗斯社媒内容生态：VK、Telegram 与 YouTube 如何分工",
    text: "从触达、社群沉淀到内容解释，不同平台适合承担不同阶段的营销任务。"
  },
  {
    date: "2026.07",
    category: "投放方法",
    title: "进入俄罗斯市场前，品牌应该先验证哪些关键词与卖点",
    text: "用搜索需求、竞品价格带和本地表达测试，降低首轮市场进入的不确定性。"
  },
  {
    date: "2026.07",
    category: "案例复盘",
    title: "从达人测评到广告放大：3C 品牌在俄罗斯的内容链路",
    text: "把 KOL 内容、社媒分发和 Yandex / VK Ads 承接结合起来，形成更完整的增长闭环。"
  }
];

export default function NewsPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow="News"
        title="资讯页"
        description="聚焦俄罗斯市场、平台生态、达人内容和本地化营销方法，为中国品牌提供进入俄罗斯市场前的参考。"
        dark
      />

      <section className="bg-porcelain py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {newsItems.map((item) => (
            <article key={item.title} className="group bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-sharp">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-stone-500">
                  <CalendarDays className="h-4 w-4 text-ember" />
                  {item.date}
                </span>
                <span className="rounded bg-porcelain px-3 py-1 text-xs font-semibold text-stone-600">
                  {t(item.category)}
                </span>
              </div>
              <h2 className="mt-6 text-2xl font-semibold leading-8 text-ink">{t(item.title)}</h2>
              <p className="mt-4 text-sm leading-7 text-stone-600">{t(item.text)}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink transition group-hover:text-ember">
                {t("查看资讯")}
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </article>
          ))}
        </div>
      </section>

      <CTASection title="获取俄罗斯市场方案" secondaryTo="/#about" secondaryLabel="返回我们是谁" />
    </>
  );
}
