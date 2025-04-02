import "./_header.scss";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  return (
    <>
      <header className="header-home">
        <div className="layout-header">
          <div className="front-title">
            <h1> {t("fronttitle1")} </h1>
            <p>✨</p>
          </div>
          <h2> {t("fronttitle2")} </h2>
        </div>
      </header>
    </>
  );
}

export default Header;
