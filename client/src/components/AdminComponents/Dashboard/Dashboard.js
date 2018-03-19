import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import * as actions from "../../../actions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUser();
    if (!this.props.auth) {
      return <Redirect to="/" />;
    }
  }

  render() {
    return (
      <div>
        <h4 style={{ marginTop: 40 }}>Welcome to your admin dashboard! </h4>
        <p>Click on the red button to start inserting your data. </p>
        <h4>Item list...</h4>
        <div className="fixed-action-btn">
          <Link to="/dashboard/dataEntry" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>

      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, actions)(Dashboard);
