import "./App.css";

import Home from "./Components/Home/Home";
import AboutMe from './Components/AboutMe/AboutMe';
import Skill from "./Components/Skill/Skill";
import Service from "./Components/Service/Service";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/ContactMe/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <AboutMe></AboutMe>
      <Skill></Skill>
      <Service></Service>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
