import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">{t("copyright", { year })}</p>
      </div>
    </footer>
  );
};

export default Footer;
