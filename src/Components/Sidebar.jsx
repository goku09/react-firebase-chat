/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { SearchBox, UserList } from ".";

export class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleActiveUser = (activeUser) => {
    const { getActiveUser } = this.props;
    getActiveUser(activeUser);
  };

  render() {
    const { authUser } = this.props;
    return (
      <div className="inbox_people">
        <SearchBox authUser={authUser} />
        <UserList getActiveUser={this.handleActiveUser} authUser={authUser} />
      </div>
    );
  }
}
