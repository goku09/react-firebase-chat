import React, { Component } from "react";

class UserItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
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
              {this.props.username} <span className="chat_date" />
            </h5>
            <p>{this.props.email}</p>
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
