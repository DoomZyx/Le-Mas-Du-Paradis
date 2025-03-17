import { Link } from "react-router-dom";
import "./_nav.scss";

function Nav() {
  return (
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
  );
}

export default Nav;
