import React from "react"

import { BORDER_RADIUS } from "../styles/constants"
import "../styles/button.css"

const Button = ( props ) => (
  <button onClick={props.onClick}
    style={{
      padding: ".5rem 2.5rem",
      color: "white",
      fontWeight: 700,
      borderRadius: BORDER_RADIUS,
      borderWidth: 0,
      cursor: "pointer",
      background: props.background,
      width: props.width,
      height: props.height,
      fontSize: "20px",
      outline: 'none',
    }}
  >
    {props.children}
  </button>
)

export default Button
