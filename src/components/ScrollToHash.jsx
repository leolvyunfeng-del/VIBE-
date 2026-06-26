import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    let tries = 0;
    const tryScroll = () => {
      const target = document.querySelector(hash);
      if (target) {
        const navOffset = 72;
        const top = target.getBoundingClientRect().top + window.scrollY - navOffset;
        window.scrollTo({ top, behavior: "auto" });
        return;
      }

      if (tries < 20) {
        tries += 1;
        window.setTimeout(tryScroll, 50);
      }
    };

    window.setTimeout(tryScroll, 0);
  }, [hash, pathname]);

  return null;
}
