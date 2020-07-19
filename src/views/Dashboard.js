import React, { Component } from "react";

// Components
import Map from "../components/Map";

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
}; // our location object from earlier

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Map location={location} zoomLevel={17} />
      </div>
    );
  }
}
