import React from "react"

const SectionHeader = ({ title, description }) => (
  <>
    <h2
      style={{
        maxWidth: "742px",
        fontFamily: ".SFNSDisplay",
        fontSize: "72px",
        color: "#1C215D",
        letterSpacing: "1px",
        textAlign: "center",
        lineHeight: "80px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {title}
    </h2>
    <p style={{
        maxWidth: "742px",
        fontFamily: ".SFNSDisplay",
        fontSize: "24px",
        color: "#1C215D",
        letterSpacing: "-0.5px",
        textAlign: "center",
        lineHeight: "56px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      >{description}</p>
  </>
)

export default SectionHeader
