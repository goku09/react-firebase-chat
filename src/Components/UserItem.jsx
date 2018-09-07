import React, { Component } from "react";

class UserItem extends Component {
  state = {};
  render() {
    let itemClass = this.getItemClass();

    return (
      <div className={itemClass}>
        <div className="chat_people">
          <div className="chat_img">
            <img
              src="https://ptetutorials.com/images/user-profile.png"
              alt="User"
            />
          </div>
          <div className="chat_ib">
            <h5>
              Demo User <span className="chat_date">Date</span>
            </h5>
            <p>Some text</p>
          </div>
        </div>
      </div>
    );
  }

  getItemClass() {
    let itemClass = "chat_list";
    itemClass += this.props.isActive ? " active_chat" : "";
    return itemClass;
  }
}

export default UserItem;
