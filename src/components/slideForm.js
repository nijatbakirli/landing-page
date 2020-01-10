import React from "react";
import { SectionsContainer, Section } from "react-fullpage";
import Case1 from "../components/case1";
import Case2 from "../components/case2";
import Case3 from "../components/case3.js";
import shapeImage from "../images/section4.png";

/* <div
className="section4"
style={{ background: `url(${shapeImage})`, backgroundSize: "cover" }}
>
<Case1 />
</div>
<div className="section5" style={{ background: "#92D6D0" }}>
<Case2 />
</div>
<div className="section6" style={{ background: "#FF4876" }}>
<Case3 />
</div> */

export default class SlideForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  render() {
    const options = {
      sectionClassName: "section",
      anchors: ["sectionOne", "sectionTwo", "sectionThree"],
      scrollBar: false,
      navigation: true,
      verticalAlign: false,
      sectionPaddingTop: "50px",
      sectionPaddingBottom: "50px",
      arrowNavigation: true,
      scrollCallback: states => this.setState({ current: states.activeSection })
    };

    const { current } = this.state;

    return (
      <SectionsContainer
        className="container"
        {...options}
        activeSection={current}
      >
        <Section
          className="custom-section" color="#00dd00" 
        >
          <Case1 />
        </Section>
        <Section color="#92D6D0" >
          <Case2 />
        </Section>
        <Section color="#FF4876">
          <Case3 />
        </Section>
      </SectionsContainer>
    );
  }
}
