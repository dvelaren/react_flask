import React, { Component } from "react";

// Styles
import '../styles/Home.css'

// Assets
import logo from "../assets/logo.svg";

// Components
import CurrentTime from "../components/CurrentTime";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <CurrentTime />
        </header>
      </div>
    );
  }
}
