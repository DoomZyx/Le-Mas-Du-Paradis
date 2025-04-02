import "./_wish.scss";

import { useTranslation } from "react-i18next";

import nature4 from "../../../images/nature4.webp";

function Wish() {
  const { t } = useTranslation();
  return (
    <>
      <div className="background-3">
        <img src={nature4} alt="" />
        <div className="wish-layout">
          <h2>{t("wishtitle")}</h2>
          <p>
            {t("wt1")}
            <br /> <br />
          </p>
          <p>{t("wt2")}</p>
        </div>
      </div>
    </>
  );
}

export default Wish;
