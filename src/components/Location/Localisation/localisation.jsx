import "./_localisation.scss";
import house from "../../../images/house.webp";

function Localisation() {
  return (
    <>
      <div className="layout-loc">
        <div className="picture-layout">
          <img src={house} alt="" />
        </div>
        <div className="text-loc">
          <p className="xt1">
            Le cadre agricole, entre vignes et forêt méditerranéenne, offre une
            tranquillité unique. Ici, le temps semble suspendu, laissant place
            au chant des cigales et au parfum enivrant de la lavande. C’est un
            véritable havre de paix, idéal pour se ressourcer loin du tumulte
            urbain. 🌿 <br /> <br /> Parfait pour des vacances au calme, avec tout le confort
            moderne. Profitez d’un séjour alliant nature et sérénité, tout en
            bénéficiant des équipements essentiels pour un confort optimal. Que
            vous souhaitiez vous détendre au bord d’une terrasse ombragée,
            partir en randonnée dans les paysages environnants, ou simplement
            savourer un bon vin local, ce lieu est une invitation au bien-être.
          </p>
          <h2>LOCALISATION</h2>
          <ul>
            <li className="xt2">
              Situé dans un charmant village calme et authentique, au sud de
              l’Ardèche proche du Gard.
            </li> <br />
            <li className="xt3">
              Entre Chassezac et la Cèze, au coeur de paysages mêlant oliviers,
              vignes, chênes, truffiers, lavande, et garrigue.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Localisation;
