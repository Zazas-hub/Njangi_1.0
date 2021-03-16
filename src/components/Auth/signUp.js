import React, { Component } from "react";
import LeftContent from "./leftContent";
import Greeting from "./greeting";
export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="sign-up">
        <div className="container">
          <div className="left-side">
            <LeftContent />
          </div>
          <div className="right-side">
            <Greeting greet="Sign Up Now " />
          </div>
          <div className="footer"></div>
        </div>
      </div>
    );
  }
}
