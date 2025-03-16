import Nav from "../../components/nav/nav";
import HeaderL from "../../components/Header-L/header-L";
import Localisation from "../../components/Localisation/localisation";

import "./_location.scss";

import nature2 from "../../images/nature2.png";

function Location() {
  return (
    <>
      <div className="background-2">
        <img src={nature2} alt="" />
        <Nav />
        <HeaderL />
      </div>
      <main>
        <Localisation />
      </main>
    </>
  );
}

export default Location;
