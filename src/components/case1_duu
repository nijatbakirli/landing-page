import React, { useState, useEffect } from "react";
import iPhoneImage from "../images/iPhones.png";
import lineImage from "../images/Line.png";

const Case1 = () => {
  const iPhoneLeft = useIPhoneLeft("iPhoneImg");

  return (
    <div id="landing1" style={{ position: "relative" }}>
      <div
        className="landing1"
        style={{
          display: "flex",
          alignItems: "left",
          flexDirection: "column",
          minHeight: "100vh"
        }}
      >
        <div
          style={{
            flex: 1,
            padding: "80px 10px"
          }}
        >
          <p className="case_title" style={{ color: "#FFFFFF" }}>
            01. Shaping the future of
            <br />
            agriculture
          </p>

          <a
            href="/case1"
            style={{
              fontFamily: ".SFNSDisplay",
              fontSize: "24px",
              color: "#FFFFFF",
              letterSpacing: "-0.67px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ marginRight: "10px" }}>Explore this case</p>
              <img
                alt={"No image"}
                src={lineImage}
                style={{ width: "28px", height: "14px" }}
              />
            </div>
          </a>
        </div>
      </div>
      <img
        src={iPhoneImage}
        id="iPhoneImg"
        className="floating-image"
        style={{
          left: `${iPhoneLeft}px`
        }}
      />
    </div>
  );
};

const useIPhoneLeft = id => {
  const [iPhoneLeft, setIPhoneLeft] = useState(window.clientWidth);
  const windowWidth = useWindowWidth();
  const rect = useRect("landing1");

  useEffect(() => {
    let dom = document.getElementById(id);
    console.log(windowWidth, dom.clientWidth, rect.y);
    setIPhoneLeft(windowWidth - dom.clientWidth + Math.max(rect.y, 0));
  });

  return iPhoneLeft;
};

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
};

const useRect = id => {
  const [rect, setRect] = useState({
    x: 0,
    y: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    top: 0,
    right: window.innerWidth,
    bottom: window.innerHeight,
    left: 0
  });
  useEffect(() => {
    let dom = document.getElementById(id);
    var rect = dom.getBoundingClientRect();
    const handleScroll = () => setRect(rect);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return rect;
};

export default Case1;
