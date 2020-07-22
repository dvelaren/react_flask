import React, { Component } from "react";
import { Button } from "react-bootstrap";

// Redux
import { connect } from "react-redux";
import { updateUserStatus } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    userStatus: state.user.userStatus,
  };
};

class ExampleChild2 extends Component {
  decreaseUserStatus = () => {
    this.props.updateUserStatus(this.props.userStatus - 1)
  }
  render() {
    return (
      <div>
        <h3>Hijo 2</h3>
        <p>User Status: {this.props.userStatus}</p>
        <Button onClick={this.decreaseUserStatus}>Decrease</Button>
      </div>
    );
  }
}

export default connect(mapStateToProps,{updateUserStatus})(ExampleChild2);
