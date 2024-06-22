import "./App.css";

import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Project } from "./components/Project";
import { Skill } from "./components/Skill";

function App() {
  return (
    <>
      {/* <!-- DARK MODE TOGGLER --> */}

      <input type="checkbox" id="darkMode" />

      <div className="wrapper">
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        {/* <!-- NAVBAR --> */}
        <Navbar />

        {/* <!-- HERO SECTION --> */}
        <Hero />

        {/* <!-- BANNER SECTION --> */}

        {/* <!-- SKILLS SECTION --> */}
        <Skill />

        {/* <!-- PROJECT SECTION  --> */}
        <Project />

        {/* <!-- ABOUT ME SECTION  --> */}
        {/* <!--  
        <section className="aboutme container flex">
          <div className="left">
            <img src={a1} alt="" width="100%" />
          </div>
          <div className="right">
            <h3>About Me</h3>
            <h2>Prem Acharya</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              nesciunt, rerum, consequatur iste nemo cumque ullam voluptates
              inventore accusamus optio cupiditate, accusantium ex dicta? Fugiat
              in laborum dolores aspernatur reprehenderit.
            </p>
            <h4>Melbourne, Australia</h4>
            <br />
            <div className="interest">
              <h4>Interest</h4>
              <p>Coding Football Super Hero Movies</p>
            </div>
          </div>
        </section>{" "}
        -->*/}

        <About />

        {/* <!-- CONTACT SECTION  --> */}
        <Contact />
        {/* <!-- FOOTER SECTION  --> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
