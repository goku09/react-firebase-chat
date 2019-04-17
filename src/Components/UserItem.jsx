/* eslint-disable react/prop-types */
import React, { Component } from "react";

export class UserItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  getItemClass() {
    const { isActive } = this.props;
    let itemClass = "chat_list";
    itemClass += isActive ? " active_chat" : "";
    return itemClass;
  }

  render() {
    const {
      username, email, onItemClick, userId,
    } = this.props;
    const itemClass = this.getItemClass();

    return (
      <div className={itemClass} onClick={() => onItemClick(userId)}>
        <div className="chat_people">
          <div className="chat_img">
            <img src="https://ptetutorials.com/images/user-profile.png" alt="User" />
          </div>
          <div className="chat_ib">
            <h5>
              {username}
              {" "}
              <span className="chat_date" />
            </h5>
            <p>{email}</p>
          </div>
        </div>
      </div>
    );
  }
}
