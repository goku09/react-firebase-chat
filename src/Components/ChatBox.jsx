import React, { Component } from "react";
import ChatArea from "./ChatArea";
import ChatInput from "./ChatInput";
//import Navbar from "./Navbar";

class ChatBox extends Component {
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

export default ChatBox;
