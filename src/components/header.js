import React from "react";

import Button from "./button";
import {Element, scroller} from "react-scroll";

const Header = () => {
  function handleClick(e) {
    scroller.scrollTo('ElementSection2', {
      duration: 300,
      delay: 100,
      smooth: true,
    })
  }

  return (
    <div
      className="landing1"
      style={{
        display: "flex",
        alignItems: "left",
        flexDirection: "column",
        padding: "50px 10px",
        minHeight: "100vh"
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
      <p className="main" style={{ maxWidth: 888, color: "#1C215D" }}>
        <strong>We are the allies of</strong> those who aspire to{" "}
        <strong>change</strong> the world we live in.
      </p>
      <p
        style={{
          opacity: 0.6,
          fontSize: `20px`,
          color: `#1C215D`,
          letterSpacing: `0px`,
          lineHeight: `30px`
        }}
      >
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
