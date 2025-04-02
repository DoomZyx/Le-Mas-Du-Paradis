import "./_index.scss";
import { useTranslation } from "react-i18next";

function Comfort() {
  const { t } = useTranslation();
  return (
    <>
      <div className="comf-layout">
        <h2>{t("comftitle")}</h2>
        <p>
          {t("ct1")}
          <br /> <br />
        </p>
        <p>{t("ct2")}</p>
      </div>
    </>
  );
}

export default Comfort;
