import "./_header-L.scss";
import { useTranslation } from "react-i18next";

function HeaderL() {
  const { t } = useTranslation();
  return (
    <>
      <header className="header-l">
        <div className="layout-header2">
          <h1> {t("loch1")} </h1>
          <h2> {t("loch2")} </h2>
        </div>
      </header>
    </>
  );
}

export default HeaderL;
