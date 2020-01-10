import React from "react";
import Card from "./card";
import svgCompass from "../images/Stockholm-icons/Tools/Compass.svg";
import svgChart from "../images/Stockholm-icons/Shopping/chart-line#1.svg";
import svgSending from "../images/Stockholm-icons/Communication/Sending.svg";
import svgFire from "../images/Stockholm-icons/General/Fire.svg";

const Gaas = () => (
  <div
    className="landing2"
    style={{
      display: "flex",
      alignItems: "left",
      flexDirection: "column",
      padding: "50px 10px",
      minHeight: "100vh"
    }}
  >
    <h1
      style={{
        fontSize: "48px",
        color: "#FFFFFF",
        letterSpacing: "-1.19px",
        lineHeight: "80px"
      }}
    >
      We do things a bit different.
      <br />
      We focus on value.
    </h1>
    <p style={{ flex: 1 }} />
    <div>
      <h1
        style={{
          fontSize: "108px",
          color: "#FFFFFF",
          letterSpacing: "-2.78px",
          minWidth: "375px"
        }}
      >
        GaaS
      </h1>
      <h1
        style={{
          fontSize: "40px",
          color: "#FFFFFF",
          letterSpacing: "-1.11px",
          lineHeight: "40px"
        }}
      >
        Growth as a Service
      </h1>
    </div>
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap"
        }}
      >
        {/* <Card
          svgPath={svgCompass}
          title={`Strategize & 
            Guided Scoping.`}
          description={`We start by helping you identify the ideal market and 
          we understand your vision for the idea, gather requirements,
          and properly scope out your project timeline and pricing.`}
        />
        <Card
          svgPath={svgSending}
          title="Launch."
          description="A solid strategy though isn't enough. You also have to deliver to your users the highest quality possible."
        />
        <Card
          back_image={true}
          svgPath={svgFire}
          title="Activate."
          description={`How are users going to find your app or business? 
          Marketing and growth also need to be part of your strategy.`}
        />
        <Card
          svgPath={svgChart}
          title="Retain."
          description="You've worked so hard to gain users, let's work together to make sure they stick around."
        /> */}
      </div>
    </div>
  </div>
);

export default Gaas;
