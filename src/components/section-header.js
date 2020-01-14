import React from "react"

const SectionHeader = ({ title, description }) => (
  <>
    <p className="cts_title">
      {title}
    </p>

    <p className="cts_description">
      {description}
    </p>
  </>
)

export default SectionHeader