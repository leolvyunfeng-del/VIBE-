import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CTASection from "../components/CTASection.jsx";
import MetricCard from "../components/MetricCard.jsx";
import PageHero from "../components/PageHero.jsx";
import { marketOpportunities } from "../data/marketData.js";

export default function MarketDetailPage() {
  const { slug } = useParams();
  const market = marketOpportunities.find((item) => item.slug === slug);

  if (!market) {
    return <PageHero eyebrow="Market" title="市场机会不存在" description="请返回首页重新选择市场机会。" />;
  }

  return (
    <>
      <PageHero eyebrow="Market Opportunity" title={market.title} description={market.conclusion} dark />

      <section className="bg-porcelain py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {market.metrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <InfoBlock title="市场趋势分析" items={market.trends} />
            <InfoBlock title="对中国品牌的营销启发" items={market.insights} />
            <InfoBlock title="推荐渠道组合" items={market.channels} ordered />
          </div>

          <div className="mt-10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-ink">数据来源区域</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {market.sources.map((source) => (
                <span key={source} className="rounded bg-porcelain px-3 py-2 text-sm text-stone-600">
                  {source}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/" className="rounded border border-stone-300 px-5 py-3 font-semibold text-ink hover:border-ember">
              返回首页
            </Link>
            <Link to="/contact" className="rounded bg-ember px-5 py-3 font-semibold text-ink hover:bg-flame">
              联系我们
            </Link>
            <Link
              to="/services/market-strategy"
              className="inline-flex items-center gap-2 rounded bg-ink px-5 py-3 font-semibold text-white hover:bg-carbon"
            >
              查看市场策略服务
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection secondaryTo="/#market" secondaryLabel="返回市场机会" />
    </>
  );
}

function InfoBlock({ title, items, ordered = false }) {
  const List = ordered ? "ol" : "ul";

  return (
    <div className="bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <List className="mt-5 space-y-3 text-sm leading-7 text-stone-600">
        {items.map((item, index) => (
          <li key={item} className="flex gap-3">
              <span className="mt-2.5 grid h-5 w-5 shrink-0 place-items-center rounded bg-ember text-xs font-bold text-ink">
              {ordered ? index + 1 : ""}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </List>
    </div>
  );
}
