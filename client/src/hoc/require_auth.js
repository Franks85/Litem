import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import PropTypes from "prop-types";

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    };

    componentDidMount() {
      this.props.fetchUser();
      
    }

    componentWillUpdate(nextProps, nextState) {
      if(nextProps.authenticated === false) {
        this.context.router.history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.user };
  }

  return connect(mapStateToProps, actions)(Authentication);
}
