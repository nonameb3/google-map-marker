import React from "react";
import ReactTooltip from "react-tooltip";

import markerIcon from "../icon/icons8-marker-40.png";

const MakerComponent = ({ text, googleMapUrl }) => {
  function openInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className='maker'>
      <img
        src={markerIcon}
        alt='Logo'
        data-tip={text}
        onClick={() => googleMapUrl && openInNewTab(googleMapUrl)}
        style={{
          height: "30px",
          width: "30px",
          transform: "translate(-50%, -50%)",
          transitionDuration: "200ms",
          cursor: "pointer",
        }}
      />
      <ReactTooltip multiline={true} />
    </div>
  );
};

export default MakerComponent;
