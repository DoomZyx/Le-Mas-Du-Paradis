import { Link } from "react-router-dom";
import "./_nav.scss";

function Nav() {
  return (
    <nav id="nav">
      <div className="layout-nav">
        <Link to="/">
          <p>ACCUEIL</p>
        </Link>
        <Link to="Location">
          <p>LOCATION</p>
        </Link>
        <Link to="about">
          <p>A PROPOS</p>
        </Link>
        <Link to="contact">
          <p>CONTACT</p>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
