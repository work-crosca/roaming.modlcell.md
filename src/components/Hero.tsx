import React from "react";
import "./Hero.css";
import { useTranslation } from "react-i18next";
import bannerRO from "../assets/sprites/banner_ro.png";
import bannerRU from "../assets/sprites/banner_ru.png";

const Hero: React.FC = () => {
  const { i18n } = useTranslation();

  const lang = i18n.language.split("-")[0]; // "ro" sau "ru"

  const banners: Record<"ro" | "ru", string> = {
    ro: bannerRO ,
    ru: bannerRU ,
  };

  const src = banners[lang as "ro" | "ru"] || banners.ro;

  return (
    <section className="hero-banner">
      <img src={src} alt="" />
    </section>
  );
};

export default Hero;
