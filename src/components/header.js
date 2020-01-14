import React from "react";

import Button from "./button";
import { scroller } from "react-scroll";
import "../styles/header.css";

const Header = () => {
  function handleClick(e) {
    scroller.scrollTo("ElementSection2", {
      duration: 300,
      delay: 100,
      smooth: true
    });
  }

  return (
    <div
      className="landing1"
      style={{
        display: "flex",
        alignItems: "left",
        flexDirection: "column",
        padding: "50px 10px",
        minHeight: "100vh",
        minWidth: "222px"
      }}
    >
      <div>
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "40px",
              color: "#000000",
              letterSpacing: "0.39px",
              lineHeight: "57px",
              minWidth: "222px",
              fontFamily: "Poppins"
            }}
          >
            LE CRAFT
          </h1>
          <nav>
            <a href="/work">Work</a>
            <a href="/service">Services</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </div>
      <p style={{ flex: 1 }} />
      <div
        className="main"
        style={{ color: "#1C215D", height: "3em", position: "relative" }}
      >
        <div className="fragment" id="header_fragment1">
          <strong>We are the allies of</strong> those
          <br />
          who aspire to <strong>change</strong> the
          <br />
          world we live in.
        </div>
        <div className="fragment" id="header_fragment2">
          We <strong>craft</strong> digital
          <br />
          experiences.
        </div>
        <div className="fragment" id="header_fragment3">
          We make your business
          <br />
          <strong>grow.</strong>
        </div>
      </div>
      <p className="undertext">
        Our mission is to help our partners in their road to success.
      </p>
      <Button
        background="#FF4876"
        width="190px"
        height="62px"
        onClick={handleClick}
      >
        Next
      </Button>
      <p style={{ flex: 1 }} />
    </div>
  );
};

export default Header;
