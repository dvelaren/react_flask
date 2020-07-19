import React from "react";
import GoogleMapReact from "google-map-react";
import "../styles/Map.css";

// Components
import LocationPin from "./LocationPin";

export const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        distanceToMouse={()=>{}}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;