import "./_citation.scss";
import { useTranslation } from "react-i18next";


function Citation() {
 const { t } = useTranslation();
 return (
  <>
  <div className="layout-citation">
   <h3>{t("citation1")}</h3>
   <h3>{t("citation2")}</h3>
   <h3>{t("citation3")}</h3>
  </div>
  </>
 )
}

export default Citation;