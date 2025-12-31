import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import ActivateOptionsBlock from "../components/ActivateOptionsBlock";
import FaqAccordion from "../components/FaqAccordion";
import "./RoamingEU.css";

const RoamingEU: React.FC = () => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const key = i18n.language.split("-")[0] as "ro" | "ru";

    // set tab title
    document.title = t("tabTitleEU", { lng: key });

    // set meta description
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", t("metaDescription", { lng: key }));
  }, [i18n.language, t]);

  return (
    <div className="roaming-eu-page">
      <section className="hero-slot">
        <Hero />
      </section>

      <div className="hero-text-block">
        <p>{t("heroText")}</p>
      </div>
      <ActivateOptionsBlock />
      <FaqAccordion />
    </div>
  );
};

export default RoamingEU;
