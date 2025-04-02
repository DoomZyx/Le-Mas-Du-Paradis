import "./_renovation.scss";

import { useTranslation } from "react-i18next";

import travaux from "../../../images/build.webp";

function Renovation() {
  const { t } = useTranslation();
  return (
    <>
      <div className="reno-layout">
        <img src={travaux} alt="" />
        <div className="text-layout-a">
          <h2 className="reno-title">{t("renotitle")}</h2>
          <p>{t("rt1")}</p>
          <ul>
            <li>{t("rt2")}</li>
            <li>{t("rt3")}</li>
            <li>{t("rt4")}</li>
            <li>{t("rt5")}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Renovation;
