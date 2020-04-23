/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Header, UserList } from ".";

export class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {} = this.props;
    return (
      <div className="inbox_people">
        <Header />
        <UserList />
      </div>
    );
  }
}
