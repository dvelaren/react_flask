import React, { Component } from "react";

// Components
import ExampleChild1 from "../components/ExampleChild1";
import ExampleChild2 from "../components/ExampleChild2";
import { Container, Row, Col } from "react-bootstrap";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2 style={styles.title}>Dashboard</h2>
        <Container>
          <Row>
            <Col><ExampleChild1 /></Col>
            <Col><ExampleChild2 /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const styles = {
  title: {
    marginLeft: '1%',
  }
}