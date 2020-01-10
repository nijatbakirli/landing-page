import React from "react"

const Footer = () => (
  <div
    className="landing1"
    style={{
      display: "flex",
      alignItems: "left",
      flexDirection: "column",
      padding: "80px 10px",
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
          flexWrap: "wrap",
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
            fontFamily: "Poppins",
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
  </div>
)

export default Footer
