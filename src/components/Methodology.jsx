import { methodology } from "../data/content.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Methodology() {
  return (
    <section id="method" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Methodology"
          title="我们的方法论"
          description="VIBE 用流程化的方法管理跨境营销的不确定性，让每一次投放都能沉淀为下一轮增长的依据。"
          align="center"
        />

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-mist md:block lg:left-1/2" />
          <div className="grid gap-5 lg:grid-cols-2">
            {methodology.map((step, index) => {
              const Icon = step.icon;
              const alignRight = index % 2 === 1;
              return (
                <article
                  key={step.title}
                  className={`relative bg-porcelain p-6 shadow-sm ${
                    alignRight ? "lg:translate-y-12" : ""
                  }`}
                >
                  <div className="flex gap-5">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded bg-ember text-ink">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ember">0{index + 1}</p>
                      <h3 className="mt-1 text-xl font-semibold text-ink">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-stone-600">{step.text}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
