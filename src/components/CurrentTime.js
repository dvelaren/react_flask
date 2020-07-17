import React, { Component } from "react";

export default class CurrentTime extends Component {
  state = {
    currentTime: 0,
  }

  intervalID

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  getData = () => {
    fetch("/api/time")
      .then((response) => response.json())
      .then((data) => {
        this.setState({currentTime: data.time});
        // call getData() again in 5 seconds
        this.intervalID = setTimeout(this.getData.bind(this), 1000);
      });
  };

  render() {
    return <p>
      The current time is {this.state.currentTime}
    </p>;
  }
}
