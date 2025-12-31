import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import i18n from "./i18n";

const SUPPORTED_LANGS = ["ro", "ru"] as const;
type SupportedLang = (typeof SUPPORTED_LANGS)[number];

const normalizeLang = (lng: string) => lng.toLowerCase().split("-")[0];

const detectLang = (): SupportedLang => {
  const saved = localStorage.getItem("i18nextLng");
  if (saved) {
    const n = normalizeLang(saved);
    if (SUPPORTED_LANGS.includes(n as SupportedLang)) return n as SupportedLang;
  }

  const browser = normalizeLang(navigator.language || "");
  if (SUPPORTED_LANGS.includes(browser as SupportedLang)) return browser as SupportedLang;

  return "ro";
};

i18n.on("languageChanged", (lng) => {
  const n = normalizeLang(lng);
  if (SUPPORTED_LANGS.includes(n as SupportedLang)) {
    localStorage.setItem("i18nextLng", n);
  }
});

const initialLang = detectLang();
if (normalizeLang(i18n.language || "") !== initialLang) {
  i18n.changeLanguage(initialLang);
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
