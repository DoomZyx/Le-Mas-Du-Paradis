import Nav from "../../components/nav/nav";
import Header from "../../components/Header-A/header";
import Story from "../../components/Story/story";
import Serenity from "../../components/Serenity/serinity";
import Renovation from "../../components/Renovation /renovation";
import Comfort from "../../components/comfort&moderne";
import Wish from "../../components/Wish/wish";
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
      </main>
    </>
  );
}

export default About;
