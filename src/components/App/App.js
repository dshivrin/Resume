import React, { Component } from "react";
import Contact from "../Contact/Contact";
import Title from "../Title/Title";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import About from "../About/About";
import Jokes from "../Jokes/Jokes";
import profile from "../../assets/profile.jpg";
import "./App.css";

class App extends Component {
  state = { displayBio: false };

  toggleDisplay = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        {/* --- Header --- */}

        <header id="showcase" className="grid">
          <div className="bg-image"></div>
          <div className="content-wrap">
            <img className="profile-image" src={profile} alt="profile-image" />
            <h1>Welcome!</h1>
            <span>My name is Dima.</span>
            <Title />
          </div>
        </header>

        {/* --- Main --- */}

        <main id="main">
          <section id="about" className="grid">
            <div className="content-wrap">
              <About />
            </div>
          </section>

          <section id="experience" className="grid">
            <div className="content-wrap">
              <Experience />
            </div>
          </section>

          <section id="education" className="grid">
            <div className="content-wrap">
              <Education />
            </div>
          </section>

          <section id="section-c" className="grid">
            <div className="content-wrap">
              <Skills hue="240" saturation="100" />
            </div>
          </section>

          <section id="contact" className="grid">
            <div className="content-wrap">
              <Contact />
            </div>
          </section>

          <section id="section-e" className="grid">
            <div className="content-wrap">
              <Jokes />
            </div>
          </section>
        </main>

        {/* Footer */}

        <footer id="main-footer">
          <div>
            Project By{" Dima Shivrin. "}
            <span>
              Inspired by{" "}
              <a href="http://traversymedia.com" target="_blank">
                Traversy Media{" "}
              </a>
            </span>
            And{" "}
            <span>
              <a
                href="https://github.com/15dkatz/react-bootcamp"
                target="_blank"
              >
                David Katz
              </a>
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
