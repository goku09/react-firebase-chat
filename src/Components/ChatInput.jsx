import React, { Component } from "react";

class ChatInput extends Component {
  state = {};
  render() {
    return (
      <div class="type_msg">
        <div class="input_msg_write">
          <input type="text" class="write_msg" placeholder="Type a message" />
          <button class="msg_send_btn" type="button">
            <i class="fa fa-paper-plane-o" aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }
}

export default ChatInput;
