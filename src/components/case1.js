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
          <a href="/case1">
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
      </div>
      <img
        alt=""
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
  const [iPhoneLeft, setIPhoneLeft] = useState(3000);
  const rect = useRect("landing1");

  useEffect(() => {
    let dom = document.getElementById(id);
    setIPhoneLeft(window.innerWidth - dom.clientWidth + Math.max(rect.y, 0));
  }, [id, rect]);

  return iPhoneLeft;
};

const useRect = id => {
  const [rect, setRect] = useState({
    x: 0,
    y: 0,
    width: 3000,
    height: 3000,
    top: 0,
    right: 3000,
    bottom: 3000,
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
