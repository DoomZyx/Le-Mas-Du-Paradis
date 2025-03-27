import { Link } from "react-router-dom";
import { useState } from "react";
import "./_nav.scss";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <>
      <div className="layout-burger">
        <button className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <h1>BIENVENUE AU MAS DU PARADIS BLEU</h1>
      </div>
      <nav id="nav">
        <div className="layout-nav">
          <Link to="/">
            <h4>ACCUEIL</h4>
          </Link>
          <Link to="/location">
            <h4>LOCATION</h4>
          </Link>
          <Link to="/about">
            <h4>A PROPOS</h4>
          </Link>
          <Link to="/contact">
            <h4>CONTACT</h4>
          </Link>
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Link to="/">
          <h4>ACCUEIL</h4>
        </Link>
        <Link to="/location">
          <h4>LOCATION</h4>
        </Link>
        <Link to="/about">
          <h4>A PROPOS</h4>
        </Link>
        <Link to="/contact">
          <h4>CONTACT</h4>
        </Link>
      </div>
    </>
  );
}

export default Nav;
