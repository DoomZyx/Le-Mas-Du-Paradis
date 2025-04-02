import "./_form.scss";
import { useState } from "react";

import { useTranslation } from "react-i18next";

function Form() {
  const [messageSent, setMessageSent] = useState(false);

  const { t } = useTranslation();

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
      <h2 className="form-title">{t("contacttitle")}</h2>
      <p className="form-desc">{t("c1")}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            placeholder={t("placeholder1")}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Nom</label>
          <input
            type="text"
            id="surname"
            placeholder={t("placeholder2")}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder={t("placeholder3")}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Téléphone</label>
          <input type="text" id="phone" placeholder={t("placeholder4")} />
        </div>
        <div className="form-group">
          <label htmlFor="message">{t("placeholder5")}</label>
          <textarea
            id="message"
            rows="4"
            placeholder={t("placeholder5")}
            required
          ></textarea>
        </div>
        <button type="submit">{t("sendbutt")}</button>
      </form>
      {messageSent && (
        <p className="confirmation-message">{t("comfirmation")}</p>
      )}
    </>
  );
}

export default Form;
