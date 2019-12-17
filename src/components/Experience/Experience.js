import React from "react";
import EXPERIENCE from "../../data/Experience";
import "./Experience.css";

// const Experience = () => {
//   return (
//     <div>
//     <h4>Professional experience</h4>
//       {EXPERIENCE.map(workPlace => {
//         return <WorkPlace key={workPlace.id} data={workPlace} />;
//       })}
//     </div>
//   );
// };

// const WorkPlace = ({ data }) => {
//   const { logo, name, position, description, duration } = data;
//   return (
//     <div>
//       <img src={logo} alt="comapny-logo" />
//       <h4>{name}</h4>
//       <span>{position}</span>
//       <p>{description}</p>
//       <span>{duration}</span>
//     </div>
//   );
// };

const Experience = () => {
  return (
    <div>
    <h3>Experience</h3>
      <ul>
        {EXPERIENCE.map(workPlace => {
          return (
            <li key={workPlace.id}>
              <WorkPlace data={workPlace} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const WorkPlace = ({ data }) => {
  const { logo, name, position, description, duration } = data;
  return (
      <div className="card" style={{display: 'flex'}}>
        <img src={logo} alt="comapny-logo" className="comapny-logo"/>
        <div className="card-content">
          <h4 className="card-title">
            {position} at {name}
          </h4>
          <p>{description}</p>
          <span>{duration}</span>
        </div>
      </div>
  );
};

export default Experience;
