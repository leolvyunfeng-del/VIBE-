import { Mail, MessageSquare, Send } from "lucide-react";
import { contactChannels } from "../data/content.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="联系我们"
            description="告诉我们你的品牌、品类、目标和当前阶段，我们会基于俄罗斯市场给出初步沟通建议。"
          />

          <div className="mt-10 grid gap-4">
            {contactChannels.map((channel) => (
              <div key={channel.label} className="flex items-center gap-4 bg-porcelain p-5">
                <div className="grid h-11 w-11 place-items-center rounded bg-ink text-white">
                  {channel.label === "邮箱" ? (
                    <Mail className="h-5 w-5" />
                  ) : (
                    <MessageSquare className="h-5 w-5" />
                  )}
                </div>
                <div>
                  <p className="text-sm text-stone-500">{channel.label}</p>
                  <p className="mt-1 font-semibold text-ink">{channel.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="bg-porcelain p-5 shadow-sharp sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-stone-700">姓名</span>
              <input
                type="text"
                placeholder="请输入姓名"
                className="h-12 rounded border border-mist bg-white px-4 outline-none transition focus:border-ember"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-stone-700">公司</span>
              <input
                type="text"
                placeholder="请输入公司名称"
                className="h-12 rounded border border-mist bg-white px-4 outline-none transition focus:border-ember"
              />
            </label>
            <label className="grid gap-2 sm:col-span-2">
              <span className="text-sm font-semibold text-stone-700">联系方式</span>
              <input
                type="text"
                placeholder="邮箱 / 微信 / Telegram"
                className="h-12 rounded border border-mist bg-white px-4 outline-none transition focus:border-ember"
              />
            </label>
            <label className="grid gap-2 sm:col-span-2">
              <span className="text-sm font-semibold text-stone-700">需求</span>
              <textarea
                rows="6"
                placeholder="例如：想做俄罗斯 KOL 投放、社媒运营、广告投放或市场调研"
                className="resize-none rounded border border-mist bg-white px-4 py-3 outline-none transition focus:border-ember"
              />
            </label>
          </div>
          <button
            type="button"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded bg-ink px-6 py-4 font-semibold text-white transition hover:bg-ember hover:text-ink sm:w-auto"
          >
            <Send className="h-5 w-5" />
            提交需求
          </button>
          <p className="mt-4 text-xs leading-6 text-stone-500">
            提交后我们会尽快与你确认需求，并安排俄罗斯市场顾问进行初步沟通。
          </p>
        </form>
      </div>
    </section>
  );
}
