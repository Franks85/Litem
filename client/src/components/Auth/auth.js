import React, { Component } from "react";
import axios from "axios";
import Signup from './signup';
import Login from './login';

class Auth extends Component {
  
  render() {
    return (
      <div>
        <Signup />
    
      </div>
    );
  }
}

export default Auth;