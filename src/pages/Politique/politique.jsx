import "./_politique.scss";

import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";

function Politique() {
  return (
    <>
    <Nav />
      <div className="politique-layout">
        <h1>Politique de Confidentialité</h1>
        <h2>Collecte des données personnelles</h2>
        <p>
          Lorsque vous utilisez le site Le Mas Du Paradis Bleu, nous pouvons
          être amenés à collecter certaines informations personnelles vous
          concernant. Ces informations peuvent inclure votre nom, prénom,
          adresse e-mail, numéro de téléphone, ainsi que toute autre donnée que
          vous nous fournissez volontairement via le formulaire de contact ou
          lors d’une réservation. Nous nous engageons à limiter la collecte des
          données personnelles au strict nécessaire et à respecter les principes
          de minimisation des données conformément à la réglementation en
          vigueur, notamment le Règlement Général sur la Protection des Données
          (RGPD).
        </p>

        <h2>Utilisation des données</h2>
        <p>
          Les informations collectées sur notre site sont utilisées
          exclusivement pour :
        </p>
        <ul>
          <li>Répondre à vos demandes d’informations ou de réservation,</li>
          <li>
            Gérer et assurer le suivi de votre séjour au sein de notre
            établissement,
          </li>
          <li>Vous contacter en cas de besoin concernant votre réservation,</li>
          <li>
            Améliorer nos services et optimiser l’expérience utilisateur sur
            notre site.
          </li>
        </ul>
        <p>
          Nous ne traitons vos données personnelles que dans le cadre des
          finalités légitimes et proportionnées définies ci-dessus.
        </p>

        <h2>Partage des données</h2>
        <p>
          Vos données personnelles sont strictement confidentielles. En aucun
          cas, elles ne seront vendues, louées, cédées ou échangées avec des
          tiers à des fins commerciales. Toutefois, elles peuvent être
          transmises à des prestataires techniques (ex. : service d’hébergement,
          maintenance informatique) lorsque cela est nécessaire pour assurer le
          bon fonctionnement du site et la gestion des réservations, sous
          réserve d’un engagement strict de confidentialité de leur part. Nous
          pouvons également être amenés à partager certaines données en réponse
          à une obligation légale ou à une demande des autorités compétentes.
        </p>

        <h2>Sécurité des données</h2>
        <p>
          Nous mettons en place des mesures de sécurité techniques et
          organisationnelles adaptées afin de protéger vos données personnelles
          contre toute perte, accès non autorisé, divulgation, altération ou
          destruction.
        </p>
        <p>Ces mesures incluent notamment :</p>
        <ul>
          <li>
            L’utilisation de protocoles sécurisés pour la transmission des
            données,
          </li>
          <li>
            L’accès restreint aux informations personnelles aux seules personnes
            habilitées,
          </li>
          <li>
            La mise en place de protections contre les accès non autorisés.
          </li>
        </ul>
        <p>
          Malgré nos efforts pour garantir la sécurité des données, aucun
          système n’est infaillible. En cas de violation de données, nous nous
          engageons à en informer les personnes concernées et à prendre toutes
          les mesures nécessaires pour y remédier.
        </p>

        <h2>Droits des utilisateurs</h2>
        <p>
          Conformément aux réglementations en vigueur, vous disposez des droits
          suivants sur vos données personnelles :
        </p>
        <ul>
          <li>
            Droit d’accès : vous pouvez obtenir des informations sur les données
            que nous détenons à votre sujet.
          </li>
          <li>
            Droit de rectification : vous pouvez demander la modification ou la
            mise à jour de vos données inexactes ou incomplètes.
          </li>
          <li>
            Droit de suppression : vous pouvez demander la suppression de vos
            données dans certaines conditions.
          </li>
          <li>
            Droit d’opposition : vous pouvez vous opposer au traitement de vos
            données pour des raisons légitimes.
          </li>
          <li>
            Droit de limitation du traitement : vous pouvez demander une
            restriction temporaire de l’utilisation de vos données.
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Politique;
