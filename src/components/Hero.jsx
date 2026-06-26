import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Send } from "lucide-react";
import { heroStats } from "../data/siteData.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import heroVideo from "../assets/media/market-signal-beijing-moscow.mp4";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative isolate min-h-[92vh] overflow-hidden bg-ink pt-16 text-white"
    >
      <div className="absolute inset-0 -z-10">
        <div className="hero-map" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,16,16,0.96),rgba(16,16,16,0.78)_42%,rgba(16,16,16,0.2))]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="mx-auto grid min-h-[calc(92vh-4rem)] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.78fr] lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 border border-white/14 bg-white/8 px-3 py-2 text-sm text-white/72 backdrop-blur">
            <span className="h-2 w-2 bg-ember" />
            VIBE | Russia Go-to-Market Partner
          </div>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {t("俄罗斯市场出海营销专家")}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-white/72 sm:text-xl">
            {t("帮助中国品牌在俄罗斯建立认知、获取流量、沉淀信任。")}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded bg-ember px-6 py-4 font-semibold text-ink transition hover:bg-flame"
            >
              <Send className="h-5 w-5" />
              {t("联系我们")}
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded border border-white/18 px-6 py-4 font-semibold text-white transition hover:border-white/38 hover:bg-white/8"
            >
              {t("查看服务")}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="border border-white/14 bg-white/8 p-5 shadow-sharp backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/12 pb-4">
              <span className="text-sm font-semibold text-white/82">Market Signal</span>
              <span className="rounded bg-ember/18 px-2 py-1 text-xs font-semibold text-flame">
                LIVE
              </span>
            </div>
            <div className="grid gap-4 py-5">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between border border-white/10 bg-ink/36 px-4 py-4"
                >
                  <span className="text-sm text-white/58">{t(stat.label)}</span>
                  <span className="text-2xl font-bold text-white">{t(stat.value)}</span>
                </div>
              ))}
            </div>
            <div className="relative overflow-hidden border border-white/10 bg-carbon">
              <video
                className="h-56 w-full object-cover"
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
                controls={false}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_100%)]" />
              <div className="absolute left-4 top-4 rounded bg-ink/80 px-3 py-1 text-xs text-white">
                Beijing / Moscow
              </div>
              <p className="absolute bottom-4 left-4 right-4 text-xs text-white/72">
                {t("地图视觉后续可替换为真实俄罗斯市场路径图")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm text-white/45 transition hover:text-white md:flex"
      >
        {t("向下了解")}
        <ArrowDown className="h-4 w-4" />
      </a>
    </section>
  );
}
