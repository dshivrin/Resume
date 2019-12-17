import React from "react";
import EDUCATION from "../../data/Education";
import "./Education.css";

const Education = () => {
  return (
    <div>
      <h3>Education</h3>
      <ul>
        {EDUCATION.map(institute => {
          return (
            <li key={institute.id}>
              <Institute data={institute} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Institute = ({ data }) => {
  const { logo, name, description, duration } = data;
  return (
    <div className="card education-card">
      <img src={logo} alt="education-logo" className="education-logo" />
      <div className="card-content">
        <h4 className="card-title">{name}</h4>
        <p>{description}</p>
        <span>{duration}</span>
      </div>
    </div>
  );
};

export default Education;
