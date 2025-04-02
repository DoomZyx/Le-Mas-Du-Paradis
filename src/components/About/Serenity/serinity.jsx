import "./_serenity.scss";

import { useTranslation } from "react-i18next";

function Serenity() {
  const { t } = useTranslation();
  return (
    <>
      <div className="layout-serenity">
        <h2>{t("serenitytitle")}</h2>
        <p>
          {t("st1")}
          <br /> <br />
        </p>
        <p>
          {t("st2")}
          <br /> <br />
        </p>
        <p>
          {t("st3")}
          <br /> <br />
        </p>
        <p>
          {t("st4")}
          <br /> <br />
        </p>
        <p>{t("st5")}</p>
      </div>
    </>
  );
}

export default Serenity;
