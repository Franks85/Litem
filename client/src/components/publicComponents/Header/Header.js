import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key="1">
            <a href="/signup">Signup</a>
          </li>,
          <li key="2">
            <a href="/login">Login</a>
          </li>
        ];
      default:
        return [
          <li key="1">
            <a href="/dashboard">Dashboard</a>
          </li>,
          <li key="2">
            <a href="/dashboard/dataEntry">NewItem</a>
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/dashboard" : "/"}
            className="left brand-logo"
          >
            Litem
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
