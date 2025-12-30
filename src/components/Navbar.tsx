import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <header className="navRoot">
      <div className="navInner">
        <div className="navRight">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
