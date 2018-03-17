import React, { Component } from 'react'
import { connect } from "react-redux";
import { reduxForm } from 'redux-form';
import {Redirect} from 'react-router-dom'
import * as actions from "../../../actions";
import AdminForm from './AdminForm/AdminDataEntry';

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
        <AdminForm />
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
}

Dashboard = connect(mapStateToProps, actions)(Dashboard);


export default reduxForm({
  form: "dataEntry"
})(Dashboard);
