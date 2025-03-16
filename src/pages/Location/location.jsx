import Nav from "../../components/nav/nav";
import HeaderL from "../../components/Header-L/header-L";
import Localisation from "../../components/Localisation/localisation";
import Atouts from "../../components/Atouts/atouts";
import Description from "../../components/Description/description";
import Carousel from "../../components/Caroussel/caroussel";
import Footer from "../../components/footer/footer";

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
        <div className="layout-collapse">
          <Atouts />
          <Description />
        </div>
        <Carousel />
      </main>
      <Footer />
    </>
  );
}

export default Location;
