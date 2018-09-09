import React, { Component } from "react";
//import logo from "../../logo.svg";
import "./main.css";
import Sidebar from "../Sidebar";
import ChatBox from "../ChatBox";
//import Navbar from "../Navbar";
import { firebase } from "../../Firebase";
import { Link, withRouter } from "react-router-dom";

class Main extends Component {
  // componentDidMount() {
  //     console.log(firebase.auth.currentUser.email);
  // }

  render() {
    return (
      <React.Fragment>
        <div className="inbox_msg">
          <Sidebar />
          <ChatBox />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Main);
