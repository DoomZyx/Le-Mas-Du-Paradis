import { Link } from "react-router-dom";

import "./_footer.scss";


function Footer() {
  return (
    <>
      <footer>
        <h3> LE MAS DU PARADIS BLEU</h3>
        <div className="layout-footer">
          <div className="footer-content1">
            <h4 className="contact-footer">CONTACT</h4>
            <p className="email-footer">christinnerommelfangen@yahoo.fr</p>
            <p className="phone-number-f">06 82 35 57 55</p>
          </div>
          <div className="footer-content2">
            <h4 className="title-mp">
              POLITIQUE DE CONFIDENTIALITE ET MENTIONS LEGALES
            </h4>
            <Link to="/politique">
              <p className="politique-conf">Politique de confidentialité</p>
            </Link>
            <Link to="/mention">
              <p className=">mention-légales">Mentions légales</p>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
