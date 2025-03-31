import "./_renovation.scss";

import travaux from "../../../images/build.webp";

function Renovation() {
  return (
    <>
      <div className="reno-layout">
        <img src={travaux} alt="" />
        <div className="text-layout-a">
      <h2 className="reno-title">UNE RENOVATION MINUTIEUSE 🔨</h2>
          <p>Tout a été repensé, refait et moderniser ✨</p>
          <ul>
            <li>La toiture à été entiérement refaite à neuf</li>
            <li>
              Une poutre d’origine, provenant de l’ancienne charpente, a été
              conservé et sublimée 🌟
            </li>
            <li>
              Vous pouvez l”admirer depuis la mezzanine, un clin d’oeil à
              l’histoire du bâtiment
            </li>
            <li>
              Chaque détail, du sol au plafond, a été conçu avec amour pour les
              matériaux nobles et une attention particulière au confort
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Renovation;
