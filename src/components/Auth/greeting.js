import React, { Component } from "react";
// import Logo from '../../../static/assets/njangi-logo.svg'
export default class Greeting extends Component {
  render() {
    const { greet } = this.props;
    return (
      <div className="greeting">
        <div className="logo">
          {/* <Logo/> */}
        </div>
        <h1 className="name">angi</h1>
        <h1>{this.props.greet}</h1>
      </div>
    );
  }
}
