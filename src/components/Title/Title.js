import React, { Component } from "react";
import "./Title.css";

const TITLES = [
  "am a professional software developer",
  "am an enthusiastic self learner",
  "love dogs 🐶"
];

class Title extends Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ fadeIn: false });
    }, 2000);
    this.animateTitels();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
  }

  animateTitels = () => {
    this.interval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex, fadeIn: true });

      this.timeout = setTimeout(() => {
        this.setState({ fadeIn: false });
      }, 2000);
    }, 4000);
  };

  render() {
    const { fadeIn, titleIndex } = this.state;

    const title = TITLES[titleIndex];

    return (
      <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>I {title}</p>
    );
  }
}

export default Title;
