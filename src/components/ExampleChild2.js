import React, { Component } from "react";

// Redux
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    userStatus: state.user.userStatus,
  };
};

class ExampleChild2 extends Component {
  render() {
    return (
    <div> 
      <h3>Hijo 2</h3>
    <p>User Status: {this.props.userStatus}</p>
    </div>
    );
  }
}

export default connect(mapStateToProps)(ExampleChild2);