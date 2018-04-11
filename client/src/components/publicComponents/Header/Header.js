import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar, NavItem } from 'react-materialize'

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
     
      <Navbar brand='LITEM' right>
        <NavItem>{this.renderContent()}</NavItem>
      </Navbar>
    )
  }
}

function mapStateToProps(state) {
  
  return { auth: state.auth.user };
}

export default connect(mapStateToProps)(Header);
