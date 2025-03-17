import "./_mention.scss";

import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";

function Mention() {
  return (
    <>
      <Nav />
      <div className="mention-layout">
        <h1>Mentions Légales</h1>
        <h2>Éditeur du site</h2>
        <p>
          Nom de l’entreprise : Le Mas Du Paradis Bleu <br />
          Statut juridique : SAS <br />
          Adresse : 95 Rue des Gachettes, 07460 Saint-André-de-Cruzières, France
          <br />
          Téléphone : 06 82 35 57 55
          <br />
          E-mail : christinnerommelfangen@yahoo.fr <br />
          Numéro SIRET : [Numéro SIRET] <br />
          Directeur de la publication : Axel CELLA
        </p>

        <h2>Hébergement du site</h2>
        <p>
          Nom de l’hébergeur : [Nom de l’hébergeur] <br /> Adresse : [Adresse de
          l’hébergeur] <br /> Téléphone : [Numéro de l’hébergeur]
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          Le contenu du site Le Mas Du Paradis Bleu, incluant mais sans s'y
          limiter les textes, images, graphismes, logos, icônes, vidéos, ainsi
          que leur mise en forme, est protégé par les lois en vigueur sur la
          propriété intellectuelle et appartient exclusivement à [Nom du
          propriétaire ou de l’entreprise], sauf mention contraire. Toute
          reproduction, distribution, modification, adaptation ou diffusion,
          partielle ou totale, du contenu du site, par quelque procédé que ce
          soit, sans autorisation expresse et écrite de [Nom du propriétaire],
          est interdite et constitue une contrefaçon sanctionnée par le Code de
          la propriété intellectuelle. Les utilisateurs du site Le Mas Du
          Paradis Bleu s'engagent à respecter ces droits et à ne pas exploiter
          les contenus du site à des fins commerciales ou personnelles sans
          autorisation préalable.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Le site Le Mas Du Paradis Bleu collecte et traite certaines
          informations personnelles des utilisateurs dans le respect des
          dispositions du Règlement Général sur la Protection des Données (RGPD)
          et de la législation française en vigueur. Les informations collectées
          via le formulaire de contact ou toute autre interaction sur le site
          sont utilisées uniquement dans le cadre de la gestion des demandes des
          utilisateurs, de la relation client et, si applicable, de l'envoi de
          communications commerciales (si l'utilisateur a donné son
          consentement). Les données personnelles sont conservées pour une durée
          strictement nécessaire aux finalités pour lesquelles elles ont été
          collectées. L'utilisateur dispose d'un droit d'accès, de
          rectification, de suppression et d'opposition au traitement de ses
          données, qu'il peut exercer en contactant [Email ou adresse postale du
          responsable du traitement]. Le site met en œuvre des mesures de
          sécurité appropriées pour protéger les données personnelles contre
          tout accès non autorisé, perte, altération ou divulgation. En
          utilisant le site Le Mas Du Paradis Bleu, les utilisateurs
          reconnaissent avoir pris connaissance de cette politique de
          confidentialité et acceptent les conditions du traitement de leurs
          données personnelles.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Mention;
