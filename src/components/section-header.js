import React from "react"

const SectionHeader = ({ title, description }) => (
  <>
    <p className="cts_title">
      {title}
    </p>
    
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
