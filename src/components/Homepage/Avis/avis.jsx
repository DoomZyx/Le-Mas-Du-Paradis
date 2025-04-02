import { useState } from "react";
import "./_avis.scss";

import commentaires from "../../../data/Avis/avis";
import { useTranslation } from "react-i18next";

function Avis() {
  const [commentairesIndex, setCommentairesIndex] = useState(0);
  const { t, i18n } = useTranslation();
  return (
    <>
      <section>
        <h2 className="title-avis"> {t("titleavis")} </h2>
        <div className="layout-avis">
          {commentaires[commentairesIndex].map((avis, i) => (
            <div className="avis" key={i}>
              <div className="picture">
                <h3>{avis.firstL}</h3>
              </div>
              <div className="avis-content">
                <p className="avis-username">{avis.nom}</p>
                <p
                  className={`avis-text ${
                    avis.commentaire[i18n.language] === "Exceptionnel"
                      ? "big-text"
                      : ""
                  } ${
                    avis.commentaire[i18n.language] ===
                    "Très bon accueil calme et tranquillité parfait propriétaire sympathique et agréable"
                      ? "thirstComment"
                      : ""
                  }`}
                >
                  {avis.commentaire[i18n.language]}
                </p>
                <p className="avis-location">
                  {" "}
                  {avis.location[i18n.language]}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Avis;
