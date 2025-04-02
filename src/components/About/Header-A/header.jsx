import { useTranslation } from "react-i18next";
import "./_header.scss";
import gite27 from "/gite/gite27.webp";

function Header() {
  const { t } = useTranslation();
  return (
    <>
      <header className="header-about">
        <h1>{t("titleheadabout")}</h1>
        <div className="header-layout">
          <img src={gite27} alt="Le Mas Du Paradis Bleu" />
          <div className="header-text">
            <h2>
              {t("tr1")} <br /> <br />
            </h2>
            <h2>
              {t("tr2")} <br /> <br />
            </h2>
            <h2>
              {t("tr3")}
              <br />
            </h2>
            <h2>
              {t("tr4")} <br /> <br />
            </h2>
            <h2>{t("tr5")}</h2>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
