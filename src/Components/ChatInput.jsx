import React, { Component } from "react";

class ChatInput extends Component {
  state = {};
  render() {
    return (
      <div className="type_msg">
        <div className="input_msg_write">
          <input
            type="text"
            className="write_msg"
            placeholder="Type a message"
          />
          <button className="msg_send_btn" type="button">
            <i className="fa fa-paper-plane-o" aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }
}

export default ChatInput;
