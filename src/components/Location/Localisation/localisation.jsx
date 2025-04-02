import "./_localisation.scss";
import house from "../../../images/house.webp";

import { useTranslation } from "react-i18next";

function Localisation() {
  const { t } = useTranslation();
  return (
    <>
      <div className="layout-loc">
        <div className="picture-layout">
          <img src={house} alt="" />
        </div>
        <div className="text-loc">
          <p className="xt1">
            {t("xt1")} <br /> <br />
          </p>
          <p className="xt1-2">
            {t("xt1-2")}
          </p>
          <h2> {t("localisation")} </h2>
          <ul>
            <li className="xt2">
              {t("xt2")}
            </li>{" "}
            <br />
            <li className="xt3">
              {t("xt3")}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Localisation;
