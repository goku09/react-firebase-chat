import React, { Component } from "react";
//import logo from "../../logo.svg";
import "./main.css";
import Sidebar from "../Sidebar";
import ChatBox from "../ChatBox";
//import Navbar from "../Navbar";
import { firebase } from "../../Firebase";
import { Link, withRouter } from "react-router-dom";

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

export default withRouter(Main);
