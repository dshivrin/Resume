import React, { Component } from "react";
import "./About.css";

class About extends Component {
  state = { toggleAbout: false };
  birthDate = new Date(1987, 5, 11);
  age = Math.floor(
    (new Date() - new Date(this.birthDate).getTime()) / 3.15576e10 //3.15576e10 = millennium
  );

  toggleDisplay = () => {
    this.setState({ toggleAbout: !this.state.toggleAbout });
  };

  render() {
    return (
      <div>
        <h4>About me:</h4>
        <p>
          My name is Dima Shivrin. I am {this.age} am years old. I am a
          professional software developer from Yavne, Israel.
        </p>
        {this.state.toggleAbout ? (
          <div>
            <div className="about-container">
              <div className="first">
                <div>
                  <span>
                    <b>Full name:</b> Dmitry Shivrin
                  </span>
                </div>
                <div>
                  <span>
                    <b>Birth year:</b> 1987
                  </span>
                </div>
                <div>
                  <span>
                    <b>Residence:</b> Yavne, Israel
                  </span>
                </div>
                <div>
                  <span>
                    <b>Languages:</b> Russian, Hebrew, English
                  </span>
                </div>
              </div>
              <div className="second">
                <div>
                  <span>
                    <b>Mobile:</b> +972544907782
                  </span>
                </div>
                <div>
                  <span>
                    <b>email:</b> dshivrin@gmail.com
                  </span>
                </div>
                <div>
                  <span>
                    <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/dima-shivrin/" target="_blank">https://www.linkedin.com/in/dima-shivrin/</a>
                  </span>
                </div>
                <div>
                  <span>
                    <b>Hobbies:</b> Books, Arduino and video games
                  </span>
                </div>
              </div>
            </div>
            <div>
              <button onClick={this.toggleDisplay} className="btn read-more">Show less</button>
            </div>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplay} className="btn read-more">Read more</button>
          </div>
        )}
      </div>
    );
  }
}

export default About;
