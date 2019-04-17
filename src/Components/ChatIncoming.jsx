/* eslint-disable react/prop-types */
import React, { Component } from "react";

export class ChatIncoming extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { text } = this.props;
    return (
      <div className="incoming_msg">
        <div className="incoming_msg_img">
          <img src="https://ptetutorials.com/images/user-profile.png" alt="User" />
        </div>
        <div className="received_msg">
          <div className="received_withd_msg">
            <p>{text}</p>
            <span className="time_date" />
          </div>
        </div>
      </div>
    );
  }
}
