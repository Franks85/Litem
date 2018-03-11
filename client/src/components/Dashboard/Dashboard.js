import React, { Component } from 'react'
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'
import * as actions from "../../actions";

class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchUser()
    if(!this.props.auth){
      return (
        <Redirect to='/' />
      );
    }
  }

  render() {
    
    return (
      <div>
        <h1>Main page</h1>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Dashboard);
