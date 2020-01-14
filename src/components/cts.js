import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div
    style={{
      padding: "4rem 1rem",
      textAlign: "center",
      marginTop: "6rem",
    }}
  >
    <SectionHeader
      title="Wanna build the future together?"
      description="We love to work with people who want to"
    />
    <Button background="#1B215D" width="249px" height="61px">
      Get In touch
    </Button>
  </div>
)

export default CallToAction
