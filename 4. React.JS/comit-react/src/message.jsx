import React, { Component } from "react";

class Message extends Component {
  render() {
    const name = this.props.nameToDisplay;
    return <h1>From Message class to {name}</h1>;
  }
}

export default Message;
