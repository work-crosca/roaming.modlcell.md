import React from "react";
import { useTranslation } from "react-i18next";

type Lang = "ro" | "ru"; 

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const current: Lang = (i18n.language?.split("-")[0] as Lang) || "ro";

  const setLang = (lang: Lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="langSwitch" role="group" aria-label="Language switch">
      <button
        type="button"
        className={`langBtn ${current === "ro" ? "active" : ""}`}
        onClick={() => setLang("ro")}
        aria-pressed={current === "ro"}
      >
        RO
      </button>

      <button
        type="button"
        className={`langBtn ${current === "ru" ? "active" : ""}`}
        onClick={() => setLang("ru")}
        aria-pressed={current === "ru"}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
