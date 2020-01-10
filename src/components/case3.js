import React from "react";
import lineImage from "../images/Line.png";

const Case3 = () => (
  <div
    className="landing1"
    style={{
      display: "flex",
      alignItems: "left",
      flexDirection: "column",
      padding: "80px 10px",
      minHeight: "100vh"
    }}
  >
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
);

export default Case3;
