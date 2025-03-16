import "./_header.scss";
import gite27 from "../../../public/gite/gite27.jpg";

function Header() {
  return (
    <>
      <header className="header-about">
        <h1>A PROPOS DE NOTRE MAS EN PIERRE</h1>
        <div className="header-layout">
          <img src={gite27} alt="Le Mas Du Paradis Bleu" />
          <h2>
            Bienvenue dans notre mas en pierres, un lieu chargé d’histoire et
            transformé avec passion pour devenir un véritable havre de paix 🌿.{" "}
            <br /> <br />
            Nichée au cœur d’un cadre authentique et préservé, cette demeure
            allie le charme rustique des anciennes bâtisses à tout le confort
            moderne. Chaque pierre raconte une histoire, chaque espace a été
            pensé pour offrir sérénité et bien-être. <br />
            <br /> Laissez-vous bercer par le chant des cigales, savourez
            l’ombre bienfaisante des oliviers et profitez d’un panorama
            exceptionnel sur la nature environnante. <br /> <br /> Ici, le temps
            ralentit, invitant à la détente, à la découverte et aux moments de
            partage inoubliables. <br />
            <br /> Que ce soit pour une escapade romantique, un séjour en
            famille ou une pause ressourçante, notre mas vous promet une
            expérience unique, entre authenticité et douceur de vivre.
          </h2>
        </div>
      </header>
    </>
  );
}

export default Header;
