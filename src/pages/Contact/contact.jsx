import "./_contact.scss";
import Nav from "../../components/nav/nav";
import Form from "../../components/Contact/Form/form";
import Footer from "../../components/footer/footer"

import { useTranslation } from "react-i18next";

import sky from "../../images/sky.webp"

function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <div className="background-5">
        <img src={sky} alt="" />
        <header className="header-c">
          <Nav />
          <h1>{t("headercontact")}</h1>
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
