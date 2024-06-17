import React from "react";
import "../styles/card.css";

const Card = ({ title, photo, informations, date, location, contact }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      {photo && <img src={photo} alt={title} className="card-photo" />}
      <p
        className="card-info"
        dangerouslySetInnerHTML={{ __html: informations }}
      ></p>
      <p className="card-date" dangerouslySetInnerHTML={{ __html: date }}></p>
      <p className="card-location">{location}</p>
      <p
        className="card-contact"
        dangerouslySetInnerHTML={{ __html: contact }}
      ></p>
    </div>
  );
};

export default Card;
