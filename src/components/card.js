import React from "react";
import activateImage from "../images/Activate.png";

const Card = props => (
  <div
    className="card"
    style={{
      display: "flex",
      alignItems: "left",
      flexDirection: "column",
      padding: "12px 20px",
      width: "255px",
      height: "328px",
      background: props.back_image ? `url(${activateImage})` : "#FFFFFF",
      backgroundRepeat: "no-repeat",
      borderRadius: "10px",
      marginBottom: "10px",
      minWidth: "255px"
    }}
  >
    <img
      alt={""}
      src={`url(${props.svgPath})`}
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
