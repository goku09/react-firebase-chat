import React, { Component } from "react";

export class ChatOutgoing extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { text } = this.props;
    return (
      <div className="outgoing_msg">
        <div className="sent_msg">
          <p>{text}</p>
          <span className="time_date" />
        </div>
      </div>
    );
  }
}
