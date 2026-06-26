import { ArrowUpRight } from "lucide-react";
import { cases } from "../data/content.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Cases() {
  return (
    <section id="cases" className="bg-porcelain py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Cases"
            title="案例展示"
            description="我们围绕不同品类与增长目标，组合达人内容、平台投放、媒体传播和线下曝光，帮助品牌在俄罗斯市场形成可感知的声量。"
          />
          <p className="max-w-sm text-sm leading-7 text-stone-500">
            建议真实案例补充：目标市场、核心挑战、渠道组合、执行周期、关键成果。
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {cases.map((item, index) => (
            <article key={item.title} className="group overflow-hidden bg-white shadow-sm">
              <div className="case-visual relative h-56">
                <div className="absolute inset-0 bg-gradient-to-br from-ink via-carbon to-copper" />
                <div className="absolute inset-0 opacity-70 mix-blend-screen case-lines" />
                <div className="absolute left-6 top-6 rounded bg-white/12 px-3 py-1 text-xs font-semibold uppercase text-white">
                  Case 0{index + 1}
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm font-semibold text-ember">{item.eyebrow}</p>
                  <h3 className="mt-2 text-2xl font-semibold leading-8 text-white">{item.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-7 text-stone-600">{item.text}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded bg-porcelain px-3 py-1 text-xs text-stone-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink transition group-hover:text-ember"
                >
                  查看案例方向
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
