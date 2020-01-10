import React, { Fragment } from "react";
import lineImage from "../images/Line.png";
import lineSVG from "../images/Line3.svg";
import mockupImage from "../images/Mockup.png";
const Case3 = () => (
  <div
    className="landing1"
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      minHeight: "100vh",
      width: "100%",
      position: "relative"
    }}
  >
    <div style={{width: "75%", padding: "80px 100px"}}>
      <p className="case_title" style={{ color: "#FFFFFF" }}>
        03. Building shared economy models
        <br />
        for creative souls
      </p>

      <a
        href="/case3"
        style={{
          fontFamily: ".SFNSDisplay",
          fontSize: "24px",
          color: "#FFFFFF",
          letterSpacing: "-0.67px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ marginRight: "10px" }}>Explore this case</p>
          <img
            alt={"No image"}
            src={lineImage}
            style={{ width: "28px", height: "14px" }}
          />
        </div>
      </a>
      </div>
    {/*<img alt={""} src={lineSVG} style={{ position: 'relative', bottom: 0, width: "100%"}}/>*/}
    <img alt={""} src={mockupImage} style={{ position: 'absolute', bottom: 0 }}/>
  </div>
);

export default Case3;
