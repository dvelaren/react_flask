import React, { Component } from "react";

// Constants
import {EUROPE_CENTER} from '../config/Constants'

// Components
import Map from "../components/Map";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Map location={EUROPE_CENTER} zoomLevel={4} />
      </div>
    );
  }
}
