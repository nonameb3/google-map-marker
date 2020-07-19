import React from "react";

const MakerComponent = ({ text }) => {
  function changeStyle(e) {
    e.target.style.background = "red";
    e.target.style.transform = "translate(-50%, -50%) scale(1.2)";
  }

  function onMouseOff(e) {
    e.target.style.background = "grey";
    e.target.style.transform = "translate(-50%, -50%)";
  }

  return (
    <div
      onMouseOver={changeStyle}
      onMouseOut={onMouseOff}
      style={{
        color: "white",
        background: "grey",
        padding: "15px 10px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        transform: "translate(-50%, -50%)",
        transitionDuration: "200ms",
      }}>
      {text}
    </div>
  );
};

export default MakerComponent;
