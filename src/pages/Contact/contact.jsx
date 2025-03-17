import "./_contact.scss";
import Nav from "../../components/nav/nav";
import Form from "../../components/Form/form";
import Footer from "../../components/footer/footer"

import sky from "../../images/sky.jpg"

function Contact() {
  return (
    <>
      <div className="background-5">
        <img src={sky} alt="" />
        <header className="header-c">
          <Nav />
          <h1>N’attendez plus, réservez votre séjour !</h1>
        </header>
      </div>
      <main>
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default Contact;
