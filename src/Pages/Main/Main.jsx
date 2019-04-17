/* eslint-disable react/prop-types */
import React, { Component } from "react";
import "./main.css";
import { withRouter } from "react-router-dom";
import { Sidebar, ChatBox } from "../../Components";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeUser: "",
    };
  }

  handleActiveUser = (activeUser) => {
    this.setState({ activeUser });
  };

  render() {
    const { authUser } = this.props;
    const { activeUser } = this.state;
    return (
      <React.Fragment>
        <div className="inbox_msg">
          <Sidebar getActiveUser={this.handleActiveUser} authUser={authUser} />
          <ChatBox activeUser={activeUser} authUser={authUser} />
        </div>
      </React.Fragment>
    );
  }
}

export const MainPage = withRouter(Main);
