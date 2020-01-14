import React from "react";
import activateImage from "../images/Activate.png";

const Card = props => (
  <div
    className="card"
    style={{
      background: props.back_image ? `#FFFFFF url(${activateImage}) no-repeat` : "#FFFFFF",
      backgroundSize: "cover",
      backgroundPositionY: "bottom",
    }}
  >
    <img
      alt=""
      src={props.svgPath}
      style={{ width: "52px", height: "52px", marginBottom: "10px" }}
    />
    <h1
      style={{
        fontSize: "24px",
        color: "#1C215D",
        letterSpacing: "0px",
        marginBottom: "10px"
      }}
    >
      {props.title}
    </h1>
    <p
      style={{
        opacity: "0.5",
        fontFamily: "Helvetica",
        fontSize: "14px",
        color: "#1C215D",
        letterSpacing: "0px"
      }}
    >
      {props.description}
    </p>
  </div>
);

export default Card;
