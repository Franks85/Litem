import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";

import Header from "./components/publicComponents/Header/Header";
import Landing from './components/publicComponents/Landing/Landing';
import Login from './components/Auth/login'
import Signup from './components/Auth/signup'
import Dashboard from './components/AdminComponents/Dashboard/Dashboard';
import DataEntry from './components/AdminComponents/Dashboard/DataEntry/DataEntry'

class App extends Component {
  
  componentDidMount() {
    this.props.fetchUser()
}

  render() {

    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/dashboard' exact component={Dashboard} />
            <Route path='/dashboard/dataEntry' component={DataEntry} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
