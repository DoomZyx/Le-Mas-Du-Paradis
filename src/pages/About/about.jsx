import Nav from "../../components/nav/nav";
import Header from "../../components/Header-A/header";
import Story from "../../components/Story/story";
import Serenity from "../../components/Serenity/serinity";
import "./_about.scss";

function About() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <Story />
        <Serenity />
      </main>
    </>
  );
}

export default About;
