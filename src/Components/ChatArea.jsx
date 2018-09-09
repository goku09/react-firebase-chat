import React, { Component } from "react";
import ChatIncoming from "./ChatIncoming";
import ChatOutgoing from "./ChatOutgoing";

class ChatArea extends Component {
  state = {};
  render() {
    return (
      <div className="msg_history">
        <ChatIncoming />
        <ChatOutgoing />
        <ChatIncoming />
        <ChatOutgoing />
        <ChatIncoming />
        <ChatOutgoing />
        <ChatIncoming />
        <ChatOutgoing />
      </div>
    );
  }
}

export default ChatArea;
