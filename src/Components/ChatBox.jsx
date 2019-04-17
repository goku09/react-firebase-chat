/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { ChatArea, ChatInput } from ".";
// import Navbar from "./Navbar";

export class ChatBox extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { authUser, activeUser } = this.props;
    return (
      <div className="mesgs">
        <ChatArea activeUser={activeUser} authUser={authUser} />
        <ChatInput activeUser={activeUser} authUser={authUser} />
      </div>
    );
  }
}
