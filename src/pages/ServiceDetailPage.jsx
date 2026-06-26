import { Link, useParams } from "react-router-dom";
import CTASection from "../components/CTASection.jsx";
import PageHero from "../components/PageHero.jsx";
import { caseSummaries } from "../data/caseData.js";
import { services } from "../data/serviceData.js";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <PageHero eyebrow="Services" title="服务不存在" description="请返回首页重新选择服务。" />;
  }

  const relatedCases = caseSummaries.filter((item) => service.relatedCases.includes(item.slug));

  return (
    <>
      <PageHero eyebrow="Services" title={service.title} description={service.short} />

      <section className="bg-porcelain py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <ServiceBlock title="适合什么类型客户" content={service.clients} />
          <ServiceList title="我们具体做什么" items={service.work} />
          <ServiceList title="执行流程" items={service.process} ordered />
          <ServiceList title="交付物" items={service.deliverables} />
          <ServiceList title="可衡量指标" items={service.metrics} />
          <div className="bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-ink">相关案例推荐</h2>
            <div className="mt-5 grid gap-3">
              {relatedCases.map((item) => (
                <Link key={item.path} to={item.path} className="border border-mist p-4 transition hover:border-ember">
                  <p className="text-sm text-ember">{item.eyebrow}</p>
                  <p className="mt-1 font-semibold text-ink">{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-wrap gap-3 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="rounded border border-stone-300 px-5 py-3 font-semibold text-ink hover:border-ember">
            返回首页
          </Link>
          <Link to="/contact" className="rounded bg-ember px-5 py-3 font-semibold text-ink hover:bg-flame">
            联系我们
          </Link>
        </div>
      </section>

      <CTASection title="预约项目沟通" secondaryTo="/#services" secondaryLabel="返回服务列表" />
    </>
  );
}

function ServiceBlock({ title, content }) {
  return (
    <div className="bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <p className="mt-5 text-sm leading-7 text-stone-600">{content}</p>
    </div>
  );
}

function ServiceList({ title, items, ordered = false }) {
  return (
    <div className="bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-600">
        {items.map((item, index) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 grid h-5 w-5 shrink-0 place-items-center rounded bg-ember text-xs font-bold text-ink">
              {ordered ? index + 1 : ""}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
