import "./_homepage.scss";

import Nav from "../../components/nav/nav";
import Header from "../../components/header-H/header-H";
import Citation from "../../components/citation/citation";
import Avis from "../../components/Avis/avis";
import Footer from "../../components/footer/footer";

import nature1 from "../../images/nature1.png";

function Homepage() {
  return (
    <>
      <div className="background-1">
        <img src={nature1} alt="nature" />
        <Nav />
        <Header />
      </div>
      <main>
        <Citation />
        <Avis />
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
