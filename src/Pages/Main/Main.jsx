import React, { Component } from "react";
import "./main.css";
import { Sidebar } from "../../Components";
import { ChatBox } from "../../Components";
import { withRouter } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeUser: ""
    };
  }
  handleActiveUser = activeUser => {
    this.setState({ activeUser: activeUser });
  };

  render() {
    return (
      <React.Fragment>
        <div className="inbox_msg">
          <Sidebar getActiveUser={this.handleActiveUser} />
          <ChatBox activeUser={this.state.activeUser} />
        </div>
      </React.Fragment>
    );
  }
}

export const MainPage = withRouter(Main);
