import React from "react";

export const Unit = ({image, name, city, position}) => {
  return (
    <div className="unit_container">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>
        <span>{city}</span> <br></br>
        <span>{position}</span>
      </p>
    </div>
  );
};

export default Unit;
