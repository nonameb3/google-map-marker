import React from "react";
import GoogleMapReact from "google-map-react";

import MakerComponent from "./Components/Maker";

function App(props) {
  const {
    center = {
      lat: 13.724,
      lng: 100.493,
    },
    zoom = 6,
  } = props;

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }} // google map apiKey
        defaultCenter={center}
        defaultZoom={zoom}
        distanceToMouse={() => {}}>
        <MakerComponent
          lat={13.7567}
          lng={100.5019}
          text={"Democracy Monument"}
        />
      </GoogleMapReact>
    </div>
  );
}

export default App;
