import { services } from "../data/content.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Services() {
  return (
    <section id="services" className="bg-porcelain py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="我们的服务"
          description="以俄罗斯本土渠道和中文团队协作能力为基础，帮助品牌完成从策略、内容、传播到效果复盘的全链路执行。"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-sharp"
              >
                <div className="mb-7 flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded bg-ink text-white transition group-hover:bg-ember group-hover:text-ink">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="h-px w-20 bg-mist group-hover:bg-ember" />
                </div>
                <h3 className="text-xl font-semibold leading-7 text-ink">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">{service.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
