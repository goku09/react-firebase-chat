import React, { Component } from "react";
import UserItem from "./UserItem";

class UserList extends Component {
  state = {};
  render() {
    return (
      <div className="inbox_chat">
        <UserItem isActive={true} />
        <UserItem isActive={false} />
        <UserItem isActive={false} />
        <UserItem isActive={false} />
        <UserItem isActive={false} />
        <UserItem isActive={false} />
      </div>
    );
  }
}

export default UserList;
