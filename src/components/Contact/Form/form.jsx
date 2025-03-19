import "./_form.scss";

function Form() {
  return (
    <>
      <h2 className="form-title">Contactez-nous 📩</h2>
      <p className="form-desc">N'hésitez pas à nous contacter par mail our par téléphone pour tout renseignement ou pour réserver </p>
      <form>
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
          <textarea id="message" rows="4" placeholder="Ecrivez votre demande" required></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </>
  );
}

export default Form;
