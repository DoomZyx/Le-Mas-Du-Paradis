import "./_story.scss";

import { useTranslation } from "react-i18next";

function Story() {
  const { t } = useTranslation();

  return (
    <>
      <div className="layout-story">
        <h2>{t("titlestory")}</h2> <br /> <br />
        <h3>{t("story1")} </h3> <br /> <br />
        <h3>{t("story2")}</h3> <br />
        <h3>{t("story3")}</h3> <br /> <br />
        <h3>{t("story4")}</h3>
      </div>
    </>
  );
}

export default Story;
