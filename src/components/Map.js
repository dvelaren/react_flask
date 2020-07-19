import React from "react";
import GoogleMapReact from "google-map-react";
import "../styles/Map.css";

var places = [
  {
    name: "Madrileña",
    position: {
      lat: 40.417474,
      lng: -3.703778,
    },
    numMachines: 2,
    content: "Hola Madrid",
    status: "danger",
  },
  {
    name: "Oslo",
    position: {
      lat: 59.915232,
      lng: 10.752978,
    },
    numMachines: 4,
    content: "Hola Oslo",
    status: "primary",
  },
];

const getInfoWindowString = (place) => `
    <div>
      <div style="font-size: 16px;">
        ${place.name}
      </div>
      <div style="font-size: 14px;">
        <span style="color: grey;">
        ${place.content}
        </span>
      </div>
    </div>`;

const handleApiLoaded = (map, maps, places) => {
  const markers = [];
  const infowindows = [];
  let activeInfoWindow = null;
  places.forEach((place) => {
    markers.push(
      new maps.Marker({
        position: {
          lat: place.position.lat,
          lng: place.position.lng,
        },
        icon: {
          url: require(`../assets/air-blower-${place.status}.svg`),
          scaledSize: new maps.Size(35, 35),
          origin: new maps.Point(0, 0),
        },
        label: {
          color: "#191970",
          fontSize: "20px",
          fontWeight: "bold",
          text: place.numMachines.toString()
        },
        map,
      })
    );

    infowindows.push(
      new maps.InfoWindow({
        content: getInfoWindowString(place),
      })
    );
  });

  map.addListener("click", () => {
    activeInfoWindow && activeInfoWindow.close();
    activeInfoWindow = null;
  });

  markers.forEach((marker, i) => {
    marker.addListener("click", () => {
      activeInfoWindow && activeInfoWindow.close();
      infowindows[i].open(map, marker);
      activeInfoWindow = infowindows[i];
    });
  });
};

export const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        distanceToMouse={() => {}}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) =>
          handleApiLoaded(map, maps, places)
        }
      >
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
