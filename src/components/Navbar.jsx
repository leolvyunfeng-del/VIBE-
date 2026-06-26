import { Link } from "react-router-dom";
import { Menu, Send } from "lucide-react";
import { navItems } from "../data/siteData.js";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/88 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="VIBE 首页">
          <span className="grid h-9 w-9 place-items-center rounded bg-ember font-black text-ink">
            V
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold">VIBE</span>
            <span className="block text-xs text-white/55">Russia Marketing</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.to}
              href={item.to}
              className="text-sm text-white/72 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded bg-ember px-4 py-2 text-sm font-semibold text-ink transition hover:bg-flame md:inline-flex"
        >
          <Send className="h-4 w-4" />
          联系我们
        </Link>

        <a
          href="/#services"
          className="grid h-10 w-10 place-items-center rounded border border-white/15 text-white md:hidden"
          aria-label="打开服务模块"
        >
          <Menu className="h-5 w-5" />
        </a>
      </nav>
    </header>
  );
}
