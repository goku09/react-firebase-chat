import React, { Component } from "react";
import SearchBox from "./SearchBox";
import UserList from "./UserList";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className="inbox_people">
        <SearchBox />
        <UserList />
      </div>
    );
  }
}

export default Sidebar;
