import React from "react";
import Card from "./card";
import svgCompass from "../images/Stockholm-icons/Tools/Compass.svg";
import svgChart from "../images/Stockholm-icons/Shopping/Chart.svg";
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
    <p className="gaas_header">
      We do things a bit different.
      <br />
      We focus on value.
    </p>
    <p style={{ flex: 1 }} />
    <div>
      <p className="gaas_main">GaaS</p>
      <p className="gaas_footer">Growth as a Service</p>
    </div>
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >
        <Card
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
        />
      </div>
    </div>
  </div>
);

export default Gaas;
