import "./_form.scss";
import { useState } from "react";

function Form() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

       // Vérifie le champ honeypot (doit rester vide) (Evite les spams des bots)
       if (formData.get("honeypot") !== "") {
        return; // bot détecté, on annule
      }

    fetch(`https://formsubmit.co/${import.meta.env.VITE_FORMSUBMIT_EMAIL}`, {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (response.ok) {
        setMessageSent(true);
        e.target.reset(); 
      }
    });
  };
  return (
    <>
      <h2 className="form-title">Contactez-nous 📩</h2>
      <p className="form-desc">
        N'hésitez pas à nous contacter par mail our par téléphone pour tout
        renseignement ou pour réserver{" "}
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" placeholder="Nom" required />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Nom</label>
          <input type="text" id="surname" placeholder="Prénom" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="E-mail" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Téléphone</label>
          <input type="text" id="phone" placeholder="Téléphone" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Votre Message</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Ecrivez votre demande"
            required
          ></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
      {messageSent && (
        <p className="confirmation-message">
          Votre message a bien été envoyé à l'hôte !
        </p>
      )}
    </>
  );
}

export default Form;
