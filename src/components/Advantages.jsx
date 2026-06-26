import { Check } from "lucide-react";
import { advantages } from "../data/content.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Advantages() {
  return (
    <section className="bg-ink py-24 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeader
          eyebrow="Advantages"
          title="我们的优势"
          description="相比单点供应商，VIBE 更像品牌在俄罗斯市场的外部增长团队，能同时理解中国品牌需求和俄罗斯本地执行语境。"
        />

        <div className="grid gap-4">
          {advantages.map((advantage) => (
            <div
              key={advantage}
              className="flex items-center gap-4 border border-white/12 bg-white/[0.06] p-5"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded bg-ember text-ink">
                <Check className="h-4 w-4" />
              </span>
              <p className="text-base leading-7 text-white/78">{advantage}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
