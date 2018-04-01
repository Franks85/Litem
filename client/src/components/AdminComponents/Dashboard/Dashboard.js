import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {

  render() {
    return (
      <div>
        <h4 style={{ marginTop: 40 }}>Welcome to your admin dashboard! </h4>
        <p>Click on the red button to start inserting your data. </p>
        <h4>Item list...</h4>
        <div className="fixed-action-btn">
          <Link
            to="/dashboard/dataEntry"
            className="btn-floating btn-large red"
          >
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
