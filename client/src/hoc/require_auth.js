import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import axios from "axios";

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentDidMount() {
      axios.get("/api/profile").then(res => {
        if (!res.data) {
          return this.props.history.push("/login");
        }
        this.props.authenticate();
      });
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  return connect(null, actions)(Authentication);
}
