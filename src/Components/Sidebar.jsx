import React, { Component } from "react";
import { SearchBox } from ".";
import { UserList } from ".";

export class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActiveUser: ""
    };
  }

  handleActiveUser = activeUser => {
    this.setState({ isActiveUser: activeUser });
    this.props.getActiveUser(activeUser);
  };

  render() {
    return (
      <div className="inbox_people">
        <SearchBox />
        <UserList getActiveUser={this.handleActiveUser} />
      </div>
    );
  }
}
