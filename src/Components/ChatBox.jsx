import React, { Component } from "react";
import ChatArea from "./ChatArea";
import ChatInput from "./ChatInput";
//import Navbar from "./Navbar";

class ChatBox extends Component {
  state = {};
  render() {
    return (
      <div class="mesgs">
        <ChatArea />
        <ChatInput />
      </div>
    );
  }
}

export default ChatBox;
