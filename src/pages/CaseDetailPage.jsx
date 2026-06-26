import { Link, useParams } from "react-router-dom";
import CaseDetailSection from "../components/CaseDetailSection.jsx";
import CTASection from "../components/CTASection.jsx";
import PageHero from "../components/PageHero.jsx";
import { caseDetails } from "../data/caseData.js";
import { services } from "../data/serviceData.js";

export default function CaseDetailPage() {
  const { slug } = useParams();
  const detail = caseDetails.find((item) => item.slug === slug);

  if (!detail) {
    return <PageHero eyebrow="Cases" title="案例不存在" description="请返回首页重新选择案例。" />;
  }

  const relatedServices = services.filter((service) => detail.relatedServices.includes(service.slug));

  return (
    <>
      <PageHero eyebrow="Cases" title={detail.title} description={detail.description} />

      <section className="bg-porcelain py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:px-8">
          {detail.sections.map((section) => (
            <CaseDetailSection key={section.title} section={section} />
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-ink">相关服务</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {relatedServices.map((service) => (
                <Link key={service.path} to={service.path} className="border border-mist p-4 transition hover:border-ember">
                  <p className="font-semibold text-ink">{service.title}</p>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{service.short}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/" className="rounded border border-stone-300 px-5 py-3 font-semibold text-ink hover:border-ember">
              返回首页
            </Link>
            <Link to="/contact" className="rounded bg-ember px-5 py-3 font-semibold text-ink hover:bg-flame">
              联系我们
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="查看你的品牌适合哪种俄罗斯市场打法" secondaryTo="/#cases" secondaryLabel="返回案例列表" />
    </>
  );
}
