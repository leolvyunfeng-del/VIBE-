import { createContext, useContext, useMemo, useState } from "react";
import { translations } from "./translations.js";

const LanguageContext = createContext(null);
const hasChineseText = (text) => /[\u4e00-\u9fff]/.test(text);
const fallbackTranslation =
  "Localized case details and execution notes are available from the VIBE team during project consultation.";

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("vibe-lang") || "zh");

  const value = useMemo(() => {
    const setLanguage = (nextLang) => {
      localStorage.setItem("vibe-lang", nextLang);
      setLang(nextLang);
      document.documentElement.lang = nextLang === "en" ? "en" : "zh-CN";
    };

    return {
      lang,
      setLanguage,
      toggleLanguage: () => setLanguage(lang === "zh" ? "en" : "zh"),
      t: (text) => {
        if (!text || lang === "zh") return text;
        return translations[text] || (hasChineseText(text) ? fallbackTranslation : text);
      }
    };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
