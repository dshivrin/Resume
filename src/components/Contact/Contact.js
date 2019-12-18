import React from "react";
import CONTACT from "../../data/Contact";
import phone_icon from "../../assets/phone_icon.png";
import "./Contact.css";

const ConnnectionMethod = props => {
  const { link, image } = props.connection;
  return (
    <div className="image-link" onClick={() => window.open(link, "_blank")}>
      <img src={image} alt="contact-icon" className="contact-icon"></img>
      <span>{link}</span>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h2>Contact me!</h2>
      <div className="contact-list">
        <div className="phone">
          <img
            src={phone_icon}
            alt="contact-icon"
            className="contact-icon"
          ></img>
          <span>+972544907782</span>
        </div>
        {CONTACT.map(con => {
          return <ConnnectionMethod key={con.id} connection={con} />;
        })}
      </div>
    </div>
  );
};

export default Contact;
