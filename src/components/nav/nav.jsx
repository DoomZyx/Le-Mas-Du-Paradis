import { Link } from "react-router-dom";
import { useState } from "react";
import "./_nav.scss";

import { useTranslation } from "react-i18next";
import "../../../i18n"
import i18n from "../../../i18n";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  
  return (
    <>
      <div className="layout-burger">
        <button className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <div className="layout-language">
          <button className="french-butt" onClick={() => i18n.changeLanguage("fr")}>FR</button>
          <button className="english-butt" onClick={() => i18n.changeLanguage("en")}>EN</button>
        </div>
      </div>
      <nav id="nav">
        <div className="layout-nav">
          <Link to="/">
            <h4> {t("accueil")} </h4>
          </Link>
          <Link to="/location">
            <h4> {t("location")} </h4>
          </Link>
          <Link to="/about">
            <h4> {t("about")} </h4>
          </Link>
          <Link to="/contact">
            <h4> {t("contact")} </h4>
          </Link>
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Link to="/">
          <h4>{t("accueil")}</h4>
        </Link>
        <Link to="/location">
          <h4>{t("location")}</h4>
        </Link>
        <Link to="/about">
          <h4>{t("about")}</h4>
        </Link>
        <Link to="/contact">
          <h4>{t("contact")}</h4>
        </Link>
        <div className="layout-sublink">
          <div className="line"></div>
          <Link to="/politique">
            <h3> {t("conf")} </h3>
          </Link>
          <Link to="/mention">
            <h3> {t("mention")} </h3>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
