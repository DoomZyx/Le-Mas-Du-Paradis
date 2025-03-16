import "./_footer.scss";

import  Facebook  from "../../images/LF.png"
import  Instagram  from "../../images/instagram.png"
import  Linkedin  from "../../images/Linkedin.png"


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
            <p className="politique-conf">Politique de confidentialité</p>
            <p className=">mention-légales">Mentions légales</p>
          </div>
          <div className="reseaux">
            <img className="fb" src={Facebook} alt="" />
            <img className="ins" src={Instagram} alt="" />
            <img className="lin" src={Linkedin} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
