import { useState } from "react";
import "./_avis.scss";

import commentaires from "../../../data/Avis/avis";

function Avis() {
  const [commentairesIndex, setCommentairesIndex] = useState(0);

  return (
    <>
      <section>
        <h2 className="title-avis">RECOMMANDATIONS</h2>
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
                    avis.commentaire === "Exceptionnel" ? "big-text" : ""
                  } ${
                    avis.commentaire ===
                    "Très bon accueil calme et tranquillité parfait propriétaire sympathique et agréable"
                      ? "thirstComment"
                      : ""
                  }`}
                >
                  "{avis.commentaire}"
                </p>
                <p className="avis-location"> {avis.location} </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Avis;
