import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";

import Header from "./components/Header/Header";
import Landing from './components/Landing/Landing';
import Auth from './components/Auth/auth';
import Dashboard from './components/Dashboard/Dashboard'

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
            <Route path='/auth' component={Auth} />
            <Route path='/dashboard' component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
