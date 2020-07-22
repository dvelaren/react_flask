import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

// Redux
import { connect } from "react-redux";
import { updateUserStatus } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    userStatus: state.user.userStatus,
  };
};

class ExampleChild1 extends Component {
  increaseUserStatus = () => {
    this.props.updateUserStatus(this.props.userStatus + 1);
  };
  render() {
    return (
      <Card>
        <Card.Header>Hijo 1</Card.Header>
        <Card.Body>
          <Card.Title>Incrementar Status</Card.Title>
          <Card.Text>User Status: {this.props.userStatus}</Card.Text>
          <Button variant="primary" onClick={this.increaseUserStatus}>
            Increase
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default connect(mapStateToProps, { updateUserStatus })(ExampleChild1);
