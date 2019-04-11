import React, { Component } from "react";
import { ChatArea, ChatInput } from ".";
// import Navbar from "./Navbar";

export class ChatBox extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="mesgs">
        <ChatArea activeUser={this.props.activeUser} />
        <ChatInput activeUser={this.props.activeUser} />
      </div>
    );
  }
}
