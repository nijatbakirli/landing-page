import React from "react";
import lineImage from "../images/Line2.png";
import phoneVideoImage from "../images/PhoneVideo.png";

const Case2 = () => (
  <div
    className="landing1"
    style={{
      display: "flex",
      alignItems: "left",
      flexDirection: "column",
      padding: "80px 0px",
      minHeight: "100vh",
      // justifyContent: "space-between"
    }}
  >
    <p className="case_title" style={{ color: "#1C215D" }}>
      02. Reimagining online shopping in China
    </p>

    <a
      href="/case2"
      style={{
        fontFamily: ".SFNSDisplay",
        fontSize: "24px",
        color: "#1C215D",
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
    <div>
      {/* <div
        style={{
          display: "flex",
          alignItems: "left",
          padding: "80px 0px",
          justifyContent: "space-between"
        }}
      >
        <div style={{ background: `url(${phoneVideoImage})`, width: "470px", height: "675px" }}></div>
      </div> */}
    </div>
  </div>
);

export default Case2;
