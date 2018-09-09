import React, { Component } from "react";

class ChatIncoming extends Component {
  state = {};
  render() {
    return (
      <div className="incoming_msg">
        <div className="incoming_msg_img">
          {" "}
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="User"
          />{" "}
        </div>
        <div className="received_msg">
          <div className="received_withd_msg">
            <p>Test which is a new approach to have all solutions</p>
            <span className="time_date"> 11:01 AM | June 9</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatIncoming;
