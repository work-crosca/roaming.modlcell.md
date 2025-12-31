import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaYoutube,
  FaTelegramPlane,
  FaGlobe,
} from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const followLinks = {
    instagram: "https://instagram.com/moldcell",
    tiktok: "https://tiktok.com/@moldcell",
    facebook: "https://facebook.com/moldcell.md",
    youtube: "https://youtube.com/@MoldcellOfficial",
    telegram: "https://t.me/moldcell",
    website: "https://moldcell.md",
  };

  return (
    <footer className="footer">
      <div className="footer__inner footer__grid">
        {/* Contacte */}
        <div className="footer__col">
          <h3 className="footer__heading">{t("footer.contacts.title")}</h3>
          <p className="footer__item">{t("footer.contacts.emailLabel")} <a href="mailto:moldcell@moldcell.md">{t("footer.contacts.email")}</a></p>
          <p className="footer__item">{t("footer.contacts.phoneLabel")} <a href="tel:+37378500500">{t("footer.contacts.phone")}</a></p>
        </div>

        {/* Follow us */}
        <div className="footer__col">
          <h3 className="footer__heading">{t("footer.follow.title")}</h3>
          <div className="footer__socials">
            <a href={followLinks.instagram} className="footer__iconLink">
              <FaInstagram />
            </a>

            <a href={followLinks.tiktok} className="footer__iconLink">
              <FaTiktok />
            </a>

            <a href={followLinks.facebook} className="footer__iconLink">
              <FaFacebook />
            </a>

            <a href={followLinks.youtube} className="footer__iconLink">
              <FaYoutube />
            </a>

            <a href={followLinks.telegram} className="footer__iconLink">
              <FaTelegramPlane />
            </a>

            <a href={followLinks.website} className="footer__iconLink">
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
