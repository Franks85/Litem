import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return [
          <li key="1">
            <NavLink to="/signup">Signup</NavLink>
          </li>,
          <li key="2">
            <NavLink to="/login">Login</NavLink>
          </li>,
          <li key="3">
            <NavLink to="/service">Search Service</NavLink>
          </li>
        ]
      default:
        return [
          <li key="1">
            <NavLink to="/dashboard" >Dashboard</NavLink>
          </li>,
          <li key="2">
            <NavLink to="/dashboard/dataEntry">NewItem</NavLink>
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>
        ]
    }
  }

  render() {
    return (
      <nav className="pink">
        <div className="nav-wrapper container" >
          <a id="logo-container" href="/" className="brand-logo">
            LITEM
          </a>
          <ul className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>

          <ul id="nav-mobile" className="sidenav">
            {this.renderContent()}
          </ul>
          <a href="#mobile" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header)

  
