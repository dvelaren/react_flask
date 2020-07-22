import React, { Component } from "react";

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
      <div>
        <h3>Hijo 1</h3>
        <p>User Status: {this.props.userStatus}</p>
        <button onClick={this.increaseUserStatus}>Increase</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, { updateUserStatus })(ExampleChild1);
