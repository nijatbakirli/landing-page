import React from "react";
import lineImage from "../images/Line.png";
import mockupImage from "../images/Mockup.png";
import useVPagination from "./slide";


const Case3 = () => {
  useVPagination("landing3");
  
  return (
    <div id="landing3" style={{ position: "relative" }}>
      <div
        className="landing1"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100%",
          position: "relative",
        }}
      >
        <div
          className="case3"
          style={{ padding: "80px 10px", paddingBottom: "0px" }}
        >
          <p
            className="case_title"
            style={{ color: "#FFFFFF", maxWidth: "700px" }}
          >
            03. Building shared economy models for creative souls
          </p>
          <a href="/case3">
            <p className="icon_text" style={{ color: "#FFFFFF" }}>
              Explore this case
              <img
                alt=""
                src={lineImage}
                style={{
                  marginBottom: "0px",
                  marginTop: "5px",
                  marginLeft: "10px"
                }}
              />
            </p>
          </a>
        </div>
        <img alt="" src={mockupImage} className="mockup" />
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <div style={{ flex: 1 }}>&nbsp;</div>
        <svg width="100%" viewBox="0 0 1400 633" style={{ flex: 4 }}>
          <title>Line 4</title>
          <desc>Created with Sketch.</desc>
          <g
            id="Landing"
            style={{
              stroke: "none",
              strokeWidth: "1",
              fill: "none",
              fillRule: "evenodd",
              strokeLinecap: "square",
              strokeOpacity: "0.25"
            }}
          >
            <g
              id="Home-#1"
              transform="translate(-3.000000, -4590.000000)"
              style={{ stroke: "#FFFFFF", strokeWidth: "13" }}
            >
              <g id="#6" transform="translate(3.000000, 4395.396076)">
                <path
                  d="M-91,713.398858 C-50.6965545,713.035952 -11.2847781,684.184947 27.2353292,626.845843 C85.01549,540.837187 108.108623,399.252145 108.108623,399.252145 C108.108623,399.252145 157.382979,127.951749 285.094065,404.190108 C412.805151,680.428468 626.436997,868.541054 829.737563,809.750327 C1033.03813,750.9596 912.819482,292.4453 1099,216.235099 C1223.12035,165.428298 1331.12035,242.774047 1423,448.272346"
                  id="Line-4"
                  transform="translate(666.000000, 510.831084) scale(1, -1) translate(-666.000000, -510.831084) "
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Case3;
