import React, { Component } from "react";
import logo from "../../logo.svg";
import "./main.css";
import Sidebar from "../Sidebar";
import ChatBox from "../ChatBox";
//import Navbar from "../Navbar";

class Main extends Component {
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

export default Main;
