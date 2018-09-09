import React, { Component } from "react";

class ChatOutgoing extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="outgoing_msg">
        <div className="sent_msg">
          <p>{this.props.text}</p>
          <span className="time_date"> </span>
        </div>
      </div>
    );
  }
}

export default ChatOutgoing;
