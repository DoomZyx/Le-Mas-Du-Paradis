import Nav from "../../components/nav/nav";
import Header from "../../components/About/Header-A/header";
import Story from "../../components/About/Story/story";
import Serenity from "../../components/About/Serenity/serinity";
import Renovation from "../../components/About/Renovation /renovation";
import Comfort from "../../components/About/comfort&moderne";
import Wish from "../../components/About/Wish/wish";
import Welcome from "../../components/About/Welcome /welcome";
import Footer from "../../components/footer/footer";
import "./_about.scss";

function About() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <Story />
        <Serenity />
        <Renovation />
        <Comfort />
        <Wish />
        <Welcome />
      </main>
      <Footer />
    </>
  );
}

export default About;
