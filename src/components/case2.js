import React, { useState, useEffect } from "react";
import videoPlayer from "../images/PhoneVideo.png";
import triangular from "../images/Triangular.png";
import rectangle from "../images/Rectangle.png";
import oval from "../images/Oval.png";
import sampleVideo from "../images/sample.mp4";
import lineImage from "../images/Line2.png";

const Case2 = () => {
  const phoneRect = usePhoneRect("videoPlayer");

  return (
    <div
      className="landing1"
      style={{
        display: "flex",
        alignItems: "left",
        flexDirection: "column",
        padding: "80px 10px",
        paddingBottom: "0px",
        minHeight: "100vh"
      }}
    >
      <p className="case_title" style={{ color: "#1C215D" }}>
        02. Reimagining online shopping in China
      </p>
      <a href="/case2">
        <p className="icon_text" style={{ color: "#1C215D" }}>
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
      <div
        style={{
          flex: 1,
          flexDirection: "row",
          position: "relative"
        }}
      >
        <div style={{ overflow: "hidden" }}>
        <div
            src={sampleVideo}
            style={{
              position: "absolute",
              bottom: "0px",
              left: `${phoneRect.x + phoneRect.width * 0.21}px`,
              top: `${phoneRect.y + phoneRect.height * 0.146}px`,
              width: `${phoneRect.width * 0.73}px`,
              height: `${phoneRect.height * 0.86}px`,
              zIndex: 2,
              backgroundColor: "#e3e7ed"
            }}
            autoPlay
            muted
            loop
          />
          <video
            src={sampleVideo}
            style={{
              position: "absolute",
              bottom: "0px",
              left: `${phoneRect.x + phoneRect.width * 0.21}px`,
              top: `${phoneRect.y + phoneRect.height * 0.146}px`,
              width: `${phoneRect.width * 0.73}px`,
              height: `${phoneRect.height * 0.86}px`,
              zIndex: 2
            }}
            autoPlay
            muted
            loop
          />
          <img
            alt=""
            id="videoPlayer"
            src={videoPlayer}
            style={{
              position: "absolute",
              left: "0px",
              bottom: "0px",
              margin: "0px",
              zIndex: 2,
              height: "100%"
            }}
          />
        </div>
        <div className="rotate">
          <img
            alt=""
            src={triangular}
            className="rotating"
            style={{
              position: "absolute",
              zIndex: 1
            }}
          />
          <img
            alt=""
            src={oval}
            className="rotating"
            style={{
              position: "absolute",
              right: "0px",
              zIndex: 1
            }}
          />
          <img
            alt=""
            src={rectangle}
            className="rotating1"
            style={{
              position: "absolute",
              right: "50px",
              top: "40%",
              zIndex: 1
            }}
          />
        </div>
      </div>
    </div>
  );
};

const usePhoneRect = id => {
  const [rect, setRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    let dom = document.getElementById(id);
    let rect = {
      x: dom.offsetLeft,
      y: dom.offsetTop,
      width: dom.offsetWidth,
      height: dom.offsetHeight
    };
    setTimeout(() => {
      setRect(rect);
    }, 0);
  });

  return rect;
};

export default Case2;
