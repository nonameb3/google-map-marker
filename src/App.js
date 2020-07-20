import React from "react";
import GoogleMapReact from "google-map-react";

import MakerComponent from "./Components/Maker";

function App(props) {
  const {
    center = {
      lat: 13.724,
      lng: 100.493,
    },
    zoom = 6.2,
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
          googleMapUrl={
            "https://www.google.com/maps/place/Democracy+Monument/@13.7567046,100.5018897,15z/data=!4m5!3m4!1s0x0:0xe75937107959d3b6!8m2!3d13.7567046!4d100.5018897"
          }
        />
        <MakerComponent
          lat={13.6287474}
          lng={100.5873017}
          text={"The Erawan Museum"}
          googleMapUrl={
            "https://www.google.com/maps/place/The+Erawan+Museum/@13.6287474,100.5873017,17z/data=!3m1!4b1!4m12!1m6!3m5!1s0x30e2a0ee2f78efa3:0x18a7ce67d7ff9293!2sThe+Erawan+Museum!8m2!3d13.6285267!4d100.5891131!3m4!1s0x30e2a0ee2f78efa3:0x18a7ce67d7ff9293!8m2!3d13.6285267!4d100.5891131"
          }
        />
      </GoogleMapReact>
    </div>
  );
}

export default App;
