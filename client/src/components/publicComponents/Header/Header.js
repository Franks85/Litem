import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Navbar } from 'react-materialize'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key="1">
            <NavLink to="/signup">Signup</NavLink>
          </li>,
          <li key="2">
            <NavLink to="/login">Login</NavLink>
          </li>
        ];
      default:
        return [
          <li key="1">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>,
          <li key="2">
            <NavLink to="/dashboard/dataEntry">NewItem</NavLink>
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
     
      <Navbar brand='LITEM' right>
        {this.renderContent()}
      </Navbar>
    )
  }
}

function mapStateToProps(state) {
  
  return { auth: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
