import React from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaTiktok, FaFacebook, FaYoutube, FaTelegramPlane, FaGlobe } from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner footer__grid">
        {/* Contacte */}
        <div className="footer__col">
          <h3 className="footer__heading">{t("footer.contacts.title")}</h3>

          <p className="footer__item">
            {t("footer.contacts.emailLabel")}{" "}
            <a href={`mailto:${t("footer.contacts.email")}`} target="_blank" rel="noopener noreferrer">
              {t("footer.contacts.email")}
            </a>
          </p>

          <p className="footer__item">
            {t("footer.contacts.phoneLabel")}{" "}
            <a href={`tel:${t("footer.contacts.phone")}`} target="_blank" rel="noopener noreferrer">
              {t("footer.contacts.phone")}
            </a>
          </p>
        </div>

        {/* Follow us */}
        <div className="footer__col">
          <h3 className="footer__heading">{t("footer.follow.title")}</h3>

          <div className="footer__socials">
            <a href={t("footer.follow.instagram")} className="footer__iconLink" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>

            <a href={t("footer.follow.tiktok")} className="footer__iconLink" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>

            <a href={t("footer.follow.facebook")} className="footer__iconLink" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>

            <a href={t("footer.follow.youtube")} className="footer__iconLink" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>

            <a href={t("footer.follow.telegram")} className="footer__iconLink" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane />
            </a>

            <a href={t("footer.follow.website")} className="footer__iconLink" target="_blank" rel="noopener noreferrer">
              <FaGlobe />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__inner">
        <p className="footer__text">
          {t("footer.copyright", { year })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
