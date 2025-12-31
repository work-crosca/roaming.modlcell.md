import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Navbar.css";

import logo from "../assets/icons/logo.svg";

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="navRoot">
      <div className="navInner">
        <div className="navGrid">
          {/* Coloana 1 – Logo */}
          <div className="navCol navLogoCol">
            <a href="/" className="navLogoLink" aria-label={t("tabTitleEU")}>
              <img src={logo} alt="Logo" className="navLogo" />
            </a>
          </div>

          {/* Coloana 2 – Language Switcher */}
          <div className="navCol navSwitcherCol">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
