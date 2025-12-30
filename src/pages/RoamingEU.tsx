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
    document.title = t("tabTitleEU", { lng: key });
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
