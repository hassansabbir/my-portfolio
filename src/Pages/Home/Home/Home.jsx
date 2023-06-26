import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
    </div>
  );
};

export default Home;
