import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { marketOpportunities } from "../data/marketData.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Market() {
  return (
    <section id="market" className="bg-ink py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow="Market Opportunity"
            title="为什么选择俄罗斯市场"
            description="俄罗斯不是简单的流量市场，而是一个需要理解平台、语言、渠道与信任机制的本地化市场。"
            dark
          />
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Link to="/market/social-content" className="border border-white/12 bg-white/8 p-5 transition hover:border-ember">
              <p className="text-3xl font-bold text-ember">社媒</p>
              <p className="mt-2 text-sm leading-6 text-white/58">内容、社群和达人共同影响用户决策</p>
            </Link>
            <Link to="/market/ecommerce" className="border border-white/12 bg-white/8 p-5 transition hover:border-ember">
              <p className="text-3xl font-bold text-ember">电商</p>
              <p className="mt-2 text-sm leading-6 text-white/58">搜索、口碑和站内外投放共同驱动转化</p>
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {marketOpportunities.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="group border border-white/12 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:border-ember/70 hover:bg-white/[0.09]"
              >
                <div className="mb-6 grid h-11 w-11 place-items-center rounded bg-ember text-ink">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{item.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ember">
                  查看详情
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
