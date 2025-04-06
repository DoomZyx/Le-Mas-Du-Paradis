import "./_welcome.scss";
import { useTranslation } from "react-i18next";

import nature3 from "../../../images/nature3.webp";

function Welcome() {
  const { t } = useTranslation();
  return (
    <>
      <div className="background-4">
        <img src={nature3} alt="" />
        <div className="layout-welcome">
          <h2>{t("welcometitle")}</h2>
          <h3>{t("wc2")}</h3>
          <h3>{t("wc3")}</h3>
        </div>
      </div>
    </>
  );
}

export default Welcome;
