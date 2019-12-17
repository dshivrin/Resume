import React, { Component } from "react";
import SKILLS from "../../data/Skills";
import "./Skills.css";

class SkillBars extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ collapsed: false });
    }, 1000);
  }

  render() {
    const { collapsed } = this.state;
    const { hue, saturation } = this.props;

    return (
      <div id="app" className={`container ${collapsed ? "collapsed" : ""}`}>
        <h3> Frameworks, paradigms and practices I'm familiar with</h3>
        <ul className="skills">
          {SKILLS.map((skill, index) => (
            <li
              key={skill.id}
              style={{
                width: `${skill.level}%`,
                backgroundColor: `hsl(${hue}, ${saturation}%, ${100 /
                  (index + 3.5)}%)`
              }}
              //hue = initial color
              //saturation = 0% circle center 100% edge
            >
              <p className="skill-container">
                <img src={skill.logo} alt="logo" className="skill-logo" />
                <div>
                  {skill.name}
                  <span>{skill.level}</span>
                </div>
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SkillBars;
